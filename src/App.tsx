import React, { useState } from 'react';
import { Bot, Shield, Zap, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Transform Your RFP Responses with
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"> AlignRFP</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Harness the power of AI to generate winning RFP responses that perfectly align with your company's voice and values.
          </p>

          {/* Email Collection */}
          <div className="max-w-md mx-auto mb-16">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email for early access"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2"
              >
                Join Waitlist
                <ArrowRight size={20} />
              </button>
            </form>
            {submitted && (
              <p className="mt-2 text-secondary flex items-center justify-center gap-2">
                <CheckCircle size={20} />
                Thanks! We'll notify you when we launch.
              </p>
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
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;