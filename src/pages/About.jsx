const CALENDLY_URL = 'https://calendly.com/YOUR_LINK_HERE'
const EMAIL = 'hello@alignrfp.com'

export default function About() {
  return (
    <>
      <section className="pt-40 pb-20 px-6 border-b border-stone-200">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-medium text-accent mb-4 tracking-wide uppercase">
            About
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-stone-900 tracking-tight-plus leading-tight mb-6">
            RFPs are repetitive by design.<br className="hidden sm:block" /> Your response process doesn't have to be.
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            Our team primarily works with agencies, nonprofits, and small consulting firms to take the most
            time-consuming parts of RFP response off their plate, so the team can focus
            on the work that actually requires their judgment.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-16">

          <div>
            <h2 className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-5">
              Background
            </h2>
            <p className="text-stone-700 leading-relaxed text-[17px] mb-5">
              If you've ever worked with RFP responses, you know these feelings all too well:
              rebuilding the same sections from scratch, digging through old submissions for
              relevant experience, spending the first day of a two-day turnaround just getting
              organized. The content exists - the process of pulling it together is what kills the time.
            </p>
            <p className="text-stone-700 leading-relaxed text-[17px] mb-5">
              AlignRFP was built around that specific problem. After spending years working directly
              with teams on their RFP workflows - understanding how they actually operate, what tools
              they use, where the friction lives. It became clear the best solution
              isn't a new platform. It's a system built around how a team already works.
            </p>
            <p className="text-stone-700 leading-relaxed text-[17px]">
              The RFP Sprint program is the result of that work: a custom-built response system,
              delivered in three weeks, on top of the tools your team already uses every day. Thanks to agentic automation and software powered by RFP Engine, our team is able to create a full customized response system in a fraction of the time it would take to do manually - and at a fraction of the cost of a traditional consulting engagement.
            </p>
          </div>

          <div>
            <img
              src="/workflow_ss.png"
              alt="Client workflow session"
              className="w-full rounded-xl border border-stone-200 shadow-sm"
            />
          </div>

          <div>
            <h2 className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-5">
              How we work
            </h2>
            <p className="text-stone-700 leading-relaxed text-[17px] mb-5">
              We don't sell software subscriptions or generic AI tools. Every engagement
              starts with understanding how your team already works - your tools, your
              process, your existing knowledge. We build on top of that, not around it.
            </p>
            <p className="text-stone-700 leading-relaxed text-[17px]">
              Our engagements are scoped, time-bound, and fully delivered. You'll know exactly
              what you're getting before we start, and you'll have something working at the end.
              No ongoing dependency on us unless you want it.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-5">
              Who we work with
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  label: 'Good fit',
                  items: [
                    'Nonprofits responding to grants or government RFPs regularly',
                    'Small consulting firms with 2–20 person teams',
                    'Mission-driven agencies with established past work to draw from',
                    'Teams spending 2+ hours per RFP response',
                    'Organizations already using Google Workspace, Notion, or similar',
                  ],
                  style: 'border-accent/30 bg-[#D4EDE1]/20',
                  labelStyle: 'text-accent',
                  dotStyle: 'border-accent',
                },
                {
                  label: 'Not a fit',
                  items: [
                    'Teams responding to fewer than one RFP per month',
                    'Organizations without existing documentation or past work',
                    'Teams looking for a fully managed service with no internal involvement',
                    'Enterprise procurement with large dedicated proposal teams',
                  ],
                  style: 'border-stone-200 bg-stone-50',
                  labelStyle: 'text-stone-500',
                  dotStyle: 'border-stone-300',
                },
              ].map(({ label, items, style, labelStyle, dotStyle }) => (
                <div key={label} className={`rounded-xl border p-6 ${style}`}>
                  <p className={`text-xs font-semibold uppercase tracking-wider mb-4 ${labelStyle}`}>
                    {label}
                  </p>
                  <ul className="space-y-3">
                    {items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[14px] text-stone-700">
                        <span className={`mt-[5px] w-3 h-3 rounded-full border-2 shrink-0 ${dotStyle}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-stone-200">
            <p className="text-stone-700 leading-relaxed mb-6">
              Have questions before booking a call? Reach out directly.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-base font-medium px-7 py-3.5 rounded-md bg-accent text-white hover:bg-accent-dark transition-colors duration-150"
              >
                Book a free consultation
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-block text-base font-medium px-7 py-3.5 rounded-md border border-stone-300 text-stone-700 hover:border-stone-400 transition-colors duration-150"
              >
                Send an email
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
