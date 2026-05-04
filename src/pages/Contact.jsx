const CALENDLY_URL = 'https://calendly.com/ben-alignrfp/alignrfp-consultation'
const EMAIL = 'hello@alignrfp.com'
const LINKEDIN_URL = 'https://www.linkedin.com/company/alignrfp'

export default function Contact() {
  return (
    <>
      <section className="pt-40 pb-20 px-6 border-b border-stone-200">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-medium text-accent mb-4 tracking-wide uppercase">
            Contact
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-stone-900 tracking-tight-plus leading-tight mb-6">
            Let's talk.
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            Whether you have questions, want to see a demo, or just want to talk through your
            RFP process before booking a call - reach out directly.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-12">

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="border border-stone-200 rounded-xl p-7 bg-white">
              <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
                Email
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="text-lg font-medium text-stone-900 hover:text-accent transition-colors duration-150"
              >
                {EMAIL}
              </a>
              <p className="text-stone-500 text-sm mt-2 leading-relaxed">
                For general questions, project inquiries, or anything else. Usually responds within a business day.
              </p>
            </div>

            <div className="border border-stone-200 rounded-xl p-7 bg-white">
              <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
                LinkedIn
              </p>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-stone-900 hover:text-accent transition-colors duration-150"
              >
                AlignRFP on LinkedIn
              </a>
              <p className="text-stone-500 text-sm mt-2 leading-relaxed">
                Follow along for updates, case studies, and thoughts on RFP workflows.
              </p>
            </div>
          </div>

          <div className="border-t border-stone-200 pt-10">
            <h2 className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-4">
              Book a free consultation
            </h2>
            <p className="text-stone-700 leading-relaxed text-[17px] mb-6">
              The best way to get started is a 30-minute call. No pitch deck, no pressure -
              just a conversation about your process and whether AlignRFP is a good fit.
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
