const EMAIL = 'hello@alignrfp.com'

function Section({ title, children }) {
  return (
    <div>
      <h2 className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-4">
        {title}
      </h2>
      <div className="space-y-4 text-stone-700 leading-relaxed text-[16px]">
        {children}
      </div>
    </div>
  )
}

export default function Terms() {
  return (
    <>
      <section className="pt-40 pb-16 px-6 border-b border-stone-200">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-medium text-accent mb-4 tracking-wide uppercase">
            Legal
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-stone-900 tracking-tight-plus leading-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-stone-500 text-sm">Effective April 2026</p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-14">

          <Section title="About this site">
            <p>
              This website is operated by Ben Chamblee, doing business as AlignRFP,
              based in New York. By using this site, you agree to these terms. If you don't,
              please don't use the site.
            </p>
          </Section>

          <Section title="Use of this site">
            <p>
              This site is for informational purposes. You may browse, share links, and
              submit your email address to receive updates. You may not use the site to
              scrape content, impersonate AlignRFP, or do anything that would reasonably
              be considered harmful or deceptive.
            </p>
          </Section>

          <Section title="Services">
            <p>
              The descriptions of services on this site are general in nature. Actual
              engagements are governed by separate written agreements between AlignRFP and
              the client. Nothing on this site constitutes a binding offer or contract.
            </p>
            <p>
              Pricing, scope, and timelines discussed on this site are illustrative.
              All engagements are scoped individually before any agreement is made.
            </p>
          </Section>

          <Section title="Intellectual property">
            <p>
              The content on this site - including text, design, logos, and images - belongs
              to AlignRFP unless otherwise noted. You may not reproduce or redistribute it
              without permission. Quoting or linking is fine.
            </p>
          </Section>

          <Section title="No warranties">
            <p>
              This site is provided as-is. We do our best to keep it accurate and up to date,
              but we make no guarantees about the completeness or accuracy of any information
              on it. Use your own judgment before making business decisions based on what you
              read here.
            </p>
          </Section>

          <Section title="Limitation of liability">
            <p>
              To the extent permitted by law, AlignRFP is not liable for any indirect,
              incidental, or consequential damages arising from your use of this site or
              reliance on its content.
            </p>
          </Section>

          <Section title="Changes">
            <p>
              We may update these terms from time to time. The effective date at the top of
              this page will reflect when they were last changed. Continued use of the site
              after changes means you accept the updated terms.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              Questions? Email{' '}
              <a href={`mailto:${EMAIL}`} className="text-accent hover:text-accent-dark underline underline-offset-4 transition-colors duration-150">
                {EMAIL}
              </a>
              .
            </p>
          </Section>

        </div>
      </section>
    </>
  )
}
