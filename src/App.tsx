import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { CheckCircle, ArrowRight, FileText, Edit, Database, Send, Menu, X, MessageSquare, Zap, ChevronDown } from 'lucide-react';
import logo from '../assets/alignRFP_logo7.svg';
import wordLogo from '../assets/Microsoft_Office_Word_(2025–present).svg';
import driveLogo from '../assets/Google_Drive_icon_(2020).svg';
import kbScreenshot from '../assets/KB2_ex.png';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';
import ContactUs from './ContactUs';
import { Analytics } from "@vercel/analytics/react"

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function MainLayout() {
  const [isAnnual, setIsAnnual] = useState(false);
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
              <a href="#pricing" className="text-sm text-charcoal-600 hover:text-charcoal-900 font-medium transition-colors">
                Pricing
              </a>
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
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-charcoal-600 hover:text-charcoal-900 font-medium py-3">
                Pricing
              </a>
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
            Proposal Management for{' '}
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
              <span className="relative z-10">Modern</span>
            </span>{' '}
            Teams
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-charcoal-500 leading-relaxed max-w-3xl mx-auto">
            Analyze RFPs, organize your knowledge base, and deliver{' '}
            <span className="relative inline-block">
              winning proposals
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
            — all in one workspace.
          </p>

          {/* Capability badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <HeroBadge icon={<FileText size={14} />} label="RFP Analysis" accent="primary" />
            <HeroBadge icon={<Database size={14} />} label="Knowledge Base" accent="success" />
            <HeroBadge icon={<Edit size={14} />} label="Proposal Builder" accent="primary" />
            <HeroBadge icon={<Send size={14} />} label="Export & Deliver" accent="success" />
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://app.alignrfp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-success-600 text-white text-sm font-medium rounded hover:bg-success-700 transition-colors flex items-center gap-2"
            >
              Try It Free
              <ArrowRight size={16} />
            </a>
            <Link
              to="/contact-us"
              className="px-8 py-3 bg-white border border-charcoal-300 text-charcoal-700 text-sm font-medium rounded hover:bg-charcoal-50 transition-colors"
            >
              Book a Demo
            </Link>
          </div>
          <p className="mt-4 text-xs text-charcoal-400">No credit card required. Start analyzing RFPs in minutes.</p>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-gradient-to-b from-charcoal-50 to-success-50/30 py-24 border-t border-b border-charcoal-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn animation="fade" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal-900">How It Works</h2>
            <p className="mt-4 text-lg text-charcoal-500 max-w-2xl mx-auto">
              A streamlined workflow from RFP intake to proposal delivery
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
                  description="Add your company details, past proposals, differentiators, and capabilities. AlignRFP organizes your institutional knowledge for consistent, reusable content."
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
                  description="Draft responses using your knowledge base, edit with the built-in editor, and manage your proposal from start to finish."
                />
              </FadeIn>
              <FadeIn delay={3} animation="left">
                <WorkflowStep
                  number="04"
                  title="Export & Deliver"
                  description="Export polished, submission-ready proposals as PDF or DOCX — formatted and ready to send."
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn animation="fade" className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Results That Speak for Themselves
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-3xl mx-auto">
              Teams using AlignRFP streamline their proposal workflow and reclaim hours of manual effort each week.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <FadeIn animation="scale"><StatBlock value="Up to 70%" label="Faster Proposals" detail="Reduction in proposal preparation time" /></FadeIn>
            <FadeIn delay={1} animation="scale"><StatBlock value="8+ hrs" label="Saved Per Proposal" detail="Less time on formatting, searching, and rewriting" /></FadeIn>
            <FadeIn delay={2} animation="scale"><StatBlock value="Centralized" label="Knowledge Base" detail="One place for past proposals, differentiators, and capabilities" /></FadeIn>
            <FadeIn delay={3} animation="scale"><StatBlock value="100%" label="Your Data" detail="Encrypted, private, and always under your control" /></FadeIn>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal-900">
              Everything You Need to Win More Bids
            </h2>
            <p className="mt-4 text-lg text-charcoal-500 max-w-3xl mx-auto">
              A complete platform for RFP analysis, proposal management, and team efficiency.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn animation="left">
              <FeaturePanel
                icon={<FileText size={18} className="text-primary-500" />}
                label="Analysis"
                title="RFP Analysis & Readiness"
                description="Upload RFPs and get a structured breakdown of requirements, scope, and evaluation criteria — so you know exactly what's needed before you start writing."
                details={["Requirement extraction", "Evaluation criteria mapping", "Scope identification", "Readiness assessment"]}
              />
            </FadeIn>
            <FadeIn delay={1} animation="right">
              <FeaturePanel
                icon={<Database size={18} className="text-success-600" />}
                label="Knowledge"
                title="Knowledge Base & Reuse"
                description="Centralize your company's capabilities, past proposals, and differentiators. Reuse proven content across proposals for speed and consistency."
                details={["Document repository", "Content reuse", "Team capabilities", "Competitive positioning"]}
                accent="success"
              />
            </FadeIn>
            <FadeIn animation="left">
              <FeaturePanel
                icon={<Edit size={18} className="text-primary-500" />}
                label="Builder"
                title="Proposal Builder & Editor"
                description="Build and refine proposals with a structured editor. Manage sections, collaborate on responses, and keep everything organized in one place."
                details={["Section management", "Structured editing", "Response drafting", "Version tracking"]}
              />
            </FadeIn>
            <FadeIn delay={1} animation="right">
              <FeaturePanel
                icon={<Send size={18} className="text-success-600" />}
                label="Export"
                title="Export & Submission"
                description="Export polished, client-ready proposals as PDF or DOCX. Formatted, professional, and ready to submit."
                details={["PDF export", "DOCX export", "Custom formatting", "Submission-ready output"]}
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
                Your Institutional Knowledge, Centralized
              </h2>
              <p className="text-charcoal-500 mb-10">
                Build a compounding advantage with every proposal you manage.
              </p>

              <div className="grid md:grid-cols-2 gap-10 items-start">
                <div className="space-y-12 self-center">
                  <KnowledgeFeature
                    icon={<MessageSquare size={16} className="text-primary-500" />}
                    title="Consistent Company Voice"
                    description="Maintain a unified tone and messaging across every proposal by storing approved language and writing samples."
                  />
                  <KnowledgeFeature
                    icon={<Zap size={16} className="text-success-600" />}
                    title="Differentiators at Your Fingertips"
                    description="Keep your unique selling points, competitive advantages, and key qualifications organized and ready to deploy."
                    accent="success"
                  />
                  <KnowledgeFeature
                    icon={<FileText size={16} className="text-primary-500" />}
                    title="Proposal History & Reference"
                    description="Access past proposals to reference successful responses, track what's been submitted, and build on proven content."
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
              Seamlessly Fits Your Workflow
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

              <ArrowRight size={20} className="text-charcoal-300 flex-shrink-0 rotate-90 md:rotate-0" />

              {/* Step 2: Build in AlignRFP */}
              <div className="bg-success-50 border-2 border-success-200 rounded-lg p-6 text-center w-full md:w-56">
                <div className="w-12 h-12 mx-auto mb-3 bg-white border border-success-200 rounded-lg flex items-center justify-center">
                  <img src={logo} alt="AlignRFP" className="h-6 w-6" />
                </div>
                <h3 className="text-sm font-semibold text-charcoal-900">Build Proposal</h3>
                <p className="text-xs text-charcoal-500 mt-1">Draft with your knowledge base</p>
              </div>

              <ArrowRight size={20} className="text-charcoal-300 flex-shrink-0 rotate-90 md:rotate-0" />

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

      {/* Pricing */}
      <section id="pricing" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal-900">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-lg text-charcoal-500 max-w-2xl mx-auto">
              Plans that scale with your proposal workflow
            </p>
            <div className="mt-8">
              <PricingToggle isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
            </div>
          </FadeIn>
          <FadeIn animation="scale">
            <PricingCards isAnnual={isAnnual} />
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
              answer="AlignRFP combines RFP analysis, a centralized knowledge base, and a structured proposal editor in one platform. Instead of copy-pasting between tools, you manage your entire proposal workflow — from RFP intake to final delivery — in a single workspace."
            />
            <FAQItem
              question="How does AlignRFP help with RFP analysis?"
              answer="When you upload an RFP, AlignRFP breaks it down into structured requirements, evaluation criteria, and deliverables. This gives your team a clear picture of what's needed before you start writing."
            />
            <FAQItem
              question="Is my company data secure?"
              answer="Yes. We use bank-grade encryption and strict access controls. Your data is never shared with third parties, and you maintain full ownership of all content on the platform."
            />
            <FAQItem
              question="What does 'active proposal' mean?"
              answer="An active proposal is one that is currently in progress — you can generate responses, edit content, and export from it. Once you're done, you can mark a proposal as complete, at which point it becomes view-only. Completed proposals still live on your account for reference, they just don't count toward your active proposal limit."
            />
            <FAQItem
              question="What types of teams use AlignRFP?"
              answer="AlignRFP is built for consultants, professional services firms, and any team that regularly responds to RFPs or builds proposals. Whether you're a solo consultant or a growing firm, the platform scales with your needs."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-500 py-20">
        <FadeIn animation="fade" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to simplify your proposal process?
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Start managing RFPs, building your knowledge base, and delivering winning proposals — all in one workspace.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://app.alignrfp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-primary-600 text-sm font-semibold rounded hover:bg-charcoal-50 transition-colors flex items-center gap-2"
            >
              Try It Free
              <ArrowRight size={16} />
            </a>
            <Link
              to="/contact-us"
              className="px-8 py-3 bg-transparent border border-white/50 text-white text-sm font-medium rounded hover:bg-white/10 transition-colors"
            >
              Contact Us for a Demo
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="bg-white py-10 border-t border-charcoal-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img src={logo} alt="AlignRFP" className="h-6 w-6 mr-2" />
              <span className="text-sm font-semibold text-charcoal-900">AlignRFP</span>
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-sm text-charcoal-400 hover:text-charcoal-600 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-sm text-charcoal-400 hover:text-charcoal-600 transition-colors">
                Terms of Service
              </Link>
              <Link to="/contact-us" className="text-sm text-charcoal-400 hover:text-charcoal-600 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center text-charcoal-400 text-xs">
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

function HeroBadge({ icon, label, accent }: { icon: React.ReactNode; label: string; accent: 'primary' | 'success' }) {
  const colors = accent === 'success'
    ? 'bg-success-50 border-success-200 text-success-700'
    : 'bg-primary-50 border-primary-200 text-primary-500';
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded border text-xs font-medium ${colors}`}>
      {icon}
      {label}
    </span>
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

function StatBlock({ value, label, detail }: {
  value: string;
  label: string;
  detail: string;
}) {
  return (
    <div className="text-center">
      <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{value}</div>
      <div className="text-sm font-semibold text-white/90 mb-1">{label}</div>
      <div className="text-xs text-white/60">{detail}</div>
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

function PricingToggle({ isAnnual, setIsAnnual }: {
  isAnnual: boolean;
  setIsAnnual: (v: boolean) => void;
}) {
  return (
    <div className="inline-flex items-center bg-charcoal-100 rounded p-1">
      <button
        onClick={() => setIsAnnual(false)}
        className={`px-5 py-2 text-sm font-medium rounded transition-colors ${
          !isAnnual ? 'bg-white text-charcoal-900 shadow-sm' : 'text-charcoal-500 hover:text-charcoal-700'
        }`}
      >
        Monthly
      </button>
      <button
        onClick={() => setIsAnnual(true)}
        className={`px-5 py-2 text-sm font-medium rounded transition-colors relative ${
          isAnnual ? 'bg-white text-charcoal-900 shadow-sm' : 'text-charcoal-500 hover:text-charcoal-700'
        }`}
      >
        Annual
        <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-success-600 text-white text-[10px] px-2 py-0.5 rounded whitespace-nowrap font-medium">
          2 months free
        </span>
      </button>
    </div>
  );
}

function PricingCards({ isAnnual }: { isAnnual: boolean }) {
  const plans = [
    {
      title: "Starter",
      monthlyPrice: 99,
      description: "For independent consultants managing their proposal workflow",
      features: [
        "10 active proposals per month",
        "RFP analysis & requirement breakdown",
        "Proposal editor & export",
        "Knowledge base (up to 50 documents)",
        "Google Drive integration",
        "PDF & DOCX export",
      ],
      isPopular: false,
    },
    {
      title: "Pro",
      monthlyPrice: 299,
      description: "For consulting firms scaling their proposal operations",
      features: [
        "50 active proposals per month",
        "Everything in Starter",
        "Priority support",
        "Advanced knowledge base (unlimited documents)",
      ],
      isPopular: true,
    },
    {
      title: "Enterprise",
      monthlyPrice: null,
      description: "For organizations with custom compliance and integration needs",
      features: [
        "Unlimited proposals",
        "Everything in Pro",
        "Custom integrations & API access",
        "Advanced team collaboration",
        "White-label options",
        "Custom compliance & security controls",
        "Dedicated account management",
        "24/7 premium support",
      ],
      isPopular: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {plans.map((plan, i) => (
        <PricingCard key={i} {...plan} isAnnual={isAnnual} />
      ))}
    </div>
  );
}

function PricingCard({ title, monthlyPrice, description, features, isPopular, isAnnual }: {
  title: string;
  monthlyPrice: number | null;
  description: string;
  features: string[];
  isPopular: boolean;
  isAnnual: boolean;
}) {
  const price = monthlyPrice === null
    ? "Contact Us"
    : isAnnual
      ? `$${monthlyPrice * 10}/year`
      : `$${monthlyPrice}/month`;

  const originalPrice = monthlyPrice && isAnnual ? `$${monthlyPrice * 12}/year` : null;

  return (
    <div className={`relative bg-white rounded-lg p-8 flex flex-col ${
      isPopular ? 'border-2 border-primary-500 shadow-soft' : 'border border-charcoal-200'
    }`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-primary-500 text-white px-4 py-1 text-xs font-semibold rounded">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-charcoal-900 mb-1">{title}</h3>
        <p className="text-sm text-charcoal-500">{description}</p>
      </div>

      <div className="mb-6">
        <span className="text-3xl font-bold text-charcoal-900">{price}</span>
        {originalPrice && (
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm text-charcoal-400 line-through">{originalPrice}</span>
            <span className="text-xs bg-success-50 text-success-700 px-2 py-0.5 rounded font-medium">Save 17%</span>
          </div>
        )}
      </div>

      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-charcoal-600">
            <CheckCircle size={16} className="text-success-500 flex-shrink-0 mt-0.5" />
            {feature}
          </li>
        ))}
      </ul>

      {monthlyPrice === null ? (
        <Link
          to="/contact-us"
          className="w-full py-3 text-sm font-medium rounded text-center block transition-colors bg-charcoal-100 text-charcoal-900 hover:bg-charcoal-200"
        >
          Contact Us
        </Link>
      ) : (
        <a
          href="https://app.alignrfp.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full py-3 text-sm font-medium rounded text-center block transition-colors ${
            isPopular
              ? 'bg-primary-500 text-white hover:bg-primary-600'
              : 'bg-charcoal-100 text-charcoal-900 hover:bg-charcoal-200'
          }`}
        >
          Try It Free
        </a>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Analytics />
    </Router>
  );
}

export default App;