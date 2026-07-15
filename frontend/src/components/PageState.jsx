/**
 * Simple centered loading/error state for pages waiting on usePage().
 * Kept intentionally minimal — swap in real skeletons later if desired.
 */
export function PageLoading() {
  return (
    <div className="container-page py-32 text-center text-ink-400">
      Loading…
    </div>
  )
}

export function PageError({ onRetry }) {
  return (
    <div className="container-page py-32 text-center">
      <p className="text-ink-400 mb-4">
        We couldn't load this page right now. Please try again shortly.
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="rounded-full border border-ink-200 text-ink-900 font-medium px-6 py-2.5 hover:border-ink-900 transition-colors"
        >
          Retry
        </button>
      )}
    </div>
  )
}
