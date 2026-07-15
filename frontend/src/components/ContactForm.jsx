import { useState } from 'react'
import { useSite } from '../context/SiteContext.jsx'
import { submitContactForm, ApiError } from '../lib/api.js'

const initialState = { name: '', email: '', phone: '', message: '', website: '' }

export default function ContactForm() {
  const { site } = useSite()
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email.'
    if (!form.message.trim() || form.message.trim().length < 10) {
      e.message = 'Please add a short message (at least 10 characters).'
    }
    return e
  }

  async function handleSubmit(ev) {
    ev.preventDefault()

    const clientErrors = validate()
    setErrors(clientErrors)
    if (Object.keys(clientErrors).length > 0) return

    setStatus('submitting')

    try {
      await submitContactForm({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || undefined,
        message: form.message.trim(),
        website: form.website, // honeypot — always empty for real visitors
      })
      setStatus('success')
      setErrors({})
      setForm(initialState)
    } catch (err) {
      if (err instanceof ApiError && err.status === 422 && err.errors) {
        // Map Laravel's { field: ["msg", ...] } into { field: "msg" }
        const fieldErrors = {}
        for (const [field, messages] of Object.entries(err.errors)) {
          fieldErrors[field] = messages[0]
        }
        setErrors(fieldErrors)
        setStatus('idle')
      } else if (err instanceof ApiError && err.status === 429) {
        setErrors({})
        setStatus('rate-limited')
      } else {
        setErrors({})
        setStatus('error')
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Full name" error={errors.name}>
          <input
            type="text"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            className={inputClass(errors.name)}
            placeholder="Jane Doe"
          />
        </Field>

        <Field label="Email" error={errors.email}>
          <input
            type="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            className={inputClass(errors.email)}
            placeholder="jane@email.com"
          />
        </Field>
      </div>

      <Field label="Phone (optional)" error={errors.phone}>
        <input
          type="tel"
          value={form.phone}
          onChange={(e) => update('phone', e.target.value)}
          className={inputClass(errors.phone)}
          placeholder="+971 5X XXX XXXX"
        />
      </Field>

      <Field label="Message" error={errors.message}>
        <textarea
          rows={5}
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          className={inputClass(errors.message)}
          placeholder="Tell us a little about your enquiry..."
        />
      </Field>

      {/*
        Honeypot: real visitors never see or focus this field. Bots that
        fill every input on the page will fill it, and the backend quietly
        discards submissions where it's non-empty.
      */}
      <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => update('website', e.target.value)}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full sm:w-auto rounded-full bg-ink-900 text-white font-medium px-8 py-3.5 hover:bg-ink-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>

      {status === 'success' && (
        <p className="text-sm text-ink-600" role="status">
          Thanks for reaching out — we've received your message and will get
          back to you shortly.
        </p>
      )}

      {status === 'rate-limited' && (
        <p className="text-sm text-red-600" role="alert">
          You've sent a few messages in a short time. Please wait a minute
          and try again.
        </p>
      )}

      {status === 'error' && (
        <p className="text-sm text-red-600" role="alert">
          Something went wrong sending your message. Please try again, or
          email us directly at{' '}
          <a href={`mailto:${site.contact?.email}`} className="underline">
            {site.contact?.email}
          </a>
          .
        </p>
      )}
    </form>
  )
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-ink-900 mb-1.5">{label}</span>
      {children}
      {error && <span className="block text-xs text-red-600 mt-1.5">{error}</span>}
    </label>
  )
}

function inputClass(error) {
  return `w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400/70 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-shadow ${
    error ? 'border-red-400' : 'border-ink-100'
  }`
}
