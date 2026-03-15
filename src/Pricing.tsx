import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import logo from '../assets/alignRFP_logo7.svg';

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

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const payg = {
    features: [
      "Credits never expire",
      "Knowledge base up to 20 documents",
      "AI RFP analysis & requirement breakdown",
      "Proposal editor with AI-assisted responses",
      "Export to PDF & DOCX",
      "Secure document storage",
      "Google Drive Integration"
    ],
  };

  const subscriptionPlans: {
    title: string;
    monthlyPrice: number | null;
    description: string;
    features: string[];
    isPopular: boolean;
    highlight?: string;
  }[] = [
    {
      title: "Starter",
      monthlyPrice: 99,
      description: "For individuals and small teams with a steady workflow",
      features: [
        "10 proposals/month",
        "Up to 500 responses/month",
        "1 seat",
        "Knowledge base up to 50 documents",
        "AI RFP analysis & requirement breakdown",
        "Proposal editor with AI-artifact detection",
        "Reusable knowledge base answers",
        "Export to PDF & DOCX",
        "Google Drive integration",
      ],
      isPopular: false,
    },
    {
      title: "Pro",
      monthlyPrice: 299,
      description: "For growing teams that collaborate on proposals",
      features: [
        "25 proposals/month",
        "Up to 2,500 responses/month",
        "Up to 5 seats",
        "Knowledge base up to 300 documents",
        "Everything in Starter, plus:",
        "Team collaboration tools",
        "Custom response templates",
        "Shared response library",
        "Priority processing",
        "Advanced document organization",
      ],
      isPopular: true,
    },
    {
      title: "Enterprise",
      monthlyPrice: null,
      description: "Custom compliance and integration needs",
      features: [
        "50+ proposals/month",
        "Unlimited seats",
        "Unlimited knowledge base",
        "Everything in Pro, plus:",
        "SSO / enterprise authentication",
        "API access",
        "Advanced collaboration workflows",
        "Security & compliance controls",
        "Dedicated onboarding & support",
        "Custom integrations",
      ],
      isPopular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white border-b border-charcoal-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center no-underline whitespace-nowrap">
              <img src={logo} alt="AlignRFP" className="h-8 w-8 mr-2" />
              <span className="text-2xl font-bold text-charcoal-900">AlignRFP</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-sm text-charcoal-600 hover:text-charcoal-900 font-medium transition-colors">
                Home
              </Link>
              <Link to="/contact-us" className="text-sm text-charcoal-600 hover:text-charcoal-900 font-medium transition-colors">
                Contact Us
              </Link>
              <a
                href="https://app.alignrfp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-primary-500 text-white text-sm font-medium rounded hover:bg-primary-600 transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-b from-white to-primary-50/30 pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-charcoal-900">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-4 text-lg text-charcoal-500 max-w-2xl mx-auto">
              Subscribe for the best value, or buy credits as you go. No hidden fees.
            </p>
            <p className="mt-3 text-base text-charcoal-900 font-semibold">
              <span className="relative inline-block">
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
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
                  />
                </svg>
                <span className="relative z-10">Your first proposal is always free</span>
              </span>
              {' '}— no credit card required.
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-charcoal-600 max-w-xl mx-auto">
              How much time does your team spend on a single RFP response? If it's more than a day, AlignRFP pays for itself on the first proposal.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section className="bg-white pt-10 pb-4">
        <div className="text-center">
          <PricingToggle isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
          <p className="mt-4 text-xs text-charcoal-400">Annual toggle applies to subscription plans</p>
        </div>
      </section>

      {/* All Plans — 4 columns */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* PAYG Card */}
            <div className="relative bg-charcoal-50 rounded-lg p-8 flex flex-col border border-charcoal-200">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-charcoal-600 text-white px-3 py-0.5 text-[10px] font-semibold rounded whitespace-nowrap">
                  No Commitment
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-charcoal-900 mb-1">Pay-As-You-Go</h3>
                <p className="text-sm text-charcoal-500">Buy credits, use them anytime</p>
              </div>

              <div className="mb-6">
                <div className="text-3xl font-bold text-charcoal-900">$39</div>
                <div className="text-sm text-charcoal-500 mt-1">per proposal credit</div>
              </div>

              {/* Volume discounts */}
              <div className="mb-6 space-y-2">
                <div className="flex justify-between items-center text-sm px-3 py-2 bg-white rounded border border-charcoal-200">
                  <span className="text-charcoal-600">5 credits</span>
                  <span className="font-semibold text-charcoal-900">$179</span>
                </div>
                <div className="flex justify-between items-center text-sm px-3 py-2 bg-white rounded border border-success-200">
                  <span className="text-charcoal-600">10 credits</span>
                  <span className="font-semibold text-charcoal-900">$249</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {payg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-charcoal-600">
                    <CheckCircle size={16} className="text-success-500 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="https://app.alignrfp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-sm font-medium rounded text-center block transition-colors bg-primary-500 text-white hover:bg-primary-600"
              >
                Buy Credits
              </a>
            </div>

            {/* Subscription Cards */}
            {subscriptionPlans.map((plan, i) => {
              const price = plan.monthlyPrice === null
                ? "Custom"
                : isAnnual
                  ? `$${plan.monthlyPrice * 10}/yr`
                  : `$${plan.monthlyPrice}/mo`;

              const originalPrice = plan.monthlyPrice && isAnnual ? `$${plan.monthlyPrice * 12}/yr` : null;

              return (
                <div key={i} className={`relative bg-white rounded-lg p-8 flex flex-col ${
                  plan.isPopular ? 'border-2 border-primary-500 shadow-soft' : 'border border-charcoal-200'
                }`}>
                  {plan.isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-primary-500 text-white px-4 py-1 text-xs font-semibold rounded">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-charcoal-900 mb-1">{plan.title}</h3>
                    <p className="text-sm text-charcoal-500">{plan.description}</p>
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

                  {plan.highlight && (
                    <div className="mb-5 px-3 py-2 bg-primary-50 border border-primary-100 rounded text-xs text-primary-600 font-medium">
                      {plan.highlight}
                    </div>
                  )}

                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-charcoal-600">
                        <CheckCircle size={16} className="text-success-500 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {plan.monthlyPrice === null ? (
                    <Link
                      to="/contact-us"
                      className="w-full py-3 text-sm font-medium rounded text-center block transition-colors bg-primary-500 text-white hover:bg-primary-600"
                    >
                      Contact Us
                    </Link>
                  ) : (
                    <a
                      href="https://app.alignrfp.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 text-sm font-medium rounded text-center block transition-colors bg-primary-500 text-white hover:bg-primary-600"
                    >
                      Start Your Free Trial
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Free Tier */}
      <section className="bg-white pb-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-success-50 to-primary-50 border border-success-200 rounded-lg px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h3 className="text-base font-semibold text-charcoal-900">Your first proposal is on us</h3>
              <p className="text-sm text-charcoal-500 mt-1">
                Try the full workflow — no credit card required. Limited to 1 document per proposal.
              </p>
            </div>
            <a
              href="https://app.alignrfp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-5 py-2.5 bg-success-600 text-white text-sm font-medium rounded hover:bg-success-700 transition-colors"
            >
              Start Free
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-charcoal-50 to-primary-50/30 py-10 border-t border-charcoal-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <img src={logo} alt="AlignRFP" className="h-6 w-6 mr-2" />
            <span className="text-sm font-semibold text-charcoal-900">AlignRFP</span>
          </div>
          <div className="flex justify-center space-x-6">
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
          <div className="mt-6 text-charcoal-400 text-xs">
            &copy; {new Date().getFullYear()} AlignRFP. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
