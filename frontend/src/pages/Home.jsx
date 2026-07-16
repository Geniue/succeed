import { Link } from 'react-router-dom'
import { useSite, phoneHref } from '../context/SiteContext.jsx'
import { usePage } from '../hooks/usePage.js'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import { PageLoading, PageError } from '../components/PageState.jsx'
import ContactForm from '../components/ContactForm.jsx'

export default function Home() {
  const { site } = useSite()
  const { page, status } = usePage('home')

  useDocumentMeta({ title: page?.seo_title, description: page?.seo_description })

  if (status === 'loading') return <PageLoading />
  if (status === 'error' || !page) return <PageError />

  const { hero, statistics, about, flagship, contact } = page.content

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-page grid md:grid-cols-2 gap-12 items-center pt-16 pb-20 md:pt-24 md:pb-28">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600 mb-5">
              {hero.eyebrow}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.08] mb-6">
              {hero.title}{' '}
              <span className="text-gold-600">{hero.highlighted_text}</span>
            </h1>
            <p className="text-ink-400 text-lg leading-relaxed max-w-lg mb-9">
              {hero.description}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              {hero.primary_cta && (
                <a
                  href={hero.primary_cta.url}
                  className="rounded-full bg-ink-900 text-white font-medium px-7 py-3.5 hover:bg-ink-700 transition-colors"
                >
                  {hero.primary_cta.label}
                </a>
              )}
              {hero.secondary_cta && (
                <Link
                  to={hero.secondary_cta.url}
                  className="rounded-full border border-ink-200 text-ink-900 font-medium px-7 py-3.5 hover:border-ink-900 transition-colors"
                >
                  {hero.secondary_cta.label}
                </Link>
              )}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-ink-100 shadow-xl">
              <img
                src={hero.image}
                alt={hero.image_alt}
                className="w-full h-full object-cover"
              />
            </div>
            {hero.badge && (
              <div className="absolute -bottom-6 -left-6 hidden sm:block bg-white rounded-2xl shadow-lg px-6 py-5 max-w-[220px]">
                <p className="text-2xl font-display font-bold text-ink-900">{hero.badge.value}</p>
                <p className="text-xs text-ink-400 mt-1">{hero.badge.label}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Trust stats */}
      <section className="border-y border-ink-100 bg-white">
        <div className="container-page py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {(statistics?.items ?? []).map((s) => (
            <div key={s.label}>
              <p className="text-3xl md:text-4xl font-display font-bold text-ink-900">
                {s.value}
              </p>
              <p className="text-sm text-ink-400 mt-2 leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About teaser */}
      <section className="container-page py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 rounded-[2rem] overflow-hidden bg-ink-100">
          <img
            src={about.image}
            alt={about.image_alt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600 mb-4">
            {about.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            {about.title}
          </h2>
          <p className="text-ink-400 leading-relaxed mb-6">
            {about.description}
          </p>
          {about.cta && (
            <Link
              to={about.cta.url}
              className="inline-flex items-center gap-2 text-ink-900 font-medium border-b-2 border-gold-500 pb-1"
            >
              {about.cta.label}
            </Link>
          )}
        </div>
      </section>

      {/* Flagship brand showcase */}
      <section className="bg-ink-950 text-white">
        <div className="container-page py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500 mb-4">
              {flagship.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              {flagship.title}
            </h2>
            <p className="text-ink-200 leading-relaxed mb-8 max-w-lg">
              {flagship.description}
            </p>
            {flagship.cta && (
              <a
                href={flagship.cta.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold-500 text-ink-950 font-semibold px-7 py-3.5 hover:bg-gold-300 transition-colors"
              >
                {flagship.cta.label}
              </a>
            )}
          </div>
          <div className="rounded-[2rem] overflow-hidden">
            <img
              src={flagship.image}
              alt={flagship.image_alt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white border-t border-ink-100 scroll-mt-20">
        <div className="container-page py-24">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600 mb-5">
            {contact.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-xl mb-14">
            {contact.title}
          </h2>

          <div className="grid md:grid-cols-5 gap-14">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h3 className="text-xs uppercase tracking-widest text-ink-400 font-semibold mb-2">
                  {contact.phone_label}
                </h3>
                <a href={`tel:${phoneHref(site.contact?.phone)}`} className="text-xl font-medium text-ink-900">
                  {site.contact?.phone}
                </a>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-ink-400 font-semibold mb-2">
                  {contact.email_label}
                </h3>
                <a href={`mailto:${site.contact?.email}`} className="text-xl font-medium text-ink-900 break-all">
                  {site.contact?.email}
                </a>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-ink-400 font-semibold mb-2">
                  {contact.location_label}
                </h3>
                <p className="text-xl font-medium text-ink-900">{site.contact?.location}</p>
              </div>
              <div className="pt-4 border-t border-ink-100">
                <p className="text-sm text-ink-400 leading-relaxed">
                  {contact.supporting_text}
                </p>
              </div>
            </div>

            <div className="md:col-span-3 bg-sand rounded-[2rem] border border-ink-100 p-8 md:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
