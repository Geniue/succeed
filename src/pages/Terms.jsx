import { site } from '../siteConfig.js'

export default function Terms() {
  return (
    <section className="container-page pt-16 pb-24 md:pt-24">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600 mb-5">
        Legal
      </p>
      <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-4">
        Terms &amp; Conditions
      </h1>
      <p className="text-sm text-ink-400 mb-14">Last updated: {site.year}</p>

      <div className="prose max-w-3xl prose-headings:font-display prose-headings:font-bold prose-a:text-ink-900 prose-a:underline">
        <p>
          These Terms &amp; Conditions ("Terms") govern your access to and
          use of this website (the "Site"), operated by{' '}
          <strong>{site.legalName}</strong>, a limited liability company in
          Dubai, United Arab Emirates ("we", "us", or "our"). By using the
          Site, you agree to these Terms. If you do not agree, please do not
          use the Site.
        </p>

        <h2>1. Who we are</h2>
        <p>
          This Site is provided by {site.legalName}, with its principal place
          of business in Dubai, UAE. We are the company behind{' '}
          {site.flagshipBrand}, our flagship platform for international
          education guidance. Contact details published on this Site
          (including email and telephone) are the appropriate channels for
          enquiries relating to these Terms.
        </p>

        <h2>2. Nature of this Site</h2>
        <p>
          This Site is a corporate information site for {site.legalName}. It
          does not itself provide student counseling, admissions, or visa
          services — those services are provided through our flagship
          platform, {site.flagshipBrand}. We do not guarantee admission to
          any institution, visa approval, or any particular outcome through
          either this Site or our affiliated platforms.
        </p>

        <h2>3. Acceptable use</h2>
        <p>You agree to use the Site only for lawful purposes. You must not:</p>
        <ul>
          <li>misrepresent your identity or affiliation, or submit false or misleading information;</li>
          <li>attempt to gain unauthorised access to our systems or other users' data;</li>
          <li>use the Site to transmit malware, spam, or unlawful or defamatory content;</li>
          <li>scrape, harvest, or automate access to the Site in a way that impairs its operation.</li>
        </ul>

        <h2>4. Communications</h2>
        <p>
          Where you submit forms or otherwise communicate with us through the
          Site, you agree that the information you provide is accurate to
          the best of your knowledge.
        </p>

        <h2>5. Intellectual property</h2>
        <p>
          The Site, its design, logos, text, graphics, and other content
          (excluding user-submitted content) are owned by or licensed to{' '}
          {site.legalName} and are protected by applicable intellectual
          property laws. You may not copy, modify, distribute, or create
          derivative works without our prior written consent, except as
          allowed by law or for personal, non-commercial viewing.
        </p>

        <h2>6. Third-party websites and services</h2>
        <p>
          The Site may contain links to third-party websites, including{' '}
          {site.flagshipBrand} and affiliated universities or service
          providers. We do not control and are not responsible for their
          content, privacy practices, or availability. Your use of
          third-party services is at your own risk and subject to their own
          terms.
        </p>

        <h2>7. Disclaimers</h2>
        <p>
          The Site and its content are provided on an "as is" and "as
          available" basis. To the fullest extent permitted by applicable
          law in the UAE, we disclaim all warranties, express or implied,
          including merchantability, fitness for a particular purpose, and
          non-infringement.
        </p>

        <h2>8. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, {site.legalName} and its
          directors, officers, employees, and agents shall not be liable for
          any indirect, incidental, special, consequential, or punitive
          damages arising from your use of the Site. Our aggregate liability
          for any claim arising out of these Terms shall not exceed AED 500,
          where no fees were paid to us directly. Some jurisdictions do not
          allow certain limitations; in such cases our liability is limited
          to the fullest extent permitted.
        </p>

        <h2>9. Indemnity</h2>
        <p>
          You agree to indemnify and hold harmless {site.legalName} from any
          claims, damages, losses, or expenses (including reasonable legal
          fees) arising from your breach of these Terms or your misuse of
          the Site.
        </p>

        <h2>10. Governing law and disputes</h2>
        <p>
          These Terms are governed by the laws of the United Arab Emirates,
          as applied in the Emirate of Dubai. Subject to mandatory consumer
          protections, you agree that the courts of Dubai, UAE, shall have
          exclusive jurisdiction over any dispute arising from these Terms.
        </p>

        <h2>11. Changes</h2>
        <p>
          We may update these Terms from time to time. The "Last updated"
          date above will be revised accordingly. Continued use of the Site
          after changes constitutes acceptance of the updated Terms.
        </p>

        <h2>12. Contact</h2>
        <p>
          For questions about these Terms, please contact us at{' '}
          <a href={`mailto:${site.email}`}>{site.email}</a> or{' '}
          <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>.
        </p>
      </div>
    </section>
  )
}
