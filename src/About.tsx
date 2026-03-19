import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Linkedin } from 'lucide-react';
import logo from '../assets/alignRFP_logo7.svg';
import headshot from '../assets/bench_headshot.png';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* Navbar */}
      <nav className="bg-white border-b border-charcoal-200 flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center no-underline whitespace-nowrap">
              <img src={logo} alt="AlignRFP" className="h-8 w-8 mr-2" />
              <span className="text-2xl font-bold text-charcoal-900">AlignRFP</span>
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 text-sm text-charcoal-500 hover:text-charcoal-900 font-medium transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-50/80 via-white to-success-50/60 py-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(180deg, transparent, transparent 31px, rgba(96,165,250,0.12) 31px, rgba(96,165,250,0.12) 32px)',
            backgroundPosition: '0 10px',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 70% at 50% 45%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.3) 55%, transparent 80%)',
          }}
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <img src={logo} alt="AlignRFP" className="h-16 w-16 mx-auto mb-6 opacity-80" />
          <h1 className="text-3xl sm:text-4xl font-bold text-charcoal-900 tracking-tight">
            About AlignRFP
          </h1>
          <p className="mt-4 text-lg text-charcoal-500 max-w-xl mx-auto">
            Built for proposal teams. Designed by professionals who know the struggle of RFPs firsthand. AlignRFP was made to help you spend less time on proposals and more time on what matters: winning work and making an impact.
          </p>
        </div>
      </section>

      {/* Story */}
      <main className="flex-grow">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">

          <h2 className="text-xl font-semibold text-charcoal-900 mb-6">Our Story</h2>
          <div className="space-y-5 text-sm text-charcoal-600 leading-relaxed">
            <p>
              AlignRFP was founded in New York City by Ben Chamblee, an NYC-based cloud architect and consultant with over five years of experience in the consulting industry. After spending countless hours responding to RFPs, Ben saw firsthand how painful the process was. Digging through old proposals, rewriting the same answers, and scrambling to meet deadlines were just a few of the challenges that proposal teams faced every day. 
            </p>
            <p>
              AI tools helped, but the results were inconsistent. Generic outputs didn't capture a team's real experience or voice, and the back-and-forth to get usable content often took as long as writing from scratch. Ben started building AlignRFP to solve that problem: a tool that pulls from your own past work and knowledge base so every response sounds like your team, not a chatbot.
            </p>
            <p>
              Today, AlignRFP helps consultants, nonprofits, and growing teams streamline their proposal process, from RFP analysis to final export. Ben continues to work as a cloud architect while building AlignRFP, which keeps the product grounded in the real workflows and challenges that proposal teams face every day.
            </p>
          </div>

          {/* Who's Behind AlignRFP */}
          <div className="mt-16 pt-12 border-t border-charcoal-200">
            <h2 className="text-xl font-semibold text-charcoal-900 mb-8 text-center">Who's Behind AlignRFP</h2>
            <div className="bg-charcoal-50 border border-charcoal-200 rounded-lg p-8 flex flex-col items-center">
              <img
                src={headshot}
                alt="Ben Chamblee"
                className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-soft mb-4"
              />
              <h3 className="text-base font-semibold text-charcoal-900">Ben Chamblee</h3>
              <p className="text-sm text-charcoal-500 mb-4">Founder & Lead Developer</p>
              <a
                href="https://www.linkedin.com/in/benchamblee/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-primary-500 hover:text-primary-600 font-medium transition-colors"
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
            </div>
            <p className="mt-6 text-sm text-charcoal-500 leading-relaxed text-center max-w-lg mx-auto">
              AlignRFP is built and run by Ben, with ongoing support from a network of consultants, proposal managers, and industry colleagues who contribute feedback, testing, and domain expertise.
            </p>
          </div>

          {/* Company LinkedIn */}
          <div className="mt-10 pt-8 border-t border-charcoal-200 text-center">
            <p className="text-sm text-charcoal-500 mb-2">Follow AlignRFP for updates</p>
            <a
              href="https://www.linkedin.com/company/alignrfp/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-primary-500 hover:text-primary-600 font-medium transition-colors"
            >
              <Linkedin size={14} />
              AlignRFP on LinkedIn
            </a>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-10 border-t border-charcoal-200 flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img src={logo} alt="AlignRFP" className="h-6 w-6 mr-2" />
              <span className="text-sm font-semibold text-charcoal-900">AlignRFP</span>
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-sm text-charcoal-400 hover:text-charcoal-600 transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-sm text-charcoal-400 hover:text-charcoal-600 transition-colors">Terms of Service</Link>
              <Link to="/contact-us" className="text-sm text-charcoal-400 hover:text-charcoal-600 transition-colors">Contact Us</Link>
            </div>
          </div>
          <div className="mt-6 text-center text-charcoal-400 text-xs">
            &copy; {new Date().getFullYear()} AlignRFP. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
};

export default About;
