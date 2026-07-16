import { usePage } from '../hooks/usePage.js'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import { PageLoading, PageError } from '../components/PageState.jsx'

export default function About() {
  const { page, status } = usePage('about')

  useDocumentMeta({ title: page?.seo_title, description: page?.seo_description })

  if (status === 'loading') return <PageLoading />
  if (status === 'error' || !page) return <PageError />

  const { hero, values, flagship } = page.content

  return (
    <>
      <section className="container-page pt-16 pb-20 md:pt-24">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600 mb-5">
          {hero.eyebrow}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] max-w-3xl mb-8">
          {hero.title}
        </h1>
        <p className="text-ink-400 text-lg leading-relaxed max-w-2xl">
          {hero.description}
        </p>
      </section>

      <section className="container-page pb-20">
        <div className="rounded-[2rem] overflow-hidden aspect-[21/9] bg-ink-100">
          <img
            src={hero.image}
            alt={hero.image_alt}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="bg-white border-y border-ink-100">
        <div className="container-page py-20 grid md:grid-cols-3 gap-10">
          {(values?.items ?? []).map((v) => (
            <div key={v.title}>
              <h3 className="text-xl font-bold mb-3">{v.title}</h3>
              <p className="text-ink-400 leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600 mb-4">
            {flagship.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            {flagship.title}
          </h2>
          <p className="text-ink-400 leading-relaxed mb-8 max-w-lg">
            {flagship.description}
          </p>
          {flagship.cta && (
            <a
              href={flagship.cta.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink-900 text-white font-medium px-7 py-3.5 hover:bg-ink-700 transition-colors"
            >
              {flagship.cta.label}
            </a>
          )}
        </div>
        <div className="rounded-[2rem] overflow-hidden bg-ink-100">
          <img
            src={flagship.image}
            alt={flagship.image_alt}
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </>
  )
}
