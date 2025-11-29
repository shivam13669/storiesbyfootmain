import Layout from "@/components/Layout";

export default function PrivacyPolicy() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Your privacy is important to us. Learn how we collect and protect
            your data.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Introduction
              </h2>
              <p className="text-gray-700 mb-4">
                StoriesByFoot ("Company," "we," "us," or "our") operates the
                website and mobile applications. This Privacy Policy explains
                our practices regarding the collection, use, and disclosure of
                your information when you use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Information We Collect
              </h2>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Personal Information
                </h3>
                <p className="text-gray-700 mb-4">
                  We collect information you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Name, email address, and phone number</li>
                  <li>Billing and shipping addresses</li>
                  <li>
                    Payment information (processed securely through third-party
                    providers)
                  </li>
                  <li>Travel preferences and booking history</li>
                  <li>Communications and correspondence</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Automatically Collected Information
                </h3>
                <p className="text-gray-700 mb-4">
                  When you use our services, we automatically collect:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Browser and device information</li>
                  <li>IP address and location data</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Pages visited and links clicked</li>
                  <li>Referring website information</li>
                </ul>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                How We Use Your Information
              </h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Process bookings and payments</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Send transactional and promotional communications</li>
                <li>Improve our website and services</li>
                <li>Conduct analytics and understand user behavior</li>
                <li>Comply with legal obligations</li>
                <li>Prevent fraud and ensure security</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                How We Share Your Information
              </h2>
              <p className="text-gray-700 mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Service providers and partners necessary to fulfill your
                  requests
                </li>
                <li>Payment processors for secure transactions</li>
                <li>Analytics providers to improve our services</li>
                <li>Law enforcement when required by law</li>
              </ul>
              <p className="text-gray-700 mt-4">
                We do not sell your personal information to third parties for
                marketing purposes.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Data Security
              </h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no
                method of transmission over the internet is 100% secure, and we
                cannot guarantee absolute security.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Your Rights
              </h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of promotional communications</li>
                <li>Request a copy of your data</li>
              </ul>
              <p className="text-gray-700 mt-4">
                To exercise these rights, please contact us at
                contact@storiesbyfoot.com
              </p>
            </div>

            {/* Cookies and Tracking */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar technologies to enhance your
                experience. For detailed information about cookies, please see
                our Cookie Policy.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Children's Privacy
              </h2>
              <p className="text-gray-700 mb-4">
                Our services are not directed to children under 13 years of age.
                We do not knowingly collect personal information from children
                under 13. If we become aware that we have collected information
                from a child under 13, we will take steps to delete such
                information.
              </p>
            </div>

            {/* Changes to This Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Changes to This Policy
              </h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. We will
                notify you of significant changes by posting the updated policy
                on our website with an updated "Last Updated" date.
              </p>
            </div>

            {/* Contact Us */}
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700 mb-4">
                If you have questions about this Privacy Policy or our privacy
                practices, please contact us at:
              </p>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Email:</strong> contact@storiesbyfoot.com
                </p>
                <p>
                  <strong>Phone:</strong> +91 62051 29118
                </p>
                <p>
                  <strong>Address:</strong> New Delhi, India
                </p>
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
