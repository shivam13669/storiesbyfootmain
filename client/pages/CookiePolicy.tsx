import Layout from "@/components/Layout";

export default function CookiePolicy() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Understand how we use cookies and similar technologies to enhance your experience.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">What Are Cookies?</h2>
              <p className="text-gray-700 mb-4">
                Cookies are small text files that are placed on your device when you visit our website. They contain information about your browsing activities and are used to remember your preferences and improve your user experience.
              </p>
            </div>

            {/* Types of Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Types of Cookies We Use</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Essential Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas. Without these cookies, the website cannot operate effectively.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Session management</li>
                  <li>Authentication</li>
                  <li>Security and fraud detection</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Performance Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies collect information about how you use our website, such as which pages you visit most often and if you encounter error messages. This helps us improve site performance.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Functionality Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies allow the website to remember your choices and preferences, such as your language, location, and login information. They provide a more personalized experience.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Marketing Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies track your browsing activity to help us show you relevant advertisements and marketing content. They may be shared with advertising partners.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Analytics Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies help us understand how visitors interact with our website, including the number of visitors, traffic sources, and user behavior patterns. This information helps us improve our services.
                </p>
              </div>
            </div>

            {/* First-Party vs Third-Party */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">First-Party and Third-Party Cookies</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">First-Party Cookies</h3>
                <p className="text-gray-700">
                  These are cookies set directly by StoriesByFoot and are used to remember your preferences and improve your experience on our website.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Third-Party Cookies</h3>
                <p className="text-gray-700">
                  These cookies are set by external services and partners, such as analytics providers, advertising networks, and social media platforms. These cookies may track your activity across multiple websites.
                </p>
              </div>
            </div>

            {/* Specific Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Cookies from External Services</h2>
              <p className="text-gray-700 mb-4">We use cookies from the following services:</p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-gray-800">Google Analytics</h3>
                  <p className="text-gray-700 text-sm">
                    Used to analyze website traffic and user behavior. Privacy Policy: https://policies.google.com/privacy
                  </p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-gray-800">Payment Processors</h3>
                  <p className="text-gray-700 text-sm">
                    Used for secure payment processing and transaction management.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-gray-800">Social Media Platforms</h3>
                  <p className="text-gray-700 text-sm">
                    Used for social sharing features and integration. Facebook, Instagram, and Twitter may set cookies.
                  </p>
                </div>
              </div>
            </div>

            {/* Cookie Duration */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Cookie Duration</h2>
              <p className="text-gray-700 mb-4">Cookies can be:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until you delete them</li>
              </ul>
            </div>

            {/* Managing Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">How to Manage Cookies</h2>
              <p className="text-gray-700 mb-4">
                You have the right to accept, refuse, or delete cookies. You can control cookies through:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Browser settings (most browsers allow you to refuse cookies or alert you when cookies are being sent)</li>
                <li>Opt-out mechanisms provided on our website</li>
                <li>Clearing your browser history and cookies</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Please note that disabling essential cookies may affect the functionality of our website.
              </p>
            </div>

            {/* GDPR and Privacy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">GDPR Compliance</h2>
              <p className="text-gray-700 mb-4">
                For users in the European Union and other jurisdictions with privacy laws similar to GDPR, we comply with applicable regulations regarding consent and cookie management. We obtain your explicit consent before placing non-essential cookies on your device.
              </p>
            </div>

            {/* Changes to This Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Changes to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our cookie practices or for other operational, legal, or regulatory reasons. We will notify you of significant changes by posting the updated policy on our website.
              </p>
            </div>

            {/* Contact Us */}
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about our Cookie Policy or how we use cookies, please contact us at:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> contact@storiesbyfoot.com</p>
                <p><strong>Phone:</strong> +91 62051 29118</p>
                <p><strong>Address:</strong> New Delhi, India</p>
              </div>
            </div>

            {/* Last Updated */}
            <div className="mt-8 text-center text-gray-500 text-sm">
              <p>Last Updated: January 2025</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
