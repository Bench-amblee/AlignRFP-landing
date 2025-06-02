import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Get in Touch</h1>
        <p className="mt-2 text-lg text-gray-600">We'd love to hear from you! Whether you have a question about features, trials, pricing, or anything else, our team is ready to answer all your questions.</p>
      </header>
      <div className="bg-white shadow-xl rounded-lg p-8 prose prose-lg text-gray-700">
        <h2 className="text-2xl font-semibold text-gray-800 mt-0 mb-6 text-center">Contact Information</h2>
        <p className="text-center">
          For support, sales inquiries, or general questions, please reach out to us via email.
        </p>
        <div className="mt-6 text-center">
          <p className="text-xl">
            <strong>Email:</strong>{' '}
            <a href="mailto:support@alignrfp.com" className="text-primary hover:underline font-medium">
              support@alignrfp.com
            </a>
          </p>
        </div>
        <p className="mt-8 text-center text-gray-600">
          We aim to respond to all inquiries within 24-48 business hours.
        </p>
        <p className="mt-4 text-center text-gray-600">
          Your feedback is important to us and helps us improve AlignRFP.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
