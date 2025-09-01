import { companyConfig } from '@/config/company'
import Header from '@/components/Header'

export default function CookiePolicy() {
  return (
    <>
      <Header />
      <div className="min-h-screen pt-24 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Cookie Policy
              </h1>
              <p className="text-xl text-gray-600">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-600 leading-relaxed">
                  At {companyConfig.name}, we believe in transparency and respect for your privacy. 
                  This Cookie Policy explains how we handle cookies on our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Our Cookie Policy</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <strong>We do not use cookies on our website.</strong> Our site is designed to function 
                  without any tracking or storage mechanisms. You can browse our website freely without 
                  concerns about cookie consent or tracking.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  When you visit our website, we do not:
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1 ml-4">
                  <li>Set any cookies on your device</li>
                  <li>Use session or persistent cookies</li>
                  <li>Employ third-party tracking cookies</li>
                  <li>Store any browsing preferences</li>
                  <li>Track your behavior across our site</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Third-Party Services</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our website may contain links to external services:
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1 ml-4">
                  <li><strong>Intranet Portal:</strong> Links to our internal business systems</li>
                  <li><strong>Client Portal:</strong> Links to client-specific services</li>
                  <li><strong>External Tools:</strong> Links to third-party tools and services</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  These external services may use their own cookies and have their own privacy policies. 
                  We encourage you to review their policies before providing any personal information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Future Changes</h2>
                <p className="text-gray-600 leading-relaxed">
                  If we ever change our cookie policy in the future, we will update this page and clearly 
                  describe what would change before it takes effect. We are committed to maintaining 
                  transparency about our data practices.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Contact Information</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions about this Cookie Policy or our data practices, please contact us at:{' '}
                  <a href={`mailto:${companyConfig.contact.email}`} className="text-primary-600 hover:text-primary-700 underline">
                    {companyConfig.contact.email}
                  </a>
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-500 text-center">
                  This Cookie Policy is effective as of {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
