import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Mail, Calendar, Play, CheckCircle } from 'lucide-react';
import logo from '../assets/alignRFP_logo7.svg';

const ContactUs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'schedule' | 'message'>('schedule');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('https://formspree.io/f/xnjgjnob', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    setSubmitted(true);
  };

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

      {/* Main content — two columns */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* LEFT — heading + contact panel */}
            <div>
              {/* Heading */}
              <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-charcoal-900 tracking-tight leading-tight">
                  See AlignRFP in Action
                </h1>
                <p className="mt-3 text-charcoal-500 leading-relaxed">
                  Watch our 3-minute demo, book a call, or send us a note. AlignRFP is designed to fit your firm's unique proposal process, let's find the best way to show you how.
                </p>
              </div>

              {/* Tab switcher */}
              <div className="inline-flex items-center bg-charcoal-100 rounded p-1 mb-6">
                <button
                  onClick={() => setActiveTab('schedule')}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded transition-colors ${
                    activeTab === 'schedule'
                      ? 'bg-white text-charcoal-900 shadow-sm'
                      : 'text-charcoal-500 hover:text-charcoal-700'
                  }`}
                >
                  <Calendar size={14} />
                  Book a Call
                </button>
                <button
                  onClick={() => setActiveTab('message')}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded transition-colors ${
                    activeTab === 'message'
                      ? 'bg-white text-charcoal-900 shadow-sm'
                      : 'text-charcoal-500 hover:text-charcoal-700'
                  }`}
                >
                  <Mail size={14} />
                  Send a Message
                </button>
              </div>

              {/* Panel */}
              <div className="bg-white border border-charcoal-200 rounded-lg p-7">

                {activeTab === 'schedule' && (
                  <div>
                    <h2 className="text-lg font-semibold text-charcoal-900 mb-1">Schedule a Demo Call</h2>
                    <p className="text-sm text-charcoal-500 mb-5 leading-relaxed">
                      We'll walk through how AlignRFP fits your firm's proposal workflow. Bring an RFP or proposal you're working on for a personalized demo!
                    </p>

                    <div className="space-y-2.5 mb-6">
                      {[
                        '15 minutes on your schedule',
                        'Walkthrough tailored to your workflow',
                        'Answers on fit, pricing, and setup',
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-sm text-charcoal-600">
                          <CheckCircle size={14} className="text-success-500 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>

                    <a
                      href="https://calendly.com/ben-alignrfp/alignrfp-demo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-primary-500 text-white text-sm font-medium rounded flex items-center justify-center gap-2 hover:bg-primary-600 transition-colors"
                    >
                      <Calendar size={15} />
                      Book a Time
                    </a>
                  </div>
                )}

                {activeTab === 'message' && (
                  <div>
                    <h2 className="text-lg font-semibold text-charcoal-900 mb-1">Get in Touch</h2>
                    <p className="text-sm text-charcoal-500 mb-5 leading-relaxed">
                      Not ready to schedule? Send a note and we'll reply within 1 business day.
                    </p>

                    {submitted ? (
                      <div className="flex flex-col items-center justify-center py-12 gap-3">
                        <div className="w-12 h-12 bg-success-50 border border-success-200 rounded-full flex items-center justify-center">
                          <CheckCircle size={24} className="text-success-500" />
                        </div>
                        <h3 className="text-base font-semibold text-charcoal-900">Message sent!</h3>
                        <p className="text-sm text-charcoal-500 text-center">We'll be in touch.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-medium text-charcoal-700 mb-1.5">Name</label>
                            <input
                              type="text"
                              name="name"
                              required
                              value={form.name}
                              onChange={handleChange}
                              placeholder="Your name"
                              className="w-full px-3 py-2.5 text-sm border border-charcoal-200 rounded text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-100 transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-charcoal-700 mb-1.5">Email</label>
                            <input
                              type="email"
                              name="email"
                              required
                              value={form.email}
                              onChange={handleChange}
                              placeholder="you@yourfirm.com"
                              className="w-full px-3 py-2.5 text-sm border border-charcoal-200 rounded text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-100 transition-colors"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-charcoal-700 mb-1.5">What are you working on?</label>
                          <textarea
                            name="message"
                            rows={4}
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Tell us about your proposal process, or ask anything about AlignRFP..."
                            className="w-full px-3 py-2.5 text-sm border border-charcoal-200 rounded text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-100 transition-colors resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full py-3 bg-success-600 text-white text-sm font-medium rounded flex items-center justify-center gap-2 hover:bg-success-700 transition-colors"
                        >
                          <Mail size={15} />
                          Send Message
                        </button>

                        <p className="text-center text-xs text-charcoal-400">
                          Or email directly:{' '}
                          <a href="mailto:hello@alignrfp.com" className="text-primary-500 hover:text-primary-600 transition-colors">
                            hello@alignrfp.com
                          </a>
                        </p>
                      </form>
                    )}
                  </div>
                )}
              </div>

              {/* Try it free — understated, below the panel */}
            </div>

            {/* RIGHT — video */}
            <div className="lg:sticky lg:top-8">
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-success-700 bg-success-50 border border-success-200 px-3 py-1.5 rounded uppercase tracking-wider">
                  <Play size={10} fill="currentColor" />
                  3-min product walkthrough
                </span>
              </div>

              <div
                className="relative w-full rounded-lg overflow-hidden border border-charcoal-200 shadow-soft bg-charcoal-900"
                style={{ paddingBottom: '56.25%' }}
              >
                {videoStarted ? (
                  <iframe
                    src="https://www.loom.com/embed/4896b5365cab421c9909b4e001144072?autoplay=1&muted=0"
                    title="AlignRFP Product Demo"
                    className="absolute inset-0 w-full h-full"
                    allowFullScreen
                  />
                ) : (
                  <button
                    onClick={() => setVideoStarted(true)}
                    className="absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-3 group"
                    aria-label="Play demo video"
                  >
                    <div className="w-16 h-16 bg-white/15 border border-white/25 rounded-full flex items-center justify-center group-hover:bg-white/25 transition-colors">
                      <Play size={26} className="text-white ml-1" fill="white" />
                    </div>
                    <span className="text-white/60 text-sm group-hover:text-white/80 transition-colors">Watch the demo</span>
                  </button>
                )}
              </div>

              <p className="mt-3 text-xs text-charcoal-400 text-center">
                See the full proposal workflow — from RFP upload to final export.
              </p>

              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-charcoal-400">
                <span>Rather explore on your own?</span>
                <a
                  href="https://app.alignrfp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary-500 hover:text-primary-600 font-medium transition-colors"
                >
                  Try it free
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>

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

export default ContactUs;
