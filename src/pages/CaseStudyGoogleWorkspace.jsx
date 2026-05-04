import FlowDiagram from '../components/FlowDiagram.jsx'

const CALENDLY_URL = 'https://calendly.com/ben-alignrfp/alignrfp-consultation'

export default function CaseStudyGoogleWorkspace() {
  return (
    <>
      <section className="pt-40 pb-16 px-6 border-b border-stone-200">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-medium text-accent mb-4 tracking-wide uppercase">
            Case study
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-stone-900 tracking-tight-plus leading-tight mb-6">
            8+ hours to 10 minutes - nonprofit RFP automation on Google Drive and Google Chat.
          </h1>
          <p className="text-lg text-stone-600 leading-relaxed">
            80% of the RFP workflow automated. Three weeks to deliver.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">

          <div className="mb-12">
            <img
              src="/case_study_google_drive.png"
              alt="Google Drive RFP workflow screenshot"
              className="w-full rounded-xl border border-stone-200 shadow-sm"
            />
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-4">
                The problem
              </h3>
              <p className="text-stone-700 leading-relaxed text-[17px]">
                A mid-sized nonprofit was responding to RFPs regularly: grant applications,
                government contracts, partnership proposals. Their process worked, but it was
                exhausting. Every response meant setting up a new template from scratch, manually
                searching through old submissions for relevant project examples, and prompting
                general-purpose AI tools section by section.
              </p>
              <p className="text-stone-700 leading-relaxed text-[17px] mt-4">
                Nothing was connected. The institutional knowledge was there - years of past
                work, proven language, a strong track record. But accessing it took as long as
                writing the response itself. The team was spending eight or more hours on every
                RFP before the real writing even began.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-4">
                The solution
              </h3>
              <p className="text-stone-700 leading-relaxed text-[17px]">
                We built a custom agent workflow on top of Google Drive, a platform the team
                already used every day. Past proposals, project summaries, and capability
                statements were uploaded to a structured knowledge base. From that point, the
                system could find, organize, and use that material automatically.
              </p>
              <p className="text-stone-700 leading-relaxed text-[17px] mt-4">
                When a new RFP arrived, staff dropped it into a watched folder and received an
                automatic fit score - a quick read on how well the opportunity matched their
                work and whether it was worth pursuing. For RFPs they decided to pursue, agents
                available in Google Chat could generate section templates, pull relevant project
                examples from the knowledge base, and produce first drafts grounded in the
                organization's actual experience, not generic AI output.
              </p>
              <p className="text-stone-700 leading-relaxed text-[17px] mt-4">
                No new software to learn. No passwords to manage. Everything lived in the tools
                they already had.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-5">
                How the workflow runs
              </h3>
              <FlowDiagram />
            </div>

            <div>
              <h3 className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-4">
                The result
              </h3>
              <p className="text-stone-700 leading-relaxed text-[17px]">
                80% of the workflow is now automated. What used to take over eight hours takes
                about ten minutes. The remaining 20% is human review and final editing, which is intentional. The system handles the repetitive work. The team
                handles the judgment.
              </p>
              <p className="text-stone-700 leading-relaxed text-[17px] mt-4">
                The team now responds to more RFPs with less effort, and the responses are
                more consistent because they're always drawing from the same vetted source material.
              </p>
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-stone-200">
            <p className="text-stone-700 leading-relaxed mb-6">
              Want to see what this could look like for your team?
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-base font-medium px-7 py-3.5 rounded-md bg-accent text-white hover:bg-accent-dark transition-colors duration-150"
            >
              Book a free consultation
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
