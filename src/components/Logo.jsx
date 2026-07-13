export default function Logo({ dark = false, className = '' }) {
  const textColor = dark ? 'text-white' : 'text-ink-900'
  return (
    <span className={`inline-flex items-end gap-2 font-display font-bold tracking-tight ${className}`}>
      <span className={`text-2xl md:text-[28px] leading-none ${textColor}`}>
        Succeed
        <svg
          className="block -mt-1"
          width="76"
          height="10"
          viewBox="0 0 76 10"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2 7C14 7 16 2 27 2C38 2 40 8 51 8C60 8 63 3 74 3"
            stroke="#C9A15A"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </span>
  )
}
