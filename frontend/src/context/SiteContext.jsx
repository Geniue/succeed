import { createContext, useContext, useEffect, useState } from 'react'
import { fetchBootstrap } from '../lib/api.js'
import { site as staticSite } from '../siteConfig.js'

const SiteContext = createContext(null)

// Sensible default so every consumer (Navbar, Footer, etc.) can render
// immediately on first paint, and still renders something reasonable if
// the API is ever unreachable — rather than every component needing to
// null-check every field while data is loading.
const fallbackSite = {
  brand_name: staticSite.brandName,
  legal_name: staticSite.legalName,
  legal_name_short: staticSite.legalNameShort,
  flagship: { brand: staticSite.flagshipBrand, url: staticSite.flagshipUrl },
  contact: {
    email: staticSite.email,
    phone: staticSite.phoneDisplay,
    location: staticSite.location,
  },
  logo_url: null,
  navigation: {
    items: [
      { label: 'Home', url: '/' },
      { label: 'About Us', url: '/about' },
    ],
    cta: { label: 'Get in Touch', url: '/#contact' },
  },
  footer: {
    description: `${staticSite.legalName} is a Dubai-based company building trusted platforms in international education, including our flagship platform, ${staticSite.flagshipBrand}.`,
    company_heading: 'Company',
    company_links: [
      { label: 'Home', url: '/' },
      { label: 'About Us', url: '/about' },
      { label: 'Contact Us', url: '/#contact' },
      { label: `${staticSite.flagshipBrand} ↗`, url: staticSite.flagshipUrl, external: true },
    ],
    contact_heading: 'Contact',
    terms_label: 'Terms & Conditions',
    terms_url: '/terms-and-conditions',
    privacy_label: 'Privacy Policy',
    privacy_url: '/privacy-policy',
    copyright_text: 'All rights reserved.',
  },
}

export function SiteProvider({ children }) {
  const [site, setSite] = useState(fallbackSite)
  const [pages, setPages] = useState([])
  const [status, setStatus] = useState('loading') // 'loading' | 'ready' | 'error'

  useEffect(() => {
    let cancelled = false

    fetchBootstrap()
      .then((body) => {
        if (cancelled) return
        setSite(body.data.site)
        setPages(body.data.pages)
        setStatus('ready')
      })
      .catch(() => {
        if (cancelled) return
        // Keep rendering with fallbackSite so the shell (nav/footer)
        // still looks correct even if the backend is down.
        setStatus('error')
      })

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <SiteContext.Provider value={{ site, pages, status }}>
      {children}
    </SiteContext.Provider>
  )
}

export function useSite() {
  const ctx = useContext(SiteContext)
  if (!ctx) {
    throw new Error('useSite() must be called within a <SiteProvider>')
  }
  return ctx
}

/** Strips everything but digits and a leading + — for tel: links. */
export function phoneHref(phoneDisplay) {
  return (phoneDisplay || '').replace(/[^\d+]/g, '')
}
