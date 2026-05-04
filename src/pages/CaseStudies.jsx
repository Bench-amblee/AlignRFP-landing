import { Link } from 'react-router-dom'

const cases = [
  {
    title: 'Nonprofit RFP automation on Google Drive and Google Chat',
    stat: '8+ hours → 10 minutes',
    description:
      'A mid-sized nonprofit was spending hours on every RFP response before the real writing even began. We built a custom agent workflow on top of Google Drive and Google Chat - no new tools, 80% of the process automated.',
    href: '/case-studies/nonprofit-google-workspace',
  },
]

export default function CaseStudies() {
  return (
    <section className="pt-40 pb-28 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-medium text-accent mb-4 tracking-wide uppercase">
          Case studies
        </p>
        <h1 className="text-4xl sm:text-5xl font-semibold text-stone-900 tracking-tight-plus leading-tight mb-6">
          Real workflows, real results.
        </h1>
        <p className="text-lg text-stone-600 leading-relaxed mb-16">
          How teams are using AlignRFP to take the repetitive work out of RFP responses.
        </p>

        <div className="space-y-4">
          {cases.map((c) => (
            <Link
              key={c.href}
              to={c.href}
              className="block border border-stone-300 rounded-xl p-8 bg-white hover:border-stone-400 hover:shadow-sm transition-all duration-150 group"
            >
              <p className="text-2xl font-semibold text-accent-light mb-1 tabular-nums">
                {c.stat}
              </p>
              <h2 className="text-xl font-semibold text-stone-900 mb-3 leading-snug group-hover:text-accent transition-colors duration-150">
                {c.title}
              </h2>
              <p className="text-stone-600 leading-relaxed text-[15px] mb-5">
                {c.description}
              </p>
              <span className="text-sm font-medium text-accent group-hover:text-accent-dark transition-colors duration-150">
                Read case study →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
