import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Zap, MessageSquare, CheckCircle, ArrowRight, FileText, Edit, Database, Send } from 'lucide-react';
import logo from '../assets/alignRFP_logo7.svg';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';
import ContactUs from './ContactUs';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function MainLayout() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [scrollY, setScrollY] = useState(0);
  const [isAnnual, setIsAnnual] = useState(false);

  // Track scroll position for animations
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    
    try {
      const response = await fetch("https://formspree.io/f/moveprwo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        setSubmitted(true);
        setEmail('');
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      {/* Navbar */}
      <nav className="bg-white shadow-soft py-4 relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a href="/" className="flex items-center text-2xl font-bold no-underline whitespace-nowrap">
                <img src={logo} alt="AlignRFP logo" className="h-8 w-8 mr-2" />
                <span className="font-inter text-black">AlignRFP</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-charcoal-600 hover:text-primary-600 font-medium transition-colors duration-200">
                How it Works
              </a>
              <a href="#pricing" className="text-charcoal-600 hover:text-primary-600 font-medium transition-colors duration-200">
                Pricing
              </a>
              <a href="#faqs" className="text-charcoal-600 hover:text-primary-600 font-medium transition-colors duration-200">
                FAQs
              </a>
              <Link to="/contact-us" className="text-charcoal-600 hover:text-primary-600 font-medium transition-colors duration-200">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <div className="w-full px-0">
        <div className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 mb-0 w-full relative overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/5 to-success-600/5"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-600/20 to-success-600/20 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
                <h1 className="relative text-5xl md:text-6xl font-bold text-charcoal-900 mb-10 leading-tight animate-slide-up">
                  Proposal Management for
                  <span className="bg-gradient-to-r from-success-600 to-success-800 bg-clip-text text-transparent"> Modern </span>
                  Teams
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-charcoal-600 mb-16 leading-relaxed max-w-4xl mx-auto animate-slide-up">
                Analyze RFPs, organize your knowledge base, and deliver winning proposals — all in one workspace.
              </p>

              {/* Email Collection */}
              <div className="max-w-lg mx-auto mb-16 animate-slide-up">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email to get started"
                      className="flex-1 px-4 py-3 rounded-xl border border-charcoal-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-charcoal-900"
                      required
                    />
                    <button
                      type="submit"
                      disabled={submitting}
                      className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-medium hover:shadow-strong transform hover:scale-105"
                    >
                      {submitting ? 'Submitting...' : 'Get Early Access'}
                      {!submitting && <ArrowRight size={20} />}
                    </button>
                  </form>
                ) : (
                  <div className="p-4 bg-success-50 rounded-xl border border-success-200 shadow-soft">
                    <p className="text-success-700 flex items-center justify-center gap-2">
                      <CheckCircle size={20} />
                      Thanks! We'll be in touch soon.
                    </p>
                  </div>
                )}
                {error && (
                  <p className="mt-2 text-danger-500 text-sm">{error}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div id="how-it-works" className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-success-600/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-600/20 to-success-600/20 rounded-2xl blur-2xl opacity-50 animate-pulse"></div>
              <h2 className="relative text-4xl md:text-5xl font-bold text-charcoal-900 animate-slide-up">
                How It Works
              </h2>
            </div>
            <p className="text-xl text-charcoal-600 mt-6 max-w-3xl mx-auto">
              A streamlined workflow from RFP intake to proposal delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            <ProcessStep
              number="1"
              icon={<Database className="h-12 w-12 text-white" />}
              title="Set Up Your Knowledge Base"
              description="Add your company details, past proposals, differentiators, and capabilities. AlignRFP organizes your institutional knowledge for consistent, reusable content."
            />
            <ProcessStep
              number="2"
              icon={<FileText className="h-12 w-12 text-white" />}
              title="Upload & Analyze RFP"
              description="Upload any RFP document and get a structured breakdown of requirements, evaluation criteria, and key deliverables."
            />
            <ProcessStep
              number="3"
              icon={<Edit className="h-12 w-12 text-white" />}
              title="Build & Manage Proposal"
              description="Draft responses using your knowledge base, edit with the built-in editor, and manage your proposal from start to finish."
            />
            <ProcessStep
              number="4"
              icon={<Send className="h-12 w-12 text-white" />}
              title="Export & Deliver"
              description="Export polished, submission-ready proposals as PDF or DOCX — formatted and ready to send."
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-primary-600 to-success-600 py-20 w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/5 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Results That Speak for Themselves
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
              Teams using AlignRFP streamline their proposal workflow and reclaim hours of manual effort each week.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <StatCard value="Up to 70%" label="Faster Proposals" description="Reduction in proposal preparation time" />
            <StatCard value="8+ hrs" label="Saved Per Proposal" description="Less time on formatting, searching, and rewriting" />
            <StatCard value="Centralized" label="Knowledge Base" description="One place for past proposals, differentiators, and capabilities" />
            <StatCard value="100%" label="Your Data" description="Encrypted, private, and always under your control" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-success-600/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-600/20 to-success-600/20 rounded-2xl blur-2xl opacity-50 animate-pulse"></div>
              <h2 className="relative text-4xl md:text-5xl font-bold text-charcoal-900 mb-6">
                Everything You Need to Win More Bids
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-charcoal-600 max-w-4xl mx-auto leading-relaxed">
              A complete platform for RFP analysis, proposal management, and team efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              icon={<FileText className="h-10 w-10 text-primary-500" />}
              title="RFP Analysis & Readiness"
              description="Upload RFPs and get a structured breakdown of requirements, scope, and evaluation criteria — so you know exactly what's needed before you start writing."
            />
            <FeatureCard
              icon={<Database className="h-10 w-10 text-success-500" />}
              title="Knowledge Base & Reuse"
              description="Centralize your company's capabilities, past proposals, and differentiators. Reuse proven content across proposals for speed and consistency."
            />
            <FeatureCard
              icon={<Edit className="h-10 w-10 text-primary-500" />}
              title="Proposal Builder & Editor"
              description="Build and refine proposals with a structured editor. Manage sections, collaborate on responses, and keep everything organized in one place."
            />
            <FeatureCard
              icon={<Send className="h-10 w-10 text-success-500" />}
              title="Export & Submission"
              description="Export polished, client-ready proposals as PDF or DOCX. Formatted, professional, and ready to submit."
            />
          </div>
        </div>
      </div>

      {/* Knowledge Base Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-strong">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-charcoal-900 mb-8">Your Institutional Knowledge, Centralized</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <MemoryFeature
                icon={<MessageSquare className="text-primary-500" size={20} />}
                title="Consistent Company Voice"
                description="Maintain a unified tone and messaging across every proposal by storing approved language and writing samples."
              />
              <MemoryFeature
                icon={<Zap className="text-primary-500" size={20} />}
                title="Differentiators at Your Fingertips"
                description="Keep your unique selling points, competitive advantages, and key qualifications organized and ready to deploy."
              />
              <MemoryFeature
                icon={<FileText className="text-primary-500" size={20} />}
                title="Proposal History & Reference"
                description="Access past proposals to reference successful responses, track what's been submitted, and build on proven content."
              />
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-success-50 rounded-xl p-6 space-y-4">
              <h3 className="text-xl font-semibold text-charcoal-900">Your Knowledge Base</h3>
              <p className="text-charcoal-600">Build a centralized repository of your organization's proposal assets:</p>
              <ul className="space-y-3">
                <MemoryItem text="Approved writing samples and templates" />
                <MemoryItem text="Past proposals and winning responses" />
                <MemoryItem text="Key differentiators and competitive positioning" />
                <MemoryItem text="Team capabilities and certifications" />
                <MemoryItem text="Reusable response frameworks" />
              </ul>
              <p className="text-charcoal-700 font-medium">The more you use AlignRFP, the stronger your knowledge base becomes — giving your team a compounding advantage over time.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="bg-white py-20 w-full relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-600/20 to-success-600/20 rounded-2xl blur-2xl opacity-50 animate-pulse"></div>
              <h2 className="relative text-4xl md:text-5xl font-bold text-charcoal-900 mb-6">
                Simple, Transparent Pricing
              </h2>
            </div>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto mb-8">
              Plans that scale with your proposal workflow
            </p>
            
            <PricingToggle isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
          </div>
          
          <PricingCards isAnnual={isAnnual} />
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faqs" className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-charcoal-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
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
      </div>

      {/* Final CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-primary-500 to-success-500 rounded-2xl p-12 text-center text-white shadow-strong">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simplify your proposal process</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Get early access to a smarter way to manage RFPs, organize your knowledge, and deliver winning proposals.</p>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email to get started"
                className="flex-1 px-4 py-3 rounded-xl text-charcoal-900 border-none focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                disabled={submitting}
                className="px-6 py-3 bg-white text-primary-600 hover:bg-charcoal-50 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                {submitting ? 'Submitting...' : 'Get Early Access'}
                {!submitting && <ArrowRight size={20} />}
              </button>
            </form>
          ) : (
            <div className="p-4 bg-white/20 backdrop-blur-sm rounded-xl max-w-lg mx-auto">
              <p className="text-white flex items-center justify-center gap-2">
                <CheckCircle size={20} />
                Thanks! We'll be in touch soon.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-charcoal-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <img src={logo} alt="AlignRFP logo" className="h-8 w-8 mr-2" />
              <span className="text-lg font-semibold text-charcoal-900">AlignRFP</span>
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-500 hover:text-primary">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-gray-500 hover:text-primary">Terms of Service</Link>
              <Link to="/contact-us" className="text-gray-500 hover:text-primary">Contact Us</Link>
            </div>
          </div>
          <div className="mt-8 text-center text-charcoal-500 text-sm">
            &copy; {new Date().getFullYear()} AlignRFP. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [elementRef, setElementRef] = useState(null);

  useEffect(() => {
    if (!elementRef) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(elementRef);
    
    return () => {
      if (elementRef) observer.unobserve(elementRef); // Check if elementRef is not null
    };
  }, [elementRef]);

  return (
    <div 
      ref={setElementRef}
      className={`group bg-white p-10 text-center rounded-2xl shadow-soft hover:shadow-strong transition-all duration-500 border-2 border-transparent hover:border-primary-300 transform hover:scale-105 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="w-20 h-20 bg-gradient-to-br from-primary-50 to-success-50 rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-medium group-hover:shadow-strong transition-shadow duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-6 text-charcoal-900">{title}</h3>
      <p className="text-charcoal-600 text-lg leading-relaxed">{description}</p>
    </div>
  );
}

interface ProcessStepProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ProcessStep({ number, icon, title, description }: ProcessStepProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [elementRef, setElementRef] = useState(null);

  useEffect(() => {
    if (!elementRef) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(elementRef);
    
    return () => {
      if (elementRef) observer.unobserve(elementRef); // Check if elementRef is not null
    };
  }, [elementRef]);

  return (
    <div 
      ref={setElementRef}
      className={`relative group transition-all duration-700 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-16'
      }`}
      style={{ transitionDelay: `${parseInt(number) * 150}ms` }}
    >
      <div className="absolute -left-8 -top-8 w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-white flex items-center justify-center text-3xl font-bold shadow-strong animate-bounce-in animate-float transform group-hover:scale-110 transition-transform duration-300">
        {number}
      </div>
      <div className="bg-white p-12 h-full rounded-2xl shadow-soft hover:shadow-strong transition-all duration-500 border-2 border-transparent hover:border-primary-300 transform hover:scale-105">
        <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-10 animate-float shadow-medium group-hover:shadow-strong transition-shadow duration-300">
          {icon}
        </div>
        <h3 className="text-3xl font-bold mb-8 text-charcoal-900">{title}</h3>
        <p className="text-charcoal-600 leading-relaxed text-xl">{description}</p>
      </div>
    </div>
  );
}

interface StatCardProps {
  value: string;
  label: string;
  description: string;
}

function StatCard({ value, label, description }: StatCardProps) {
  return (
    <div className="text-center group">
      <div className="text-4xl md:text-6xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300">{value}</div>
      <div className="text-xl text-white/90 font-semibold">{label}</div>
      <div className="text-white/70 mt-2">{description}</div>
    </div>
  );
}

interface MemoryFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function MemoryFeature({ icon, title, description }: MemoryFeatureProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-charcoal-900 mb-2">{title}</h3>
        <p className="text-charcoal-600">{description}</p>
      </div>
    </div>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [elementRef, setElementRef] = useState(null);

  useEffect(() => {
    if (!elementRef) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(elementRef);
    
    return () => {
      if (elementRef) observer.unobserve(elementRef); // Check if elementRef is not null
    };
  }, [elementRef]);
  
  return (
    <div 
      ref={setElementRef}
      className={`border-b border-charcoal-200 pb-4 transition-all duration-500 ${
        isVisible 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 -translate-x-8'
      }`}
    >
      <button 
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-charcoal-900">{question}</h3>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </span>
      </button>
      <div 
        className={`mt-2 text-charcoal-600 overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
}

function MemoryItem({ text }: { text: string }) {
  return (
    <li className="flex items-center space-x-3">
      <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
      <span className="text-charcoal-600">{text}</span>
    </li>
  );
}

interface PricingToggleProps {
  isAnnual: boolean;
  setIsAnnual: (isAnnual: boolean) => void;
}

function PricingToggle({ isAnnual, setIsAnnual }: PricingToggleProps) {
  return (
    <div className="flex items-center justify-center">
      <div className="relative bg-charcoal-100 rounded-full p-1 flex items-center">
        <button
          onClick={() => setIsAnnual(false)}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            !isAnnual 
              ? 'bg-white text-charcoal-900 shadow-medium' 
              : 'text-charcoal-600 hover:text-charcoal-900'
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setIsAnnual(true)}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
            isAnnual 
              ? 'bg-white text-charcoal-900 shadow-medium' 
              : 'text-charcoal-600 hover:text-charcoal-900'
          }`}
        >
          Annual
          <span className="absolute -top-8 -right-3 bg-gradient-to-r from-success-500 to-success-600 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap">
            2 months free
          </span>
        </button>
      </div>
    </div>
  );
}

interface PricingCardsProps {
  isAnnual: boolean;
}

function PricingCards({ isAnnual }: PricingCardsProps) {
  const pricingData = [
    {
      title: "AlignRFP Starter",
      monthlyPrice: 99,
      description: "For independent consultants managing their proposal workflow",
      features: [
        "10 active proposals per month",
        "RFP analysis & requirement breakdown",
        "Proposal editor & export",
        "Knowledge base (up to 50 documents)",
        "Google Docs integration",
        "PDF & DOCX export"
      ],
      isPopular: false
    },
    {
      title: "AlignRFP Pro",
      monthlyPrice: 299,
      description: "For consulting firms scaling their proposal operations",
      features: [
        "50 active proposals per month",
        "Everything in Starter",
        "Priority support",
        "Advanced knowledge base (unlimited documents)",
      ],
      isPopular: true
    },
    {
      title: "AlignRFP Enterprise",
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
        "24/7 premium support"
      ],
      isPopular: false
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {pricingData.map((plan, index) => (
        <PricingCard
          key={index}
          title={plan.title}
          monthlyPrice={plan.monthlyPrice}
          description={plan.description}
          features={plan.features}
          isPopular={plan.isPopular}
          isAnnual={isAnnual}
        />
      ))}
    </div>
  );
}

interface PricingCardProps {
  title: string;
  monthlyPrice: number | null;
  description: string;
  features: string[];
  isPopular: boolean;
  isAnnual: boolean;
}

function PricingCard({ title, monthlyPrice, description, features, isPopular, isAnnual }: PricingCardProps) {
  const getPrice = () => {
    if (monthlyPrice === null) {
      return "Contact Us";
    }
    
    if (isAnnual) {
      const annualPrice = monthlyPrice * 10; // 10 months instead of 12 (2 months free)
      return `$${annualPrice}/year`;
    }
    
    return `$${monthlyPrice}/month`;
  };

  const getOriginalPrice = () => {
    if (monthlyPrice === null || !isAnnual) {
      return null;
    }
    
    const fullAnnualPrice = monthlyPrice * 12;
    return `$${fullAnnualPrice}/year`;
  };

  return (
    <div className={`relative bg-white rounded-2xl shadow-soft hover:shadow-strong transition-all duration-300 p-8 flex flex-col ${
      isPopular ? 'border-2 border-primary-500 transform scale-105' : 'border border-charcoal-200'
    }`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-primary-500 to-success-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-charcoal-900 mb-2">{title}</h3>
        <p className="text-charcoal-600 mb-4">{description}</p>
        <div className="mb-6">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-charcoal-900">{getPrice()}</span>
            {getOriginalPrice() && (
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-charcoal-500 line-through">{getOriginalPrice()}</span>
                <span className="text-xs bg-success-100 text-success-700 px-2 py-1 rounded-full">
                  2 months free
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0" />
            <span className="text-charcoal-600">{feature}</span>
          </li>
        ))}
      </ul>

      <Link to="/contact-us" className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 text-center block mt-auto ${
        isPopular
          ? 'bg-gradient-to-r from-primary-500 to-success-500 text-white hover:from-primary-600 hover:to-success-600 transform hover:scale-105'
          : 'bg-gradient-to-r from-primary-500 to-success-500 text-white hover:from-primary-600 hover:to-success-600 transform hover:scale-105'
      }`}>
        Get Started
      </Link>
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
    </Router>
  );
}

export default App;