import { useEffect } from 'react'

/**
 * Syncs document.title and the <meta name="description"> tag whenever a
 * page's SEO fields change — e.g. after usePage(slug) resolves, or after
 * an admin edits SEO & Publishing in Filament and the page is reloaded.
 *
 * Falls back gracefully if a page has no seo_title/seo_description set.
 */
export function useDocumentMeta({ title, description }) {
  useEffect(() => {
    if (title) {
      document.title = title
    }
  }, [title])

  useEffect(() => {
    if (!description) return

    let tag = document.querySelector('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', 'description')
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', description)
  }, [description])
}
