import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import logo from '../assets/alignRFP_logo3.svg';

const PrivacyPolicy: React.FC = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal-900 tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-lg text-charcoal-600">Last updated: June 2, 2025</p>
        </header>
        
        <div className="bg-white shadow-strong rounded-2xl p-8 md:p-12 prose prose-lg prose-charcoal max-w-none">
          <p className="text-charcoal-700 leading-relaxed">
            AlignRFP ("us", "we", or "our") operates the AlignRFP website and application (the "Service"). This Privacy Policy informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
          </p>
          <p className="text-charcoal-700 leading-relaxed">
            We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms of Service.
          </p>

          <h2 className="text-2xl font-bold text-charcoal-900 mt-12 mb-6 border-b border-charcoal-200 pb-2">1. Information Collection and Use</h2>
          <p className="text-charcoal-700 leading-relaxed">We collect several different types of information for various purposes to provide and improve our Service to you.</p>

          <h3 className="text-xl font-semibold text-charcoal-800 mt-8 mb-4">Types of Data Collected</h3>

          <h4 className="text-lg font-medium text-charcoal-800 mt-6 mb-3">Personal Data</h4>
          <p className="text-charcoal-700 leading-relaxed">While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>
          <ul className="list-disc list-inside space-y-2 text-charcoal-700 ml-4">
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Usage Data</li>
            <li>Cookies Data</li>
          </ul>

          <h4 className="text-lg font-medium text-charcoal-800 mt-6 mb-3">Usage Data</h4>
          <p className="text-charcoal-700 leading-relaxed">We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>

          <h4 className="text-lg font-medium text-charcoal-800 mt-6 mb-3">Tracking & Cookies Data</h4>
          <p className="text-charcoal-700 leading-relaxed">We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>

          <h2 className="text-2xl font-bold text-charcoal-900 mt-12 mb-6 border-b border-charcoal-200 pb-2">2. Use of Data</h2>
          <p className="text-charcoal-700 leading-relaxed">AlignRFP uses the collected data for various purposes:</p>
          <ul className="list-disc list-inside space-y-2 text-charcoal-700 ml-4">
            <li>To provide and maintain the Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
            <li>To provide customer care and support</li>
            <li>To provide analysis or valuable information so that we can improve the Service</li>
            <li>To monitor the usage of the Service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>

          <h2 className="text-2xl font-bold text-charcoal-900 mt-12 mb-6 border-b border-charcoal-200 pb-2">3. Data Transfer</h2>
          <p className="text-charcoal-700 leading-relaxed">Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those from your jurisdiction.</p>
          <p className="text-charcoal-700 leading-relaxed">If you are located outside United States and choose to provide information to us, please note that we transfer the data, including Personal Data, to United States and process it there.</p>
          <p className="text-charcoal-700 leading-relaxed">Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
          <p className="text-charcoal-700 leading-relaxed">AlignRFP will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</p>

          <h2 className="text-2xl font-bold text-charcoal-900 mt-12 mb-6 border-b border-charcoal-200 pb-2">4. Disclosure of Data</h2>
          <h3 className="text-xl font-semibold text-charcoal-800 mt-8 mb-4">Legal Requirements</h3>
          <p className="text-charcoal-700 leading-relaxed">AlignRFP may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
          <ul className="list-disc list-inside space-y-2 text-charcoal-700 ml-4">
            <li>To comply with a legal obligation</li>
            <li>To protect and defend the rights or property of AlignRFP</li>
            <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
            <li>To protect the personal safety of users of the Service or the public</li>
            <li>To protect against legal liability</li>
          </ul>

          <h2 className="text-2xl font-bold text-charcoal-900 mt-12 mb-6 border-b border-charcoal-200 pb-2">5. Security of Data</h2>
          <p className="text-charcoal-700 leading-relaxed">The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>

          <h2 className="text-2xl font-bold text-charcoal-900 mt-12 mb-6 border-b border-charcoal-200 pb-2">6. Service Providers</h2>
          <p className="text-charcoal-700 leading-relaxed">We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>

          <h2 className="text-2xl font-bold text-charcoal-900 mt-12 mb-6 border-b border-charcoal-200 pb-2">7. Links to Other Sites</h2>
          <p className="text-charcoal-700 leading-relaxed">Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
          <p className="text-charcoal-700 leading-relaxed">We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>

          <h2 className="text-2xl font-bold text-charcoal-900 mt-12 mb-6 border-b border-charcoal-200 pb-2">8. Children's Privacy</h2>
          <p className="text-charcoal-700 leading-relaxed">Our Service does not address anyone under the age of 18 ("Children"). We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>

          <h2 className="text-2xl font-bold text-charcoal-900 mt-12 mb-6 border-b border-charcoal-200 pb-2">9. Changes to This Privacy Policy</h2>
          <p className="text-charcoal-700 leading-relaxed">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "last updated" date at the top of this Privacy Policy.</p>
          <p className="text-charcoal-700 leading-relaxed">You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

          <h2 className="text-2xl font-bold text-charcoal-900 mt-12 mb-6 border-b border-charcoal-200 pb-2">10. Contact Us</h2>
          <p className="text-charcoal-700 leading-relaxed">If you have any questions about this Privacy Policy, please contact us:</p>
          <ul className="list-disc list-inside space-y-2 text-charcoal-700 ml-4">
            <li>By email: <a href="mailto:support@alignrfp.com" className="text-primary-600 hover:text-primary-700 underline transition-colors duration-200">support@alignrfp.com</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;