import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import posthog from 'posthog-js';
import { CheckCircle, ArrowRight, FileText, Edit, Database, Send, Menu, X, MessageSquare, Zap, ChevronDown, Clock, Search, Trophy, Pencil } from 'lucide-react';
import logo from '../assets/alignRFP_logo7.svg';
import wordLogo from '../assets/Microsoft_Office_Word_(2025–present).svg';
import driveLogo from '../assets/Google_Drive_icon_(2020).svg';
import kbScreenshot from '../assets/KB2_ex.png';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';
import ContactUs from './ContactUs';
import Pricing from './Pricing';
import About from './About';
import { Analytics } from "@vercel/analytics/react"

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function PostHogPageView() {
  const { pathname } = useLocation();

  useEffect(() => {
    posthog.capture('$pageview');
  }, [pathname]);

  return null;
}

function MainLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white border-b border-charcoal-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center no-underline whitespace-nowrap">
              <img src={logo} alt="AlignRFP" className="h-8 w-8 mr-2" />
              <span className="text-2xl font-bold text-charcoal-900">AlignRFP</span>
            </a>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-sm text-charcoal-600 hover:text-charcoal-900 font-medium transition-colors">
                How it Works
              </a>
              <Link to="/pricing" className="text-sm text-charcoal-600 hover:text-charcoal-900 font-medium transition-colors">
                Pricing
              </Link>
              <a href="#faqs" className="text-sm text-charcoal-600 hover:text-charcoal-900 font-medium transition-colors">
                FAQs
              </a>
              <Link to="/contact-us" className="text-sm text-charcoal-600 hover:text-charcoal-900 font-medium transition-colors">
                Contact Us
              </Link>
              <a
                href="https://app.alignrfp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-primary-500 text-white text-sm font-medium rounded hover:bg-primary-600 transition-colors"
              >
                Try It Free
              </a>
            </div>
            <button
              className="md:hidden p-2 text-charcoal-600 hover:text-charcoal-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-charcoal-200 bg-white">
            <div className="px-4 py-4 space-y-1">
              <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-charcoal-600 hover:text-charcoal-900 font-medium py-3">
                How it Works
              </a>
              <Link to="/pricing" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-charcoal-600 hover:text-charcoal-900 font-medium py-3">
                Pricing
              </Link>
              <a href="#faqs" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-charcoal-600 hover:text-charcoal-900 font-medium py-3">
                FAQs
              </a>
              <Link to="/contact-us" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-charcoal-600 hover:text-charcoal-900 font-medium py-3">
                Contact Us
              </Link>
              <a
                href="https://app.alignrfp.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 bg-primary-500 text-white text-sm font-medium rounded text-center hover:bg-primary-600 transition-colors mt-2"
              >
                Try It Free
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-50/80 via-white to-success-50/60 pt-20 pb-24 lg:pt-28 lg:pb-32 overflow-hidden">
        {/* Lined paper background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(180deg, transparent, transparent 31px, rgba(96,165,250,0.28) 31px, rgba(96,165,250,0.28) 32px)',
            backgroundPosition: '0 10px',
          }}
        />
        {/* Red margin line */}
        <div
          className="hidden lg:block absolute top-0 bottom-0 left-[8%] xl:left-[12%] w-px pointer-events-none"
          style={{ backgroundColor: 'rgba(239,68,68,0.18)' }}
        />
        {/* Center vignette for text readability */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 70% at 50% 45%, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.3) 55%, transparent 80%)',
          }}
        />


        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal-900 leading-tight tracking-tight">
            Proposal Management Built on{' '}
            <span className="relative inline-block">
              <svg
                className="absolute -left-2 -right-2 -top-1 -bottom-1 w-[calc(100%+16px)] h-[calc(100%+8px)] pointer-events-none"
                viewBox="0 0 120 45"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M 6 23 Q 30 18, 60 23 Q 90 28, 114 22"
                  stroke="#10B981"
                  strokeOpacity="0.38"
                  strokeWidth="38"
                  strokeLinecap="round"
                  className="highlighter-stroke"
                />
              </svg>
              <span className="relative z-10">Your Best Work</span>
            </span>
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-charcoal-500 leading-relaxed max-w-3xl mx-auto">
            AlignRFP pulls from your team's past proposals and knowledge base to draft responses in minutes —{' '}
            <span className="relative inline-block whitespace-nowrap">
              not hours.
              <svg
                className="absolute -bottom-1 left-0 w-full h-[6px] pointer-events-none"
                viewBox="0 0 200 8"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M 2 4 C 35 1, 65 7, 100 3.5 C 135 0, 165 7, 198 4"
                  stroke="#1B365D"
                  strokeOpacity="0.55"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="underline-stroke"
                />
              </svg>
            </span>{' '}
            No more starting from scratch.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://app.alignrfp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-success-600 text-white text-sm font-medium rounded hover:bg-success-700 transition-colors flex items-center gap-2"
            >
              Start Your Free Trial
              <ArrowRight size={16} />
            </a>
            <Link
              to="/contact-us"
              className="px-8 py-3 bg-white border border-charcoal-300 text-charcoal-700 text-sm font-medium rounded hover:bg-charcoal-50 transition-colors"
            >
              Watch a Demo
            </Link>
          </div>
          <p className="mt-4 text-xs text-charcoal-400">No credit card required. Set up in under 5 minutes.</p>
        </div>
      </section>

      {/* Sound Familiar? */}
      <section className="bg-gradient-to-b from-white to-primary-50/40 py-20 border-t border-charcoal-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn animation="fade" className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal-900">Sound familiar?</h2>
            <p className="mt-4 text-lg text-charcoal-500 max-w-2xl mx-auto">
              Most teams we hear from have to deal with these issues every week.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FadeIn animation="left">
              <PainCard
                icon={<Search size={18} className="text-primary-500" />}
                text="Digging through shared drives, old emails, and last year's proposals to find that one answer you know someone on your team already wrote"
              />
            </FadeIn>
            <FadeIn delay={1} animation="right">
              <PainCard
                icon={<Pencil size={18} className="text-primary-500" />}
                text="Checking for writing consistency and realizing two team members used ChatGPT, one wrote from scratch, and one copy-pasted from an old proposal (they left in an old client's name)"
              />
            </FadeIn>
            <FadeIn animation="left">
              <PainCard
                icon={<Clock size={18} className="text-success-600" />}
                text="Burning days on a single proposal when your team could be focused on the billable work that actually moves the needle - just to do it all again next week"
                accent="success"
              />
            </FadeIn>
            <FadeIn delay={1} animation="right">
              <PainCard
                icon={<Trophy size={18} className="text-success-600" />}
                text="Watching a bid you were perfect for go to someone else. Not because you weren't qualified, but because the proposal didn't come together in time"
                accent="success"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Early User Feedback */}
      <section className="bg-gradient-to-r from-primary-50/50 via-white to-success-50/50 py-14 border-t border-b border-charcoal-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-charcoal-400 uppercase tracking-wider mb-8">What early users are telling us</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn animation="fade">
              <TestimonialCard
                quote="I used to spend a full day just understanding RFP requirements. This does it in minutes."
                role="IT Consultant"
              />
            </FadeIn>
            <FadeIn delay={1} animation="fade">
              <TestimonialCard
                quote="Searching for past experience was so time consuming. Now I just click on what I want to include and it pulls it into the proposal. It's a game changer."
                role="Sales Engineer"
              />
            </FadeIn>
            <FadeIn delay={2} animation="fade">
              <TestimonialCard
                quote="We finally stopped rewriting the same answers. The knowledge base alone was worth it."
                role="Nonprofit Director"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-gradient-to-b from-charcoal-50 to-success-50/30 py-24 border-t border-b border-charcoal-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn animation="fade" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal-900">How It Works</h2>
            <p className="mt-4 text-lg text-charcoal-500 max-w-2xl mx-auto">
              Upload an RFP, pull from what you've already written, and deliver a polished proposal.
            </p>
          </FadeIn>

          <div className="relative">
            {/* Connector line — desktop only */}
            <div className="hidden lg:block absolute top-10 left-[15%] right-[15%] h-px bg-gradient-to-r from-primary-200 via-success-300 to-primary-200" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              <FadeIn animation="left">
                <WorkflowStep
                  number="01"
                  title="Set Up Your Knowledge Base"
                  description="Upload your past proposals, capabilities, and writing samples. This becomes the foundation AlignRFP draws from every time you respond to a bid."
                />
              </FadeIn>
              <FadeIn delay={1} animation="left">
                <WorkflowStep
                  number="02"
                  title="Upload & Analyze RFP"
                  description="Upload any RFP document and get a structured breakdown of requirements, evaluation criteria, and key deliverables."
                />
              </FadeIn>
              <FadeIn delay={2} animation="left">
                <WorkflowStep
                  number="03"
                  title="Build & Manage Proposal"
                  description="Draft responses section by section, pulling from your knowledge base. Edit, rearrange, and refine until it's ready."
                />
              </FadeIn>
              <FadeIn delay={3} animation="left">
                <WorkflowStep
                  number="04"
                  title="Export & Deliver"
                  description="Export as PDF or DOCX — formatted, professional, and ready to submit."
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn animation="fade" className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Why Teams Switch to AlignRFP
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-3xl mx-auto">
              Less busywork, more winning.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <FadeIn animation="scale"><BenefitBlock title="Minutes, Not Hours" detail="RFP analysis that used to take a full afternoon, done while you grab coffee" /></FadeIn>
            <FadeIn delay={1} animation="scale"><BenefitBlock title="Stop Rewriting" detail="Your skills and experience live in your knowledge base, ready to reuse on the next bid" /></FadeIn>
            <FadeIn delay={2} animation="scale"><BenefitBlock title="One Source of Truth" detail="Past proposals, differentiators, and capabilities all in one searchable place" /></FadeIn>
            <FadeIn delay={3} animation="scale"><BenefitBlock title="Secure Data" detail="Encrypted, private, and never shared with third parties" /></FadeIn>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal-900">
              What's Inside
            </h2>
            <p className="mt-4 text-lg text-charcoal-500 max-w-3xl mx-auto">
              Tools that work together so you spend less time on process and more time on substance.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn animation="left">
              <FeaturePanel
                icon={<FileText size={18} className="text-primary-500" />}
                label="Analysis"
                title="RFP Analysis & Readiness"
                description="Upload RFPs and get a breakdown of requirements, scope, and evaluation criteria, all before you start creating a response."
                details={["Requirement extraction", "Evaluation criteria mapping", "Scope identification", "Readiness assessment"]}
              />
            </FadeIn>
            <FadeIn delay={1} animation="right">
              <FeaturePanel
                icon={<Database size={18} className="text-success-600" />}
                label="Knowledge"
                title="Knowledge Base & Reuse"
                description="Store your past experience, skills, differentiators, and writing samples in one place. Next time you need them, they're already written."
                details={["Knowledge repository", "Content reuse", "Team capabilities", "Competitive positioning"]}
                accent="success"
              />
            </FadeIn>
            <FadeIn animation="left">
              <FeaturePanel
                icon={<Edit size={18} className="text-primary-500" />}
                label="Builder"
                title="Response Builder & Editor"
                description="Write, edit, and organize your response section by section. Pull in knowledge base content, tweak the language, and get it right."
                details={["Section management", "Structured editing", "Response drafting", "Version tracking"]}
              />
            </FadeIn>
            <FadeIn delay={1} animation="right">
              <FeaturePanel
                icon={<Send size={18} className="text-success-600" />}
                label="Export"
                title="Export & Submission"
                description="When you're done, export to PDF, DOCX, HTML, or connect directly to Google Docs. Clean formatting. Ready for review."
                details={["PDF export", "DOCX export", "Section editor", "Google Docs integration"]}
                accent="success"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Knowledge Base */}
      <section className="bg-charcoal-50 py-24 border-t border-b border-charcoal-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn animation="scale">
          <div className="bg-white border border-charcoal-200 rounded-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-charcoal-900 mb-2">
                Your Best Answers, Always Ready
              </h2>
              <p className="text-charcoal-500 mb-10">
                Every source you add makes the next response better. Your knowledge base grows with you.
              </p>

              <div className="grid md:grid-cols-2 gap-10 items-start">
                <div className="space-y-12 self-center">
                  <KnowledgeFeature
                    icon={<MessageSquare size={16} className="text-primary-500" />}
                    title="Consistent Company Voice"
                    description="Store your team's approved language and writing samples to avoid generic messaging."
                  />
                  <KnowledgeFeature
                    icon={<Zap size={16} className="text-success-600" />}
                    title="Differentiators at Your Fingertips"
                    description="Your strongest selling points and qualifications, organized and easy to pull into any response."
                    accent="success"
                  />
                  <KnowledgeFeature
                    icon={<FileText size={16} className="text-primary-500" />}
                    title="Proposal History & Reference"
                    description="Look back at what you've submitted before: what worked, what you wrote, and what you can reuse next time."
                  />
                </div>

                <div className="rounded-lg overflow-hidden border border-charcoal-200 shadow-soft max-h-[500px]">
                  <img src={kbScreenshot} alt="AlignRFP Knowledge Base" className="w-full h-full object-cover object-top" />
                </div>
              </div>
            </div>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* Workflow Integration */}
      <section className="bg-white py-24 border-t border-charcoal-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn animation="fade" className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal-900">
              Works With What You Already Use
            </h2>
            <p className="mt-4 text-lg text-charcoal-500 max-w-2xl mx-auto">
              Build proposals in AlignRFP, then export to Google Drive or Microsoft Word for final editing and collaboration.
            </p>
          </FadeIn>

          <FadeIn animation="scale">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4">
              {/* Step 1: Upload RFP */}
              <div className="bg-charcoal-50 border border-charcoal-200 rounded-lg p-6 text-center w-full md:w-56">
                <div className="w-12 h-12 mx-auto mb-3 bg-primary-50 border border-primary-100 rounded-lg flex items-center justify-center">
                  <FileText size={22} className="text-primary-500" />
                </div>
                <h3 className="text-sm font-semibold text-charcoal-900">Upload RFP</h3>
                <p className="text-xs text-charcoal-500 mt-1">Import your RFP document</p>
              </div>

              <ArrowRight size={20} className="text-primary-300 flex-shrink-0 rotate-90 md:rotate-0" />

              {/* Step 2: Build in AlignRFP */}
              <div className="bg-success-50 border-2 border-success-200 rounded-lg p-6 text-center w-full md:w-56">
                <div className="w-12 h-12 mx-auto mb-3 bg-white border border-success-200 rounded-lg flex items-center justify-center">
                  <img src={logo} alt="AlignRFP" className="h-6 w-6" />
                </div>
                <h3 className="text-sm font-semibold text-charcoal-900">Build Proposal</h3>
                <p className="text-xs text-charcoal-500 mt-1">Draft with your knowledge base</p>
              </div>

              <ArrowRight size={20} className="text-primary-300 flex-shrink-0 rotate-90 md:rotate-0" />

              {/* Step 3: Export destinations */}
              <div className="flex flex-col gap-3 w-full md:w-56">
                {/* Google Drive */}
                <div className="bg-charcoal-50 border border-charcoal-200 rounded-lg p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-white border border-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <img src={driveLogo} alt="Google Drive" className="h-6 w-6" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-sm font-semibold text-charcoal-900">Google Drive</h3>
                    <p className="text-xs text-charcoal-500">Edit & collaborate</p>
                  </div>
                </div>

                {/* Microsoft Word */}
                <div className="bg-charcoal-50 border border-charcoal-200 rounded-lg p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-white border border-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <img src={wordLogo} alt="Microsoft Word" className="h-6 w-6" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-sm font-semibold text-charcoal-900">Microsoft Word</h3>
                    <p className="text-xs text-charcoal-500">Export as DOCX</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="bg-charcoal-50 py-24 border-t border-b border-charcoal-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn animation="fade">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
          </FadeIn>
          <div>
            <FAQItem
              question="How is AlignRFP different from other proposal tools?"
              answer="Most teams piece together their proposal process across Word docs, shared drives, and email threads. AlignRFP puts it all in one place. The RFP summary, your past experience, and the proposal editor. No more copy-pasting between five tabs."
            />
            <FAQItem
              question="How does AlignRFP help with RFP analysis?"
              answer="Upload the RFP document and AlignRFP pulls out the requirements, evaluation criteria, and deliverables. You get a clear checklist of what the client is actually asking for before you write a word."
            />
            <FAQItem
              question="Is my company data secure?"
              answer="Yes. Everything is encrypted, access is tightly controlled, and we never share your data with anyone. Your content stays yours."
            />
            <FAQItem
              question="Can I try AlignRFP for free?"
              answer="Yes! Your first proposal is completely free! No credit card required. The free proposal includes all core features with a single document upload. After that, you can buy individual credits starting at $39 per proposal, or subscribe for the best value."
            />
            <FAQItem
              question="How do credits and subscriptions work?"
              answer="Pay-as-you-go credits never expire — buy them and use them whenever. Subscriptions give you a set number of proposals per month plus extras like bigger knowledge bases, team collaboration, and custom templates. Pick whatever fits how you work."
            />
            <FAQItem
              question="What types of teams use AlignRFP?"
              answer="IT consultants, nonprofits applying for grants, research orgs, translation agencies, government contractors - really anyone who regularly responds to RFPs, RFQs, or RFIs. It works for solo consultants and growing teams alike."
            />
          </div>
        </div>
      </section>

      {/* From the Founder */}
      <section className="bg-gradient-to-b from-success-50/30 to-white py-16 border-t border-charcoal-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn animation="fade">
            <div className="text-center">
              <div className="w-10 h-1 bg-gradient-to-r from-primary-400 to-success-400 rounded-full mx-auto mb-6" />
              <p className="text-sm font-semibold text-charcoal-400 uppercase tracking-wider mb-6">From the Founder</p>
              <blockquote className="text-lg text-charcoal-700 leading-relaxed mb-6">
                "AlignRFP is the tool I wish I had when I was responding to RFPs. I hope it helps you save time and win more work. We're a small team, we ship fast, and we genuinely want to hear from you."
              </blockquote>
              <div>
                <span className="text-sm font-semibold text-charcoal-900">Ben</span>
                <span className="text-sm text-charcoal-400 ml-2">Founder, AlignRFP</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-500 py-20">
        <FadeIn animation="fade" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to streamline your RFP responses?
          </h2>
          <p className="text-lg text-white/80 mb-3 max-w-2xl mx-auto">
            Upload your first RFP, build your knowledge base, and see the difference.
          </p>
          <p className="text-sm text-white/60 mb-10">
            Your first proposal is free! Subscriptions and Pay-as-you-go plans available{' '}
            <Link to="/pricing" className="text-white/80 underline hover:text-white transition-colors">View pricing</Link>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://app.alignrfp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-success-500 text-white text-sm font-semibold rounded hover:bg-success-600 transition-colors flex items-center gap-2"
            >
              Start Your Free Trial
              <ArrowRight size={16} />
            </a>
            <Link
              to="/contact-us"
              className="px-8 py-3 bg-transparent border border-white/50 text-white text-sm font-medium rounded hover:bg-white/10 transition-colors"
            >
              Contact Us for a Demo
            </Link>
          </div>
          <div className="mt-10 pt-8 border-t border-white/20">
            <EmailSignupStrip />
          </div>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-charcoal-50 to-primary-50/30 py-14 border-t border-charcoal-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center mb-3">
                <img src={logo} alt="AlignRFP" className="h-7 w-7 mr-2" />
                <span className="text-lg font-bold text-charcoal-900">AlignRFP</span>
              </div>
              <p className="text-sm text-charcoal-500 leading-relaxed">
                Proposal management built on your team's best work.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-sm font-semibold text-charcoal-900 mb-4">Product</h4>
              <ul className="space-y-2.5">
                <li><a href="#how-it-works" className="text-sm text-charcoal-500 hover:text-charcoal-700 transition-colors">How It Works</a></li>
                <li><a href="#faqs" className="text-sm text-charcoal-500 hover:text-charcoal-700 transition-colors">FAQ</a></li>
                <li><Link to="/pricing" className="text-sm text-charcoal-500 hover:text-charcoal-700 transition-colors">Pricing</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-semibold text-charcoal-900 mb-4">Company</h4>
              <ul className="space-y-2.5">
                <li><Link to="/about" className="text-sm text-charcoal-500 hover:text-charcoal-700 transition-colors">About</Link></li>
                <li><Link to="/contact-us" className="text-sm text-charcoal-500 hover:text-charcoal-700 transition-colors">Contact Us</Link></li>
                <li><Link to="/privacy-policy" className="text-sm text-charcoal-500 hover:text-charcoal-700 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="text-sm text-charcoal-500 hover:text-charcoal-700 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-sm font-semibold text-charcoal-900 mb-4">Connect</h4>
              <ul className="space-y-2.5">
                <li><a href="mailto:hello@alignrfp.com" className="text-sm text-charcoal-500 hover:text-charcoal-700 transition-colors">hello@alignrfp.com</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-charcoal-200 text-center text-charcoal-400 text-xs">
            &copy; {new Date().getFullYear()} AlignRFP. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ————————————————————————————————————————
   Components
   ———————————————————————————————————————— */

