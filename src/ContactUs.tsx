import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Clock, MessageCircle } from 'lucide-react';
import logo from '../assets/alignRFP_logo7.svg';

const ContactUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white border-b border-charcoal-200">
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

      {/* Header */}
      <section className="bg-gradient-to-br from-primary-50/60 via-white to-success-50/40 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-charcoal-900 tracking-tight">Get in Touch</h1>
          <p className="mt-4 text-lg text-charcoal-500 leading-relaxed max-w-2xl mx-auto">
            Whether you have a question about features, pricing, or anything else — our team is ready to help.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 border-t border-charcoal-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="text-xl font-semibold text-charcoal-900 mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-50 border border-primary-100 rounded flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-charcoal-900 mb-1">Email Us</h3>
                    <a
                      href="mailto:support@alignrfp.com"
                      className="text-primary-500 hover:text-primary-600 font-medium transition-colors"
                    >
                      support@alignrfp.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-success-50 border border-success-100 rounded flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-success-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-charcoal-900 mb-1">Response Time</h3>
                    <p className="text-sm text-charcoal-500">We aim to respond within 24–48 business hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-50 border border-primary-100 rounded flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={18} className="text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-charcoal-900 mb-1">Feedback Welcome</h3>
                    <p className="text-sm text-charcoal-500">Your feedback helps us improve AlignRFP</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right panel */}
            <div className="bg-charcoal-50 border border-charcoal-200 rounded-lg p-8">
              <h3 className="text-lg font-semibold text-charcoal-900 mb-2">Quick Contact</h3>
              <p className="text-sm text-charcoal-500 mb-6">
                Have a specific question? Send us an email directly and we'll get back to you as soon as possible.
              </p>

              <div className="space-y-3">
                <div className="bg-white border border-charcoal-200 rounded px-4 py-3">
                  <h4 className="text-sm font-semibold text-charcoal-900 mb-0.5">Feature Requests</h4>
                  <p className="text-xs text-charcoal-500">Tell us about features you'd like to see</p>
                </div>
                <div className="bg-white border border-charcoal-200 rounded px-4 py-3">
                  <h4 className="text-sm font-semibold text-charcoal-900 mb-0.5">Bug Reports</h4>
                  <p className="text-xs text-charcoal-500">Help us fix issues and improve the platform</p>
                </div>
                <div className="bg-white border border-charcoal-200 rounded px-4 py-3">
                  <h4 className="text-sm font-semibold text-charcoal-900 mb-0.5">General Questions</h4>
                  <p className="text-xs text-charcoal-500">Ask us anything about AlignRFP</p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-charcoal-200">
                <a
                  href="mailto:support@alignrfp.com"
                  className="w-full py-3 bg-primary-500 text-white text-sm font-medium rounded text-center flex items-center justify-center gap-2 hover:bg-primary-600 transition-colors"
                >
                  <Mail size={16} />
                  Send us an Email
                </a>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 bg-gradient-to-r from-primary-50 to-success-50 border border-charcoal-200 rounded-lg p-8 text-center">
            <h3 className="text-lg font-semibold text-charcoal-900 mb-2">
              Want to stay updated on AlignRFP's progress?
            </h3>
            <p className="text-sm text-charcoal-500 mb-5">
              Join our waitlist to be the first to know when we launch new features.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-success-600 text-white text-sm font-medium rounded hover:bg-success-700 transition-colors"
            >
              Join the Waitlist
              <ArrowLeft className="rotate-180" size={14} />
            </Link>
          </div>
        </div>
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
