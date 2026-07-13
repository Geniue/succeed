import { useState } from 'react'
import { site } from '../siteConfig.js'

const initialState = { name: '', email: '', phone: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | success

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email.'
    if (!form.message.trim()) e.message = 'Please add a short message.'
    return e
  }

  function handleSubmit(ev) {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length > 0) return

    // NOTE: This form is frontend-only. To actually receive submissions,
    // connect it to a form backend (e.g. Formspree, EmailJS, or your own API)
    // and replace this block with a real POST request. Until then it opens
    // the visitor's email client as a working fallback.
    const subject = encodeURIComponent(`New enquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
    )
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setStatus('success')
    setForm(initialState)
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field
          label="Full name"
          error={errors.name}
        >
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

      <Field label="Phone (optional)">
        <input
          type="tel"
          value={form.phone}
          onChange={(e) => update('phone', e.target.value)}
          className={inputClass()}
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

      <button
        type="submit"
        className="w-full sm:w-auto rounded-full bg-ink-900 text-white font-medium px-8 py-3.5 hover:bg-ink-700 transition-colors"
      >
        Send message
      </button>

      {status === 'success' && (
        <p className="text-sm text-ink-600" role="status">
          Your email app should now be open with your message ready to send.
          If it didn't open, email us directly at{' '}
          <a href={`mailto:${site.email}`} className="underline">
            {site.email}
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