function FadeIn({ children, className = '', delay = 0, animation = 'up' }: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'up' | 'left' | 'right' | 'scale' | 'fade';
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay === 1 ? 'fade-in-delay-1' : delay === 2 ? 'fade-in-delay-2' : delay === 3 ? 'fade-in-delay-3' : '';
  const animClass = animation !== 'up' ? `anim-${animation}` : '';

  return (
    <div
      ref={ref}
      className={`${visible ? `fade-in-visible ${delayClass}` : `fade-in-hidden ${animClass}`} ${className}`}
    >
      {children}
    </div>
  );
}

function TestimonialCard({ quote, name, role }: { quote: string; name?: string; role: string }) {
  return (
    <div className="text-center bg-white rounded-lg p-6 border border-charcoal-100">
      <div className="w-8 h-1 bg-gradient-to-r from-primary-400 to-success-400 rounded-full mx-auto mb-5" />
      <p className="text-sm text-charcoal-600 leading-relaxed italic mb-4">"{quote}"</p>
      <div>
        {name && <span className="text-sm font-semibold text-charcoal-900">{name}</span>}
        <span className={`text-xs text-charcoal-400 ${name ? 'ml-2' : ''}`}>{role}</span>
      </div>
    </div>
  );
}

function PainCard({ icon, text, accent = 'primary' }: { icon: React.ReactNode; text: string; accent?: 'primary' | 'success' }) {
  const borderColor = accent === 'success' ? 'border-l-success-400' : 'border-l-primary-400';
  const iconBg = accent === 'success' ? 'bg-success-50 border-success-100' : 'bg-primary-50 border-primary-100';
  return (
    <div className={`flex items-start gap-4 bg-white border border-charcoal-200 ${borderColor} border-l-[3px] rounded-lg p-6 h-full`}>
      <div className={`w-9 h-9 ${iconBg} border rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5`}>
        {icon}
      </div>
      <p className="text-sm text-charcoal-600 leading-relaxed">{text}</p>
    </div>
  );
}

