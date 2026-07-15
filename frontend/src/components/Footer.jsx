import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { useSite, phoneHref } from '../context/SiteContext.jsx'

export default function Footer() {
  const { site } = useSite()
  const footer = site.footer ?? {}
  const links = footer.company_links ?? []
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink-950 text-ink-100">
      <div className="container-page py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <Logo dark className="mb-4" />
          <p className="text-sm text-ink-200 leading-relaxed max-w-xs">
            {footer.description}
          </p>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            {footer.company_heading || 'Company'}
          </h4>
          <ul className="space-y-3 text-sm">
            {links.map((l) =>
              l.external ? (
                <li key={l.url}>
                  <a
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ) : (
                <li key={l.url}>
                  <Link to={l.url} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            {footer.contact_heading || 'Contact'}
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={`tel:${phoneHref(site.contact?.phone)}`}
                className="hover:text-white transition-colors"
              >
                {site.contact?.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.contact?.email}`} className="hover:text-white transition-colors">
                {site.contact?.email}
              </a>
            </li>
            <li className="text-ink-200">{site.contact?.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ink-200">
          <p>
            © {year} {site.legal_name} {footer.copyright_text || 'All rights reserved.'}
          </p>
          <div className="flex items-center gap-6">
            <Link to={footer.terms_url || '/terms-and-conditions'} className="hover:text-white transition-colors">
              {footer.terms_label || 'Terms & Conditions'}
            </Link>
            <Link to={footer.privacy_url || '/privacy-policy'} className="hover:text-white transition-colors">
              {footer.privacy_label || 'Privacy Policy'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
