import { site } from '../siteConfig.js'

export default function Privacy() {
  return (
    <section className="container-page pt-16 pb-24 md:pt-24">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600 mb-5">
        Legal
      </p>
      <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-4">
        Privacy Policy
      </h1>
      <p className="text-sm text-ink-400 mb-14">Last updated: {site.year}</p>

      <div className="prose max-w-3xl prose-headings:font-display prose-headings:font-bold prose-a:text-ink-900 prose-a:underline">
        <p>
          <strong>{site.legalName}</strong> ("we", "us", or "our") respects
          your privacy. This Privacy Policy explains how we collect, use,
          disclose, and safeguard personal information when you visit this
          website (the "Services"). It applies to individuals in line with
          applicable laws.
        </p>

        <h2>1. Data controller</h2>
        <p>
          The data controller responsible for personal data processed in
          connection with the Services is {site.legalName}, Dubai, United
          Arab Emirates. You may contact us using the details published on
          this Site.
        </p>

        <h2>2. Information we may collect</h2>
        <ul>
          <li>
            <strong>Identity and contact data:</strong> name, email address,
            telephone number, and similar details you provide via our
            contact form.
          </li>
          <li>
            <strong>Enquiry data:</strong> the content of messages you send
            us through the Site.
          </li>
          <li>
            <strong>Technical and usage data:</strong> IP address, browser
            type, device information, pages viewed, and timestamps.
          </li>
        </ul>
        <p>
          We do not intentionally collect special categories of personal
          data unless you voluntarily provide such information and we have a
          lawful basis to process it.
        </p>

        <h2>3. How we use your information</h2>
        <ul>
          <li>to respond to enquiries submitted through this Site;</li>
          <li>to operate, maintain, and improve the Site;</li>
          <li>to comply with legal obligations and protect our rights and security;</li>
          <li>to analyse aggregated usage trends.</li>
        </ul>

        <h2>4. Legal bases (where applicable)</h2>
        <p>
          Where required by law, we rely on one or more of: your consent;
          performance of a contract or steps at your request; our legitimate
          interests; or compliance with legal obligations.
        </p>

        <h2>5. Sharing and international transfers</h2>
        <p>
          We may share information with service providers who assist us
          (e.g. hosting, email, analytics) under appropriate confidentiality
          and data-processing terms. Some providers may be located outside
          the UAE; where we transfer personal data internationally, we
          implement safeguards consistent with applicable law.
        </p>

        <h2>6. Retention</h2>
        <p>
          We retain personal data only as long as necessary for the purposes
          described, unless a longer period is required for legal,
          regulatory, or legitimate business reasons.
        </p>

        <h2>7. Security</h2>
        <p>
          We implement appropriate technical and organisational measures
          designed to protect personal data against unauthorised access,
          alteration, disclosure, or destruction. No method of transmission
          over the Internet is completely secure.
        </p>

        <h2>8. Your rights</h2>
        <p>
          Subject to applicable law, you may have the right to access,
          rectify, erase, restrict processing of, or object to certain
          processing of your personal data, and to withdraw consent where
          processing is consent-based. To exercise your rights, contact us
          using the details on this Site.
        </p>

        <h2>9. Children</h2>
        <p>
          Our Services are not directed at children under the age of 13 (or
          the minimum age required locally). We do not knowingly collect
          personal data from children without appropriate parental consent
          where required.
        </p>

        <h2>10. Changes to this policy</h2>
        <p>
          We may update this Privacy Policy periodically. The "Last updated"
          date above will change accordingly.
        </p>

        <h2>11. Contact</h2>
        <p>
          For privacy-related requests, please contact us at{' '}
          <a href={`mailto:${site.email}`}>{site.email}</a> or{' '}
          <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>.
        </p>
      </div>
    </section>
  )
}
