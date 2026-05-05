import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView.js'
import { FiSearch, FiLayers, FiPackage } from 'react-icons/fi'

const CALENDLY_URL = 'https://calendly.com/ben-alignrfp/alignrfp-consultation'

function Hero() {
  return (
    <section className="paper-lines pt-40 pb-28 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="animate-fade-up text-sm font-medium text-accent mb-6 tracking-wide uppercase" style={{ animationDelay: '0ms' }}>
          For consulting firms, nonprofits &amp; agencies
        </p>
        <h1 className="animate-fade-up text-5xl sm:text-6xl font-semibold text-stone-900 tracking-tight-plus leading-[1.08] mb-8" style={{ animationDelay: '100ms' }}>
          Respond to RFPs in{' '}
          <span className="relative inline-block whitespace-nowrap">
            minutes
            <svg
              aria-hidden="true"
              className="absolute left-0 -bottom-2 w-full overflow-visible"
              height="10"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0 7 C20 1, 50 1, 80 5 C88 6.5, 94 7, 100 6"
                stroke="#52B788"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>
          ,<br className="hidden sm:block" /> not hours.
        </h1>
        <p className="animate-fade-up text-xl text-stone-900 leading-relaxed max-w-2xl mb-12" style={{ animationDelay: '220ms' }}>
          We build custom agentic and AI-powered RFP response systems on top of the tools
          you already use. Three weeks, fully delivered — the repetitive work is
          handled so your team focuses on the judgment, relationships, and strategy
          that actually win deals.
        </p>
        <div className="animate-fade-up flex flex-wrap items-center gap-4 mb-10" style={{ animationDelay: '320ms' }}>
          {[
            'Delivered in 3 weeks',
            'Built on your existing tools',
            'No new software to learn',
          ].map(label => (
            <span key={label} className="inline-flex items-center gap-2 text-sm bg-white border border-stone-300 rounded-full px-4 py-1.5 text-stone-800">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              {label}
            </span>
          ))}
        </div>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="animate-fade-up inline-block text-base font-medium px-7 py-3.5 rounded-md bg-accent text-white hover:bg-accent-dark transition-colors duration-150"
          style={{ animationDelay: '460ms' }}
        >
          Book a free consultation
        </a>
      </div>
    </section>
  )
}

const steps = [
  {
    icon: FiSearch,
    heading: 'We map what you already do',
    body: 'We evaluate your current RFP process: your tools, your templates, your past work. No assumptions. We build a system that fits what you already have, not the other way around.',
  },
  {
    icon: FiLayers,
    heading: 'We build on top of your tools',
    body: 'No new software to learn. The system is built into the platforms you already use - Google Workspace, Notion, SharePoint, whatever fits.',
  },
  {
    icon: FiPackage,
    heading: 'You get a fully delivered system',
    body: "Automatic opportunity scoring, knowledge base drafting from your firm's past work, first drafts that sound like you. Handed off with documentation and 30 days of support.",
  },
]