function WorkflowStep({ number, title, description }: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center relative">
      <div className="w-20 h-20 mx-auto mb-6 bg-white border-2 border-success-200 rounded-full flex items-center justify-center relative z-10">
        <div className="text-center">
          <span className="block text-[10px] font-medium text-charcoal-400 uppercase tracking-wider leading-none mb-1">Step</span>
          <span className="block text-xl font-bold text-success-600 leading-none">{number}</span>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-charcoal-900 mb-3">{title}</h3>
      <p className="text-sm text-charcoal-500 leading-relaxed max-w-xs mx-auto">{description}</p>
    </div>
  );
}

function BenefitBlock({ title, detail }: {
  title: string;
  detail: string;
}) {
  return (
    <div className="text-center">
      <div className="w-8 h-0.5 bg-success-400/60 rounded-full mx-auto mb-4" />
      <div className="text-xl sm:text-2xl font-bold text-white mb-2">{title}</div>
      <div className="text-sm text-white/70 leading-relaxed">{detail}</div>
    </div>
  );
}

function FeaturePanel({ icon, label, title, description, details, accent = 'primary' }: {
  icon: React.ReactNode;
  label: string;
  title: string;
  description: string;
  details: string[];
  accent?: 'primary' | 'success';
}) {
  const bgClass = accent === 'success' ? 'bg-success-50 border-success-100' : 'bg-primary-50 border-primary-100';
  const dotClass = accent === 'success' ? 'bg-success-500' : 'bg-primary-500';
  return (
    <div className="bg-white border border-charcoal-200 rounded-lg p-8 hover:border-charcoal-300 transition-colors">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-8 h-8 ${bgClass} border rounded flex items-center justify-center`}>
          {icon}
        </div>
        <span className="text-xs font-semibold text-charcoal-400 uppercase tracking-wider">{label}</span>
      </div>
      <h3 className="text-xl font-semibold text-charcoal-900 mb-3">{title}</h3>
      <p className="text-sm text-charcoal-500 leading-relaxed mb-5">{description}</p>
      <div className="grid grid-cols-2 gap-2">
        {details.map((detail, i) => (
          <div key={i} className="flex items-center gap-2 text-xs text-charcoal-600">
            <div className={`w-1 h-1 ${dotClass} rounded-full flex-shrink-0`} />
            {detail}
          </div>
        ))}
      </div>
    </div>
  );
}

function KnowledgeFeature({ icon, title, description, accent = 'primary' }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  accent?: 'primary' | 'success';
}) {
  const bgClass = accent === 'success' ? 'bg-success-50 border-success-100' : 'bg-primary-50 border-primary-100';
  return (
    <div className="flex items-start gap-4">
      <div className={`w-8 h-8 ${bgClass} border rounded flex items-center justify-center flex-shrink-0 mt-0.5`}>
        {icon}
      </div>
      <div>
        <h3 className="text-base font-semibold text-charcoal-900 mb-1">{title}</h3>
        <p className="text-sm text-charcoal-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}


function EmailSignupStrip() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await fetch('https://formspree.io/f/mqeypvbg', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, source: 'footer-strip' }),
    });
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="flex items-center justify-center gap-2 text-xs text-white/70">
        <CheckCircle size={13} className="text-success-400 flex-shrink-0" />
        You're on the list — we'll keep you posted on new features.
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
      <span className="text-base text-white/90 whitespace-nowrap">Not ready yet? Join our email list to stay updated on new features —</span>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="you@yourcompany.com"
          className="px-3 py-1.5 text-sm border border-white/20 rounded text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:border-white/50 transition-colors bg-white w-56"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-3 py-1.5 bg-success-500 text-white text-sm font-medium rounded hover:bg-success-600 transition-colors whitespace-nowrap"
        >
          {loading ? 'Joining...' : 'Sign up'}
        </button>
      </form>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-charcoal-200">
      <button
        className="flex justify-between items-center w-full text-left py-5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-base font-medium text-charcoal-900 pr-4">{question}</h3>
        <ChevronDown
          size={18}
          className={`text-charcoal-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className="text-sm text-charcoal-500 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <PostHogPageView />
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Analytics />
    </Router>
  );
}

export default App;