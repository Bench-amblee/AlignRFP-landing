import rfpStudioLogo from '../components/RFP_Studio_logo.svg'

const tools = [
  {
    name: 'RFP Studio',
    logo: rfpStudioLogo,
    description:
      'Generate RFP responses in minutes using your own past work as source material. Score opportunities, build drafts section by section, and refine through conversation - no custom implementation required.',
    href: 'https://studio.alignrfp.com',
    linkLabel: 'Check it out',
  },
]

export default function Software() {
  return (
    <section className="pt-40 pb-28 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-medium text-accent mb-4 tracking-wide uppercase">
          Software
        </p>
        <h1 className="text-4xl sm:text-5xl font-semibold text-stone-900 tracking-tight-plus leading-tight mb-6">
          Tools we've built.
        </h1>
        <p className="text-lg text-stone-600 leading-relaxed mb-16">
          Standalone software developed out of our client work, available for teams
          that want to move fast without a full implementation engagement.
        </p>

        <div className="space-y-4">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="border border-stone-300 rounded-xl p-8 bg-white"
            >
              <div className="flex items-center gap-3 mb-2">
                {tool.logo && <img src={tool.logo} alt={`${tool.name} logo`} className="w-7 h-7" />}
                <h2 className="text-xl font-semibold text-stone-900">{tool.name}</h2>
              </div>
              <p className="text-stone-600 leading-relaxed text-[15px] mb-6">
                {tool.description}
              </p>
              <a
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-medium text-accent hover:text-accent-dark underline underline-offset-4 transition-colors duration-150"
              >
                {tool.linkLabel} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
