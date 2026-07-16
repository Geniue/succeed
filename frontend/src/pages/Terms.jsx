import { usePage } from '../hooks/usePage.js'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import { PageLoading, PageError } from '../components/PageState.jsx'

export default function Terms() {
  const { page, status } = usePage('terms')

  useDocumentMeta({ title: page?.seo_title, description: page?.seo_description })

  if (status === 'loading') return <PageLoading />
  if (status === 'error' || !page) return <PageError />

  const { eyebrow, title, last_updated, body } = page.content

  return (
    <section className="container-page pt-16 pb-24 md:pt-24">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600 mb-5">
        {eyebrow}
      </p>
      <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-4">
        {title}
      </h1>
      <p className="text-sm text-ink-400 mb-14">Last updated: {last_updated}</p>

      {/*
        `body` is trusted HTML authored by admins through Filament (not
        user-submitted input), so rendering it directly here is safe —
        it's the standard pattern for CMS-driven rich text.
      */}
      <div
        className="prose max-w-3xl prose-headings:font-display prose-headings:font-bold prose-a:text-ink-900 prose-a:underline"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </section>
  )
}
