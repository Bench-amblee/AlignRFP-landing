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

export default function Privacy() {
  return (
    <>
      <section className="pt-40 pb-16 px-6 border-b border-stone-200">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-medium text-accent mb-4 tracking-wide uppercase">
            Legal
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-stone-900 tracking-tight-plus leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-stone-500 text-sm">Effective April 2026</p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-14">

          <Section title="Overview">
            <p>
              AlignRFP is operated by Ben Chamblee. This page explains what information we
              collect when you visit this site or submit your email address, how we use it, and
              who we share it with. We keep it simple because we keep it minimal.
            </p>
          </Section>

          <Section title="What we collect">
            <p>
              <strong className="text-stone-900">Email addresses.</strong> If you submit your
              email through the "stay updated" form on our homepage, we store your address to
              send occasional updates about AlignRFP. That's the only reason we collect it.
            </p>
            <p>
              <strong className="text-stone-900">Contact form submissions.</strong> If you reach
              out through our contact page or email directly, we receive your name, email, and
              message. We use this only to respond to your inquiry.
            </p>
            <p>
              <strong className="text-stone-900">Basic usage data.</strong> Like most websites,
              our hosting provider may log standard request data such as IP addresses, browser
              type, and pages visited. We do not use this data for tracking or advertising.
            </p>
          </Section>

          <Section title="How we use it">
            <p>
              We use your email address to send updates about AlignRFP - new case studies,
              service updates, and occasional thoughts on RFP workflows. We do not send
              unsolicited sales emails or share your address with third parties for marketing.
            </p>
            <p>
              We use contact form submissions only to respond to your message. We do not add
              you to any list without your explicit consent.
            </p>
          </Section>

          <Section title="Third-party services">
            <p>
              This site uses a small number of third-party services:
            </p>
            <ul className="space-y-2 pl-4">
              {[
                ['Formspree', 'Processes form submissions. Your email is stored in Formspree when you sign up for updates. Their privacy policy applies to data they handle.'],
                ['Google Fonts', 'Loads the Bitter typeface. Google may log the request, including your IP address. No personal data from this site is passed to Google.'],
                ['Vercel', 'Hosts this website. Standard server logs apply per their privacy policy.'],
              ].map(([name, desc]) => (
                <li key={name} className="text-[16px] text-stone-700 leading-relaxed">
                  <strong className="text-stone-900">{name}.</strong> {desc}
                </li>
              ))}
            </ul>
            <p>
              We do not use advertising networks, sell data, or run behavioral tracking of any kind.
            </p>
          </Section>

          <Section title="Your rights">
            <p>
              You can unsubscribe from updates at any time using the link in any email we send,
              or by emailing us directly and asking to be removed. We'll take care of it promptly.
            </p>
            <p>
              If you'd like to know what information we have about you, or want it deleted,
              email us at{' '}
              <a href={`mailto:${EMAIL}`} className="text-accent hover:text-accent-dark underline underline-offset-4 transition-colors duration-150">
                {EMAIL}
              </a>
              .
            </p>
          </Section>

          <Section title="Changes">
            <p>
              If we make meaningful changes to this policy, we'll update the effective date at
              the top of this page. We won't change how we use your data without notice.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              Questions about this policy? Email{' '}
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
