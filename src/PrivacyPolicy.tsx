import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import logo from '../assets/alignRFP_logo7.svg';

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
          <p className="text-lg text-charcoal-600">Last updated: February 15, 2026</p>
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

          <h2 className="text-2xl font-bold text-charcoal-900 mt-12 mb-6 border-b border-charcoal-200 pb-2">5A. Google User Data</h2>
          <p className="text-charcoal-700 leading-relaxed">
            AlignRFP's use and transfer to any other app of information received from Google APIs will adhere to <a href="https://developers.google.com/terms/api-services-user-data-policy" className="text-primary-600 hover:text-primary-700 underline transition-colors duration-200" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>, including the Limited Use requirements.
          </p>

          <h3 className="text-xl font-semibold text-charcoal-800 mt-8 mb-4">Google Drive and Google Docs Integration</h3>
          <p className="text-charcoal-700 leading-relaxed">
            When you choose to export responses to Google Docs, AlignRFP requests access to your Google Drive with the following scope:
          </p>
          <ul className="list-disc list-inside space-y-2 text-charcoal-700 ml-4">
            <li><strong>https://www.googleapis.com/auth/drive.file</strong> - This allows AlignRFP to create new Google Docs in your Google Drive and access only files created by AlignRFP.</li>
          </ul>

          <h3 className="text-xl font-semibold text-charcoal-800 mt-8 mb-4">How We Use Google User Data</h3>
          <p className="text-charcoal-700 leading-relaxed">
            We use your Google credentials solely to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-charcoal-700 ml-4">
            <li>Create Google Docs documents in your Google Drive when you explicitly request to export a response</li>
            <li>Format the exported document with your RFP response content</li>
          </ul>
          <p className="text-charcoal-700 leading-relaxed">
            We do not:
          </p>
          <ul className="list-disc list-inside space-y-2 text-charcoal-700 ml-4">
            <li>Access, read, or modify any existing files in your Google Drive that were not created by AlignRFP</li>
            <li>Store the content of your Google Drive files on our servers</li>
            <li>Share your Google user data with third parties</li>
            <li>Use your Google user data for advertising or marketing purposes</li>
          </ul>

          <h2 className="text-2xl font-bold text-charcoal-900 mt-12 mb-6 border-b border-charcoal-200 pb-2">6. Data Retention</h2>
          <p className="text-charcoal-700 leading-relaxed">
            AlignRFP retains your personal data only for as long as necessary to provide you with our Service and for legitimate and essential business purposes, such as maintaining the performance of the Service, making data-driven business decisions, complying with our legal obligations, and resolving disputes.
          </p>

          <h3 className="text-xl font-semibold text-charcoal-800 mt-8 mb-4">Retention Periods</h3>
          <ul className="list-disc list-inside space-y-2 text-charcoal-700 ml-4">
            <li><strong>Account Data:</strong> We retain your account information (email, name, profile data) for as long as your account is active or as needed to provide you services.</li>
            <li><strong>RFP Responses:</strong> Active responses are retained while your account is active. Archived and completed proposals remain in a view-only state subject to the storage limits of your plan (e.g., 500 archived proposals for Starter, 5,000 for Pro). Responses are permanently deleted when you remove them or close your account.</li>
            <li><strong>Google OAuth Credentials:</strong> Your Google access tokens and refresh tokens are stored securely in our database and are retained only while you maintain an active connection to Google. These credentials are deleted when you disconnect Google integration or close your account.</li>
            <li><strong>Usage Data:</strong> We retain usage and analytics data for up to 24 months for the purpose of improving our Service.</li>
          </ul>

          <h2 className="text-2xl font-bold text-charcoal-900 mt-12 mb-6 border-b border-charcoal-200 pb-2">7. Your Data Rights and Deletion</h2>
          <p className="text-charcoal-700 leading-relaxed">
            You have the right to access, update, or delete your personal information at any time.
          </p>

          <h3 className="text-xl font-semibold text-charcoal-800 mt-8 mb-4">How to Delete Your Data</h3>
          <p className="text-charcoal-700 leading-relaxed">
            You can delete your data in the following ways:
          </p>
          <ul className="list-disc list-inside space-y-2 text-charcoal-700 ml-4">
            <li><strong>Individual Responses:</strong> Delete any RFP response from your dashboard at any time.</li>
            <li><strong>Google Integration:</strong> Disconnect Google integration from your account settings, which will immediately delete your stored Google credentials from our servers.</li>
            <li><strong>Account Deletion:</strong> You may request complete account deletion by contacting us at <a href="mailto:support@alignrfp.com" className="text-primary-600 hover:text-primary-700 underline transition-colors duration-200">support@alignrfp.com</a>. Upon account deletion, we will permanently delete all of your personal data, including:
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>Your account information (email, name, profile)</li>
                <li>All RFP responses and content you created</li>
                <li>Your knowledge base and personalization data</li>
                <li>Google OAuth credentials and tokens</li>
              </ul>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-charcoal-800 mt-8 mb-4">Deletion Timeline</h3>
          <p className="text-charcoal-700 leading-relaxed">
            Upon receiving a deletion request:
          </p>
          <ul className="list-disc list-inside space-y-2 text-charcoal-700 ml-4">
            <li>Your account and associated data will be deleted within 30 days of your request</li>
            <li>Google OAuth credentials are deleted immediately upon disconnection</li>
            <li>Backup copies in our disaster recovery systems are purged within 90 days</li>
          </ul>

          <p className="text-charcoal-700 leading-relaxed mt-4">
            Please note that we may retain certain information as required by law or for legitimate business purposes, such as to prevent fraud, resolve disputes, troubleshoot problems, or enforce our Terms of Service.
          </p>

          <h3 className="text-xl font-semibold text-charcoal-800 mt-8 mb-4">Revoking Google Access</h3>
          <p className="text-charcoal-700 leading-relaxed">
            You can revoke AlignRFP's access to your Google account at any time by visiting your <a href="https://myaccount.google.com/permissions" className="text-primary-600 hover:text-primary-700 underline transition-colors duration-200" target="_blank" rel="noopener noreferrer">Google Account Permissions page</a>. This will immediately prevent AlignRFP from accessing your Google Drive, though you may need to also disconnect the integration within AlignRFP to delete the stored credentials from our database.
          </p>

          <h2 className="text-2xl font-bold text-charcoal-900 mt-12 mb-6 border-b border-charcoal-200 pb-2">8. Service Providers</h2>
          <p className="text-charcoal-700 leading-relaxed">We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>

          <h2 className="text-2xl font-bold text-charcoal-900 mt-12 mb-6 border-b border-charcoal-200 pb-2">9. Links to Other Sites</h2>
          <p className="text-charcoal-700 leading-relaxed">Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
          <p className="text-charcoal-700 leading-relaxed">We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>

          <h2 className="text-2xl font-bold text-charcoal-900 mt-12 mb-6 border-b border-charcoal-200 pb-2">10. Children's Privacy</h2>
          <p className="text-charcoal-700 leading-relaxed">Our Service does not address anyone under the age of 18 ("Children"). We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>

          <h2 className="text-2xl font-bold text-charcoal-900 mt-12 mb-6 border-b border-charcoal-200 pb-2">11. Changes to This Privacy Policy</h2>
          <p className="text-charcoal-700 leading-relaxed">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "last updated" date at the top of this Privacy Policy.</p>
          <p className="text-charcoal-700 leading-relaxed">You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

          <h2 className="text-2xl font-bold text-charcoal-900 mt-12 mb-6 border-b border-charcoal-200 pb-2">12. Contact Us</h2>
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
