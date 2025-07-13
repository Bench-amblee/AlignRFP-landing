import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, MessageCircle, Clock } from 'lucide-react';
import logo from '../assets/alignRFP_logo3.svg';

const ContactUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navbar */}
      <nav className="bg-white shadow-soft py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center text-2xl font-bold no-underline whitespace-nowrap">
              <img src={logo} alt="AlignRFP logo" className="h-8 w-8 mr-2" />
              <span className="font-sans text-charcoal-900">AlignRFP</span>
            </Link>
            <Link 
              to="/" 
              className="flex items-center gap-2 text-charcoal-600 hover:text-primary-500 transition-colors duration-200"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal-900 tracking-tight mb-4">Get in Touch</h1>
          <p className="text-lg md:text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you! Whether you have a question about features, trials, pricing, or anything else, our team is ready to answer all your questions.
          </p>
        </header>
        
        <div className="bg-white shadow-strong rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-charcoal-900 mb-6">Contact Information</h2>
                <p className="text-charcoal-600 leading-relaxed mb-8">
                  For support, sales inquiries, or general questions, please reach out to us via email.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal-900 mb-1">Email Us</h3>
                    <a 
                      href="mailto:support@alignrfp.com" 
                      className="text-primary-600 hover:text-primary-700 font-medium text-lg transition-colors duration-200"
                    >
                      support@alignrfp.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-success-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-success-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal-900 mb-1">Response Time</h3>
                    <p className="text-charcoal-600">We aim to respond within 24-48 business hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal-900 mb-1">Feedback Welcome</h3>
                    <p className="text-charcoal-600">Your feedback helps us improve AlignRFP</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Placeholder */}
            <div className="bg-gradient-to-br from-primary-50 to-success-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-charcoal-900 mb-4">Quick Contact</h3>
              <p className="text-charcoal-600 mb-6">
                Have a specific question? Send us an email directly and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-charcoal-200">
                  <h4 className="font-semibold text-charcoal-900 mb-2">💡 Feature Requests</h4>
                  <p className="text-sm text-charcoal-600">Tell us about features you'd like to see</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-charcoal-200">
                  <h4 className="font-semibold text-charcoal-900 mb-2">🐛 Bug Reports</h4>
                  <p className="text-sm text-charcoal-600">Help us fix issues and improve the platform</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-charcoal-200">
                  <h4 className="font-semibold text-charcoal-900 mb-2">💬 General Questions</h4>
                  <p className="text-sm text-charcoal-600">Ask us anything about AlignRFP</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-charcoal-200">
                <a 
                  href="mailto:support@alignrfp.com"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <Mail size={20} />
                  Send us an Email
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-charcoal-200 text-center">
            <div className="bg-gradient-to-r from-primary-50 to-success-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-charcoal-900 mb-2">
                Want to stay updated on AlignRFP's progress?
              </h3>
              <p className="text-charcoal-600 mb-4">
                Join our waitlist to be the first to know when we launch new features.
              </p>
              <Link 
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold transition-colors duration-200"
              >
                Join the Waitlist
                <ArrowLeft className="rotate-180" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;