function HowItWorks() {
  const [ref, inView] = useInView()
  return (
    <section className="py-24 px-6 bg-white border-y border-stone-200">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm font-medium text-stone-500 uppercase tracking-wide mb-16">
          How it works
        </h2>
        <div ref={ref} className="grid sm:grid-cols-3 gap-12 sm:gap-8">
          {steps.map((step, i) => (
            <div
              key={step.heading}
              className={`reveal ${inView ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <step.icon size={20} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 mb-3 leading-snug">
                {step.heading}
              </h3>
              <p className="text-stone-700 leading-relaxed text-base">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ name, description, includes, featured, badge }) {
  return (
    <div className={`rounded-xl p-8 flex flex-col h-full ${
      featured
        ? 'border-2 border-accent bg-accent/5'
        : 'border border-stone-200 bg-white'
    }`}>
      {badge && (
        <span className={`self-start text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full mb-5 ${
          featured ? 'bg-accent text-white' : 'bg-stone-100 text-stone-400'
        }`}>
          {badge}
        </span>
      )}
      <h3 className={`text-xl font-semibold leading-snug mb-5 ${featured ? 'text-stone-900' : 'text-stone-700'}`}>{name}</h3>
      <p className={`leading-relaxed text-base mb-7 ${featured ? 'text-stone-700' : 'text-stone-600'}`}>{description}</p>
      <ul className="space-y-3 mb-8 flex-1">
        {includes.map((item, i) => (
          <li key={i} className={`flex items-start gap-3 text-base ${featured ? 'text-stone-700' : 'text-stone-600'}`}>
            <span className={`mt-[5px] w-3.5 h-3.5 rounded-full border-2 shrink-0 ${featured ? 'border-accent' : 'border-stone-400'}`} />
            {item}
          </li>
        ))}
      </ul>
      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-auto inline-block text-sm font-medium px-5 py-2.5 rounded-md transition-colors duration-150 ${
          featured
            ? 'bg-accent text-white hover:bg-accent-dark'
            : 'bg-accent text-white hover:bg-accent-dark'
        }`}
      >
        Book a free consultation
      </a>
    </div>
  )
}

function Services() {
  const [ref, inView] = useInView()
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm font-medium text-stone-500 uppercase tracking-wide mb-16">
          Services
        </h2>
        <div ref={ref} className="grid sm:grid-cols-2 gap-6 items-start">
          <div className={`reveal ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0ms' }}>
            <ServiceCard
              name="RFP Sprint Accelerator"
              badge="Most popular"
              featured
              description="Everything in the Handoff, plus ongoing capacity to keep the system current and your team unblocked."
              includes={[
                'Custom RFP response system built on your existing tools',
                'Automatic opportunity fit scoring',
                'Knowledge base connected to your past work',
                'First-draft generation that sounds like your firm',
                'Full documentation + 30 days of support',
                'Up to 10 hrs/mo: updates, knowledge base maintenance, bug fixes',
                'Async advisory included',
                'Ongoing strategic updates and guidance',
              ]}
            />
          </div>
          <div className={`reveal ${inView ? 'visible' : ''}`} style={{ transitionDelay: '120ms' }}>
            <ServiceCard
              name="RFP Sprint Handoff"
              badge="One-time"
              description="Three weeks of custom development and advisory. We build the system, document everything, and hand it off ready to use on day one."
              includes={[
                'Custom RFP response system built on your existing tools',
                'Automatic opportunity fit scoring',
                'Knowledge base connected to your past work',
                'First-draft generation that sounds like your firm',
                'Full documentation',
                '30 days of post-delivery support (up to 5 hours)',
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    quote: "I used to spend a full day just understanding RFP requirements. This does it in minutes. The time savings alone are incredible but the best part is how much better our first drafts are.",
    role: "IT Consultant",
  },
  {
    quote: "Searching for past experience was so time consuming. Now I can just tell our agent what to include and it automatically pulls from our documents. It's a game changer.",
    role: "Sales Engineer",
  },
  {
    quote: "We finally stopped rewriting the same answers. The knowledge base alone was worth it.",
    role: "Nonprofit Director",
  },
]

function Testimonials() {
  const [ref, inView] = useInView()
  return (
    <section className="py-24 px-6 bg-accent-dark">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm font-medium text-accent-light uppercase tracking-wide mb-12">
          What clients say
        </h2>
        <div ref={ref} className="grid sm:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`reveal ${inView ? 'visible' : ''} bg-white/10 rounded-xl p-7 flex flex-col justify-between`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <p className="text-white leading-relaxed text-base italic mb-8">
                "{t.quote}"
              </p>
              <p className="text-sm font-medium text-accent-light">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseStudyTeaser() {
  const [ref, inView] = useInView()
  return (
    <section className="py-24 px-6 bg-stone-900 border-y border-stone-800">
      <div ref={ref} className={`reveal ${inView ? 'visible' : ''} max-w-3xl mx-auto`}>
        <h2 className="text-sm font-medium text-stone-500 uppercase tracking-wide mb-4">
          Case study
        </h2>
        <p className="text-4xl sm:text-5xl font-semibold text-white tracking-tight-plus leading-tight mb-4">
          8+ hours down to 10 minutes.
        </p>
        <p className="text-lg text-stone-300 leading-relaxed mb-8">
          80% of a nonprofit's RFP workflow, automated in three weeks.
        </p>
        <p className="text-stone-300 leading-relaxed mb-8">
          The team was spending hours on every RFP response: setting up templates from scratch,
          hunting through past submissions for relevant content, prompting AI tools one section
          at a time. We built a custom agent workflow on Google Drive that automated 80% of that
          process. What used to take eight hours now takes ten minutes.
        </p>
        <Link
          to="/case-studies"
          className="inline-block text-sm font-medium text-accent-light hover:text-accent transition-colors duration-150 underline underline-offset-4"
        >
          Read the full case study →
        </Link>
      </div>
    </section>
  )
}

function Founder() {
  const [ref, inView] = useInView()
  return (
    <section className="py-24 px-6 bg-white border-y border-stone-200">
      <div ref={ref} className={`reveal ${inView ? 'visible' : ''} max-w-3xl mx-auto`}>
        <div className="flex flex-col sm:flex-row items-start gap-8">
          <img src="/founder.png" alt="Ben Chamblee" className="w-20 h-20 rounded-full object-cover shrink-0" />
          <div>
            <p className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-4">
              From the founder
            </p>
            <p className="text-stone-800 leading-relaxed text-[17px] italic mb-5">
              "After building RFP response software I learned that every team's process is different and there's no one-size-fits-all solution. Our RFP Sprint builds a custom system that fits your team's tools and process, not the other way around."
            </p>
            <p className="font-semibold text-stone-900">Ben Chamblee</p>
            <p className="text-sm text-stone-600 mt-0.5">
              Founder, AlignRFP · New York
            </p>
            <a href="mailto:ben@alignrfp.com" className="text-sm text-accent hover:text-accent-dark transition-colors duration-150 mt-1 inline-block">
              ben@alignrfp.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function EmailSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch('https://formspree.io/f/mqeypvbg', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="py-16 px-6 border-t border-stone-200">
      <div className="max-w-3xl mx-auto">
        {status === 'success' ? (
          <p className="text-stone-700 text-[15px]">You're in. We'll be in touch.</p>
        ) : (
          <>
            <p className="text-sm font-medium text-stone-700 mb-4">Want to stay updated?</p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-md border border-stone-300 text-sm text-stone-900 placeholder-stone-400 bg-white focus:outline-none focus:border-accent transition-colors duration-150"
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="px-5 py-2.5 rounded-md bg-accent text-white text-sm font-medium hover:bg-accent-dark transition-colors duration-150 disabled:opacity-60 shrink-0"
              >
                {status === 'submitting' ? 'Sending…' : 'Stay updated'}
              </button>
            </form>
            {status === 'error' && (
              <p className="text-sm text-red-500 mt-2">Something went wrong - try emailing us directly.</p>
            )}
          </>
        )}
      </div>
    </section>
  )
}

const faqs = [
  {
    q: "How does pricing work?",
    a: "Pricing is discussed on the first call. Every engagement starts with a free consultation — no pressure, no commitment. We scope the project together and give you a clear number before anything starts.",
  },
  {
    q: "What tools do we need to be using?",
    a: "We build on whatever you already use. Most of our work has been in Google Workspace, but we've also worked with Notion, SharePoint, and similar platforms. If your team uses it daily, we can likely build on top of it.",
  },
  {
    q: "What does 'fully delivered' actually mean?",
    a: "You get a working system, not a prototype. By the end of the engagement you'll have a configured RFP response workflow, documented so anyone on your team can use it, plus 30 days of support for questions and minor fixes.",
  },
  {
    q: "Do we need someone technical on our team?",
    a: "No. We handle all the setup and configuration. Everything is documented for non-technical users, and the system runs inside tools your team already knows.",
  },
  {
    q: "How is this different from just using ChatGPT?",
    a: "Generic AI tools generate responses from nothing. Our systems pull from your organization's actual past work: specific project examples, proven language, your firm's voice. The difference shows up immediately in the output.",
  },
  {
    q: "We only respond to a few RFPs a year. Is this worth it?",
    a: "Probably not. This works best for teams responding at least once or twice a month. If volume is low, we'll tell you that on the first call. No pressure.",
  },
  {
    q: "What happens after the 30 days of support?",
    a: "Nothing, unless you want it to. The Handoff is a one-time engagement - you own what we build. If you want ongoing support and updates, that's what the Accelerator is for.",
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const toggle = (i) => setOpenIndex(prev => prev === i ? null : i)
  const [ref, inView] = useInView()

  return (
    <section className="py-24 px-6">
      <div ref={ref} className={`reveal ${inView ? 'visible' : ''} max-w-3xl mx-auto`}>
        <h2 className="text-sm font-medium text-stone-500 uppercase tracking-wide mb-12">
          Common questions
        </h2>
        <div className="divide-y divide-stone-200">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-start justify-between gap-6 py-5 text-left group"
              >
                <span className="text-stone-900 font-medium text-base leading-snug group-hover:text-accent transition-colors duration-150">
                  {faq.q}
                </span>
                <span className="text-stone-400 shrink-0 mt-0.5 text-lg leading-none">
                  {openIndex === i ? '−' : '+'}
                </span>
              </button>
              {openIndex === i && (
                <p className="text-stone-700 leading-relaxed text-base pb-5">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Services />
      <Testimonials />
      <CaseStudyTeaser />
      <Founder />
      <EmailSignup />
      <FAQ />
    </>
  )
}
