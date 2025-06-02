import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Added Link for footer
import { Bot, Shield, Zap, MessageSquare, CheckCircle, ArrowRight, FileText, PieChart, Users } from 'lucide-react';
import logo from '../assets/alignRFP_logo3.svg';

// Import new page components
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';
import ContactUs from './ContactUs';

// MainLayout component to hold the original landing page content
const MainLayout: React.FC = () => {
  // ... (all the existing state, handleSubmit, useEffect, and JSX for the landing page)
  // Make sure to replace <a href="#"> with <Link to="/path"> in the footer within this component
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => { // Added type for e
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
    } catch (err: any) { // Added type for err
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navbar with Logo */}
      <nav className="bg-white shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <div className="flex items-center">
              <Link to="/" className="flex items-center text-2xl font-bold no-underline whitespace-nowrap">
                <img src={logo} alt="AlignRFP logo" className="h-8 w-8 mr-2" />
                <span className="font-inter text-black">AlignRFP</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16">
        <div className="text-center">
          
          <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-slideUp">
            Create RFP Responses That Reflect Your Voice with
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"> AlignRFP</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slideUp animate-delay-100">
            Harness the power of AI to generate winning RFP responses that perfectly align with your company's voice and values.
          </p>

          {/* Email Collection - Now with Formspree Integration */}
          <div className="max-w-md mx-auto mb-16 animate-slideUp animate-delay-200">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for early access"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  {submitting ? 'Submitting...' : 'Join Waitlist'}
                  {!submitting && <ArrowRight size={20} />}
                </button>
              </form>
            ) : (
              <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                <p className="text-green-700 flex items-center justify-center gap-2">
                  <CheckCircle size={20} />
                  Thanks! We'll notify you when we launch.
                </p>
              </div>
            )}
            {error && (
              <p className="mt-2 text-red-500 text-sm">{error}</p>
            )}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <FeatureCard
            icon={<Bot className="text-primary" size={32} />}
            title="AI-Powered Generation"
            description="Leverage advanced AI to create comprehensive RFP responses in minutes, not hours."
          />
          <FeatureCard
            icon={<MessageSquare className="text-primary" size={32} />}
            title="Voice Alignment"
            description="Maintain consistent brand voice and messaging across all your proposals."
          />
          <FeatureCard
            icon={<Shield className="text-primary" size={32} />}
            title="Enterprise Security"
            description="Bank-grade encryption and security measures to protect your sensitive data."
          />
          <FeatureCard
            icon={<Zap className="text-secondary" size={32} />}
            title="Lightning Fast"
            description="Generate responses quickly and efficiently, meeting tight deadlines with ease."
          />
          <FeatureCard
            icon={<CheckCircle className="text-secondary" size={32} />}
            title="Accuracy Guaranteed"
            description="AI-assisted quality checks ensure accurate and compliant responses."
          />
          <FeatureCard
            icon={<MessageSquare className="text-secondary" size={32} />}
            title="Easy Collaboration"
            description="Seamless team collaboration tools for review and approval workflows."
          />
        </div>

        {/* How It Works Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How AlignRFP Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ProcessStep 
              number="1"
              icon={<FileText className="text-primary" size={32} />}
              title="Upload Your RFP"
              description="Simply upload your RFP document or paste the requirements into our platform."
            />
            <ProcessStep 
              number="2"
              icon={<PieChart className="text-primary" size={32} />}
              title="AI Analysis"
              description="Our AI analyzes the requirements and generates responses aligned with your company's voice."
            />
            <ProcessStep 
              number="3"
              icon={<Users className="text-primary" size={32} />}
              title="Review & Submit"
              description="Collaborate with your team to review, refine, and submit winning responses."
            />
          </div>
        </div>

        {/* Smart Memory Section */}
        <div className="mt-24 bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Intelligent Memory That Grows With You</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <MessageSquare className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Remembers Your Company Voice</h3>
                  <p className="text-gray-600">AlignRFP learns your unique company voice and messaging patterns, ensuring every response feels authentically yours.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Zap className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Stores Your Differentiators</h3>
                  <p className="text-gray-600">The platform maintains a database of your key differentiators and unique selling points, highlighting them strategically in responses.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <FileText className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Project Memory</h3>
                  <p className="text-gray-600">AlignRFP remembers all your past projects, making it easy to reference previous successful responses and adapt them for new opportunities.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Your Response Memories</h3>
              <p className="text-gray-600">Our intelligent system creates a comprehensive memory bank specifically for your organization:</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-secondary" size={16} />
                  <span>Writing samples that reflect your voice</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-secondary" size={16} />
                  <span>Previous projects and success stories</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-secondary" size={16} />
                  <span>Differentiators; what makes you stand out</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-secondary" size={16} />
                  <span>Your unique skills and offerings</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-secondary" size={16} />
                  <span>Common response patterns and frameworks</span>
                </li>
              </ul>
              <p className="text-gray-700 font-medium">The system gets smarter with every file you process, continuously improving response quality and relevance.</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <FAQItem 
              question="What makes AlignRFP different from other RFP automation tools?"
              answer="AlignRFP is built for personalization at scale. Unlike generic AI tools, we learn your company’s tone, strengths, and past responses to create tailored answers that feel human, not templated."
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

        {/* Final CTA */}
        <div className="mt-24 bg-gradient-to-r from-primary to-secondary rounded-xl p-12 text-center text-white animate-gradient">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your RFP process?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join the waitlist today and be among the first to experience the power of AI-generated RFP responses.</p>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto animate-pulse-slow">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email for early access"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 border-none focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                disabled={submitting}
                className="px-6 py-3 bg-white text-primary hover:bg-gray-100 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                {submitting ? 'Submitting...' : 'Join Waitlist'}
                {!submitting && <ArrowRight size={20} />}
              </button>
            </form>
          ) : (
            <div className="p-4 bg-white/20 backdrop-blur-sm rounded-lg max-w-md mx-auto">
              <p className="text-white flex items-center justify-center gap-2">
                <CheckCircle size={20} />
                Thanks! We'll notify you when we launch.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer with Logo */}
      <footer className="bg-white py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              {/* Footer Logo */}
              <img src={logo} alt="AlignRFP logo" className="h-8 w-8 mr-2" />
              <span className="text-lg font-semibold text-gray-900">AlignRFP</span>
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-500 hover:text-primary">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-gray-500 hover:text-primary">Terms of Service</Link>
              <Link to="/contact-us" className="text-gray-500 hover:text-primary">Contact Us</Link>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} AlignRFP. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

