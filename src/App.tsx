import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Bot, Shield, Zap, MessageSquare, CheckCircle, ArrowRight, FileText, PieChart, Users, Brain, Clock, Edit } from 'lucide-react';
import logo from '../assets/alignRFP_logo7.svg';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';
import ContactUs from './ContactUs';


function MainLayout() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [scrollY, setScrollY] = useState(0);

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
          <div className="flex items-center">
            <div className="flex items-center">
              <a href="/" className="flex items-center text-2xl font-bold no-underline whitespace-nowrap">
                <img src={logo} alt="AlignRFP logo" className="h-8 w-8 mr-2" />
                <span className="font-inter text-black">AlignRFP</span>
              </a>
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
                  Transform Your RFP Process with
                  <span className="bg-gradient-to-r from-success-600 to-success-800 bg-clip-text text-transparent"> AI-Powered </span>
                  Proposals
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-charcoal-600 mb-16 leading-relaxed max-w-4xl mx-auto animate-slide-up">
                Create winning proposals in minutes, not hours. Our AI-powered platform analyzes RFPs, generates tailored responses, and helps you create consistent, client-ready proposals.
              </p>

              {/* Email Collection */}
              <div className="max-w-md mx-auto mb-16 animate-slide-up">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email for early access"
                      className="flex-1 px-4 py-3 rounded-xl border border-charcoal-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-charcoal-900"
                      required
                    />
                    <button
                      type="submit"
                      disabled={submitting}
                      className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-medium hover:shadow-strong transform hover:scale-105"
                    >
                      {submitting ? 'Submitting...' : 'Join Waitlist'}
                      {!submitting && <ArrowRight size={20} />}
                    </button>
                  </form>
                ) : (
                  <div className="p-4 bg-success-50 rounded-xl border border-success-200 shadow-soft">
                    <p className="text-success-700 flex items-center justify-center gap-2">
                      <CheckCircle size={20} />
                      Thanks! We'll notify you when we launch.
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
      <div className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 w-full relative overflow-hidden">
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
              Three simple steps to transform your RFP process and win more contracts
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
            <ProcessStep 
              number=""
              icon={<FileText className="h-12 w-12 text-white" />}
              title="Upload Your RFP"
              description="Simply upload your RFP document in any common format. Our AI will analyze the requirements, structure, and key components with lightning speed."
            />
            <ProcessStep 
              number=""
              icon={<Brain className="h-12 w-12 text-white" />}
              title="Add Company Details"
              description="Provide your company details and watch our smart AI match your tone, highlight your experience, and showcase your unique strengths."
            />
            <ProcessStep 
              number=""
              icon={<CheckCircle className="h-12 w-12 text-white" />}
              title="Edit & Export"
              description="Fine-tune your response with our intuitive editor, make it perfect, and export as a professional PDF ready to win that contract."
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
              Built for Fast-Moving Teams
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
              Respond to RFPs faster and spend less time copy and pasting old content. Our AI-powered platform helps you create winning proposals in minutes.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <StatCard value="80%" label="Time Saved" description="Average reduction in proposal creation time" />
            <StatCard value="8+" label="Hours" description="Time saved for each proposal" />
            <StatCard value="1-Click" label="Access" description="Manage your past projects, differentiators, and skills" />
            <StatCard value="100%" label="Private" description="Your data is encrypted, never shared, and always under your control" />
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
                Why Choose AlignRFP?
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-charcoal-600 max-w-4xl mx-auto leading-relaxed">
              Save time, improve quality, and win more contracts with our AI-powered RFP response platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Clock className="h-10 w-10 text-primary-500" />}
              title="Save 80% of Your Time"
              description="Turn weeks of manual work into hours. Our AI analyzes RFPs and generates tailored responses in minutes."
            />
            <FeatureCard
              icon={<Brain className="h-10 w-10 text-success-500" />}
              title="Smart AI Personalization"
              description="Our AI learns your company's voice, experience, and strengths to create responses that sound authentically yours."
            />
            <FeatureCard
              icon={<CheckCircle className="h-10 w-10 text-primary-500" />}
              title="Professional Results"
              description="Generate polished, client-ready proposals that highlight your expertise and increase your win rate."
            />
            <FeatureCard
              icon={<FileText className="h-10 w-10 text-success-500" />}
              title="Multiple Formats"
              description="Support for PDF, Word, and text files. Export your responses as professional PDFs ready for submission."
            />
            <FeatureCard
              icon={<Brain className="h-10 w-10 text-primary-500" />}
              title="Memory System"
              description="Build a knowledge base of your company's capabilities, past projects, and expertise for consistent responses."
            />
            <FeatureCard
              icon={<Edit className="h-10 w-10 text-success-500" />}
              title="Full Control"
              description="Edit, customize, and perfect every response with our intuitive editor before sending to clients."
            />
          </div>
        </div>
      </div>

      {/* Smart Memory Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-strong">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-charcoal-900 mb-8">Intelligent Memory That Grows With You</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <MemoryFeature
                icon={<MessageSquare className="text-primary-500" size={20} />}
                title="Remembers Your Company Voice"
                description="AlignRFP learns your unique company voice and messaging patterns, ensuring every response feels authentically yours."
              />
              <MemoryFeature
                icon={<Zap className="text-primary-500" size={20} />}
                title="Stores Your Differentiators"
                description="The platform maintains a database of your key differentiators and unique selling points, highlighting them strategically in responses."
              />
              <MemoryFeature
                icon={<FileText className="text-primary-500" size={20} />}
                title="Project Memory"
                description="AlignRFP remembers all your past projects, making it easy to reference previous successful responses and adapt them for new opportunities."
              />
            </div>
            
            <div className="bg-gradient-to-br from-primary-50 to-success-50 rounded-xl p-6 space-y-4">
              <h3 className="text-xl font-semibold text-charcoal-900">Your Response Memories</h3>
              <p className="text-charcoal-600">Our intelligent system creates a comprehensive memory bank specifically for your organization:</p>
              <ul className="space-y-3">
                <MemoryItem text="Writing samples that reflect your voice" />
                <MemoryItem text="Previous projects and success stories" />
                <MemoryItem text="Differentiators; what makes you stand out" />
                <MemoryItem text="Your unique skills and offerings" />
                <MemoryItem text="Common response patterns and frameworks" />
              </ul>
              <p className="text-charcoal-700 font-medium">The system gets smarter with every file you process, continuously improving response quality and relevance.</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-charcoal-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <FAQItem 
              question="What makes AlignRFP different from other RFP automation tools?"
              answer="AlignRFP is built for personalization at scale. Unlike generic AI tools, we learn your company's tone, strengths, and past responses to create tailored answers that feel human, not templated."
            />
            <FAQItem 
              question="How does AlignRFP ensure accuracy in responses?"
              answer="AlignRFP combines advanced AI with your company's historical data to ensure responses are accurate and aligned with your voice. Our quality checks verify technical accuracy and compliance with RFP requirements."
            />
            <FAQItem 
              question="Is my company data secure on the platform?"
              answer="Absolutely. We implement bank-grade encryption and security protocols. Your data is never shared, and you maintain complete ownership of all content generated on our platform."
            />
            <FAQItem 
              question="How much time can AlignRFP save my team?"
              answer="Most companies report saving 50-70% of the time typically spent on RFP responses. Teams that previously spent 40+ hours on complex RFPs now complete them in 10-15 hours."
            />
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-primary-500 to-success-500 rounded-2xl p-12 text-center text-white shadow-strong">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your RFP process?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join the waitlist today and be among the first to experience the power of AI-generated RFP responses.</p>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email for early access"
                className="flex-1 px-4 py-3 rounded-xl text-charcoal-900 border-none focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                disabled={submitting}
                className="px-6 py-3 bg-white text-primary-600 hover:bg-charcoal-50 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                {submitting ? 'Submitting...' : 'Join Waitlist'}
                {!submitting && <ArrowRight size={20} />}
              </button>
            </form>
          ) : (
            <div className="p-4 bg-white/20 backdrop-blur-sm rounded-xl max-w-md mx-auto">
              <p className="text-white flex items-center justify-center gap-2">
                <CheckCircle size={20} />
                Thanks! We'll notify you when we launch.
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
              <a href="#" className="text-gray-500 hover:text-primary">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-primary">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-primary">Contact Us</a>
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

function App() {
  return (
    <Router>
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