import { site } from '../siteConfig.js'

const values = [
  {
    title: 'Honesty first',
    body: 'We believe good guidance is honest guidance — free of hidden costs or agendas, for every brand we build.',
  },
  {
    title: 'Built on partnerships',
    body: 'We work directly with accredited institutions and trusted partners to keep every platform we run credible.',
  },
  {
    title: 'One team, many platforms',
    body: 'Our flagship platform, Universities.org, reflects the same standard we hold every future platform to.',
  },
]

export default function About() {
  return (
    <>
      <section className="container-page pt-16 pb-20 md:pt-24">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600 mb-5">
          About us
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] max-w-3xl mb-8">
          {site.legalName}
        </h1>
        <p className="text-ink-400 text-lg leading-relaxed max-w-2xl">
          We are a Dubai-based company behind trusted platforms in
          international education. Our team believes studying abroad should
          be simple, honest, and accessible — a principle that shaped our
          flagship platform, Universities.org, and continues to guide
          everything we build.
        </p>
      </section>

      <section className="container-page pb-20">
        <div className="rounded-[2rem] overflow-hidden aspect-[21/9] bg-ink-100">
          <img
            src="https://universities.org/images/site/home/hero-mobile.webp"
            alt="Succeed team supporting students"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="bg-white border-y border-ink-100">
        <div className="container-page py-20 grid md:grid-cols-3 gap-10">
          {values.map((v) => (
            <div key={v.title}>
              <h3 className="text-xl font-bold mb-3">{v.title}</h3>
              <p className="text-ink-400 leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600 mb-4">
            Our flagship platform
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            Universities.org
          </h2>
          <p className="text-ink-400 leading-relaxed mb-8 max-w-lg">
            Universities.org is where our mission comes to life — helping
            students discover universities, programs, and countries with
            expert guidance from first consultation through to arrival.
            {' '}{site.legalName} operates the platform in full.
          </p>
          <a
            href={site.flagshipUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ink-900 text-white font-medium px-7 py-3.5 hover:bg-ink-700 transition-colors"
          >
            Visit Universities.org ↗
          </a>
        </div>
        <div className="rounded-[2rem] overflow-hidden bg-ink-100">
          <img
            src="https://universities.org/images/site/home/program-business.webp"
            alt="Universities.org programs"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </>
  )
}