// Helper components (FeatureCard, ProcessStep, FAQItem) should be defined here or imported if they are in separate files
// For brevity, assuming they are defined within App.tsx or correctly imported.
// Make sure their props are correctly typed if they are not already.

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) { // Added props type
  const [isVisible, setIsVisible] = useState(false);
  const [elementRef, setElementRef] = useState<HTMLDivElement | null>(null); // Added type for elementRef

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
      className={`bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-500 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

interface ProcessStepProps {
    number: string;
    icon: React.ReactNode;
    title: string;
    description: string;
}

function ProcessStep({ number, icon, title, description }: ProcessStepProps) { // Added props type
  const [isVisible, setIsVisible] = useState(false);
  const [elementRef, setElementRef] = useState<HTMLDivElement | null>(null); // Added type for elementRef

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
      className={`flex flex-col items-center text-center transition-all duration-700 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-16'
      }`}
      style={{ transitionDelay: `${parseInt(number) * 150}ms` }}
    >
      <div className="relative">
        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          {icon}
        </div>
        <div className={`absolute -top-2 -right-2 h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-bold transition-transform duration-500 ${isVisible ? 'scale-100' : 'scale-0'}`}>
          {number}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

interface FAQItemProps {
    question: string;
    answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) { // Added props type
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [elementRef, setElementRef] = useState<HTMLDivElement | null>(null); // Added type for elementRef

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
      className={`border-b border-gray-200 pb-4 transition-all duration-500 ${
        isVisible 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 -translate-x-8'
      }`}
    >
      <button 
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-gray-900">{question}</h3>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </span>
      </button>
      <div 
        className={`mt-2 text-gray-600 overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
}

export default App;