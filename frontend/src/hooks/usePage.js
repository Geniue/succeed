import { useEffect, useState } from 'react'
import { fetchPage } from '../lib/api.js'

/**
 * Fetches a single page's content by slug.
 * Returns { page, status } where status is 'loading' | 'ready' | 'error'.
 */
export function usePage(slug) {
  const [page, setPage] = useState(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    let cancelled = false
    setStatus('loading')
    setPage(null)

    fetchPage(slug)
      .then((body) => {
        if (cancelled) return
        setPage(body.data)
        setStatus('ready')
      })
      .catch(() => {
        if (cancelled) return
        setStatus('error')
      })

    return () => {
      cancelled = true
    }
  }, [slug])

  return { page, status }
}
