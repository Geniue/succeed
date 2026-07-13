import { Link } from 'react-router-dom'
import { site } from '../siteConfig.js'
import ContactForm from '../components/ContactForm.jsx'

const stats = [
  { value: '85+', label: 'Partner universities worldwide' },
  { value: '25+', label: 'Years of combined experience' },
  { value: '1', label: 'Flagship platform, Universities.org' },
  { value: 'Thousands', label: 'Of students supported globally' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-page grid md:grid-cols-2 gap-12 items-center pt-16 pb-20 md:pt-24 md:pb-28">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600 mb-5">
              {site.legalNameShort}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.08] mb-6">
              The company built to help people{' '}
              <span className="text-gold-600">succeed.</span>
            </h1>
            <p className="text-ink-400 text-lg leading-relaxed max-w-lg mb-9">
              We're a Dubai-based company building trusted platforms in
              international education. Our flagship platform,{' '}
              <a
                href={site.flagshipUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-900 underline decoration-gold-500 decoration-2 underline-offset-4"
              >
                Universities.org
              </a>
              , has guided thousands of students toward the right university,
              in the right country, for the right reasons.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="rounded-full bg-ink-900 text-white font-medium px-7 py-3.5 hover:bg-ink-700 transition-colors"
              >
                Contact Us
              </a>
              <Link
                to="/about"
                className="rounded-full border border-ink-200 text-ink-900 font-medium px-7 py-3.5 hover:border-ink-900 transition-colors"
              >
                About Succeed
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-ink-100 shadow-xl">
              <img
                src="https://universities.org/images/site/home/about-main.webp"
                alt="Students guided through their study-abroad journey"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:block bg-white rounded-2xl shadow-lg px-6 py-5 max-w-[220px]">
              <p className="text-2xl font-display font-bold text-ink-900">85+</p>
              <p className="text-xs text-ink-400 mt-1">
                Partner universities across four continents
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust stats */}
      <section className="border-y border-ink-100 bg-white">
        <div className="container-page py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl md:text-4xl font-display font-bold text-ink-900">
                {s.value}
              </p>
              <p className="text-sm text-ink-400 mt-2 leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About teaser */}
      <section className="container-page py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 rounded-[2rem] overflow-hidden bg-ink-100">
          <img
            src="https://universities.org/images/site/home/about-secondary.webp"
            alt="Succeed's approach to student guidance"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600 mb-4">
            Who we are
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            A parent company with one focus: education, done honestly.
          </h2>
          <p className="text-ink-400 leading-relaxed mb-6">
            {site.legalName} was founded on a simple belief — that studying
            abroad should be simple, honest, and accessible to everyone. That
            belief shapes every platform we build and every partnership we
            form, starting with our flagship platform, {site.flagshipBrand}.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-ink-900 font-medium border-b-2 border-gold-500 pb-1"
          >
            Learn more about us →
          </Link>
        </div>
      </section>

      {/* Flagship brand showcase */}
      <section className="bg-ink-950 text-white">
        <div className="container-page py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500 mb-4">
              Our flagship platform
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Universities.org
            </h2>
            <p className="text-ink-200 leading-relaxed mb-8 max-w-lg">
              Universities.org connects students with 85+ partner
              universities across Europe, North America, Asia, and the Middle
              East — offering free counseling, application support, visa
              guidance, and accommodation assistance from first consultation
              to arrival.
            </p>
            <a
              href={site.flagshipUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold-500 text-ink-950 font-semibold px-7 py-3.5 hover:bg-gold-300 transition-colors"
            >
              Visit Universities.org ↗
            </a>
          </div>
          <div className="rounded-[2rem] overflow-hidden">
            <img
              src="https://universities.org/images/site/home/why-support-mobile.webp"
              alt="Universities.org student support"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white border-t border-ink-100 scroll-mt-20">
        <div className="container-page py-24">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600 mb-5">
            Contact us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-xl mb-14">
            Have a question for our team? We'd love to hear from you.
          </h2>

          <div className="grid md:grid-cols-5 gap-14">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h3 className="text-xs uppercase tracking-widest text-ink-400 font-semibold mb-2">
                  Phone
                </h3>
                <a href={`tel:${site.phoneHref}`} className="text-xl font-medium text-ink-900">
                  {site.phoneDisplay}
                </a>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-ink-400 font-semibold mb-2">
                  Email
                </h3>
                <a href={`mailto:${site.email}`} className="text-xl font-medium text-ink-900 break-all">
                  {site.email}
                </a>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-ink-400 font-semibold mb-2">
                  Location
                </h3>
                <p className="text-xl font-medium text-ink-900">{site.location}</p>
              </div>
              <div className="pt-4 border-t border-ink-100">
                <p className="text-sm text-ink-400 leading-relaxed">
                  {site.legalName} operates {site.flagshipBrand}. For enquiries
                  related to studying abroad, visit{' '}
                  <a
                    href={site.flagshipUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-ink-900"
                  >
                    Universities.org
                  </a>{' '}
                  directly.
                </p>
              </div>
            </div>

            <div className="md:col-span-3 bg-sand rounded-[2rem] border border-ink-100 p-8 md:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
