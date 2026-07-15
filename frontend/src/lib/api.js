// Thin fetch wrapper around the Laravel public API.
// Base URL comes from the VITE_API_URL env var (see .env.example);
// falls back to the local Laravel dev server if not set.
const API_BASE = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api/v1'

export class ApiError extends Error {
  constructor(message, status, errors = null) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.errors = errors // Laravel's field-level validation errors, if any
  }
}

async function request(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...options.headers,
    },
  })

  let body = null
  try {
    body = await res.json()
  } catch {
    // No JSON body (e.g. empty 204) — leave body as null.
  }

  if (!res.ok) {
    throw new ApiError(
      body?.message || `Request failed with status ${res.status}`,
      res.status,
      body?.errors || null
    )
  }

  return body
}

/** GET /site/bootstrap — global site settings + published page index. */
export function fetchBootstrap() {
  return request('/site/bootstrap')
}

/** GET /pages/{slug} — full content for a single published page. */
export function fetchPage(slug) {
  return request(`/pages/${slug}`)
}

/** POST /contact-submissions — submit the public contact form. */
export function submitContactForm(payload) {
  return request('/contact-submissions', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}
