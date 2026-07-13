import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { site } from '../siteConfig.js'

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-100">
      <div className="container-page py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <Logo dark className="mb-4" />
          <p className="text-sm text-ink-200 leading-relaxed max-w-xs">
            {site.legalName} is a Dubai-based company building trusted
            platforms in international education, including our flagship
            platform, {site.flagshipBrand}.
          </p>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            Company
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
            </li>
            <li>
              <Link to="/#contact" className="hover:text-white transition-colors">Contact Us</Link>
            </li>
            <li>
              <a
                href={site.flagshipUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {site.flagshipBrand} ↗
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            Contact
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={`tel:${site.phoneHref}`} className="hover:text-white transition-colors">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white transition-colors">
                {site.email}
              </a>
            </li>
            <li className="text-ink-200">{site.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ink-200">
          <p>
            © {site.year} {site.legalName} All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
