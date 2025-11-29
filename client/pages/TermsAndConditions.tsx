import Layout from "@/components/Layout";

export default function TermsAndConditions() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
            Terms and Conditions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 mb-4">
                These Terms and Conditions ("Agreement") constitute a legal agreement between you and StoriesByFoot ("Company," "we," "us," or "our"). By accessing or using our website, booking expeditions, or using our services, you agree to be bound by these terms. If you do not agree to any part of these terms, you should not use our services.
              </p>
            </div>

            {/* Use License */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Use License</h2>
              <p className="text-gray-700 mb-4">
                We grant you a non-exclusive, non-transferable license to use our website and services for personal, non-commercial purposes, subject to the restrictions in these Terms and Conditions. You may not:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Modify, copy, or reproduce any part of the website or services</li>
                <li>Use any automated tools to access or monitor the website</li>
                <li>Engage in unauthorized access, interference, or disruption</li>
                <li>Collect or use personal information about other users</li>
                <li>Attempt to hack or gain unauthorized access</li>
              </ul>
            </div>

            {/* Booking and Payment */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Booking and Payment Terms</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Expedition Bookings</h3>
                <p className="text-gray-700 mb-4">
                  When you book an expedition through our website, you are entering into a binding agreement with StoriesByFoot. You agree to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Pay the full expedition cost according to our pricing terms</li>
                  <li>Comply with all cancellation and refund policies</li>
                  <li>Follow all safety guidelines and expedition rules</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Payment</h3>
                <p className="text-gray-700 mb-4">
                  All payments must be made in full unless otherwise agreed. We accept various payment methods. Payment details are processed securely through third-party payment processors. You are responsible for maintaining the confidentiality of your payment information.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Pricing</h3>
                <p className="text-gray-700">
                  Prices are subject to change without notice. The price at the time of booking is the price you are obligated to pay, unless otherwise specified in your booking confirmation.
                </p>
              </div>
            </div>

            {/* Cancellation and Refunds */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Cancellation and Refund Policy</h2>
              <p className="text-gray-700 mb-4">
                Cancellation policies vary by expedition and are detailed in your booking confirmation. Generally:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Cancellations 30+ days before the expedition may qualify for a full refund (minus any fees)</li>
                <li>Cancellations 15-29 days before may incur a 50% cancellation fee</li>
                <li>Cancellations less than 15 days before may result in no refund</li>
              </ul>
              <p className="text-gray-700 mt-4">
                All refunds will be processed within 14 business days. For specific details, please refer to your booking confirmation or contact us directly.
              </p>
            </div>

            {/* Participant Responsibilities */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Participant Responsibilities</h2>
              <p className="text-gray-700 mb-4">
                As a participant in our expeditions, you are responsible for:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Ensuring you are physically and mentally fit for the expedition</li>
                <li>Disclosing any medical conditions or allergies</li>
                <li>Obtaining necessary travel documents (passport, visa, permits)</li>
                <li>Obtaining travel insurance (highly recommended)</li>
                <li>Following all safety instructions and expedition guidelines</li>
                <li>Respecting local customs and regulations</li>
                <li>Complying with all laws applicable in the destination country</li>
              </ul>
            </div>

            {/* Risk Disclaimer */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Assumption of Risk and Liability Waiver</h2>
              <p className="text-gray-700 mb-4">
                Expeditions involve inherent risks including but not limited to altitude sickness, accidents, weather-related incidents, and personal injury. By booking an expedition, you acknowledge and assume all risks associated with participation.
              </p>
              <p className="text-gray-700 mb-4">
                You agree to release, indemnify, and hold harmless StoriesByFoot, its employees, partners, and agents from any and all claims, damages, liabilities, and expenses arising from:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Personal injury or death</li>
                <li>Loss or damage to personal property</li>
                <li>Actions or omissions of third parties</li>
                <li>Weather conditions or natural disasters</li>
                <li>Medical emergencies or evacuation costs</li>
              </ul>
            </div>

            {/* Insurance */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Travel Insurance</h2>
              <p className="text-gray-700">
                We strongly recommend obtaining comprehensive travel insurance that covers medical emergencies, evacuation, trip cancellation, and baggage loss. StoriesByFoot is not responsible for losses not covered by your insurance.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Intellectual Property Rights</h2>
              <p className="text-gray-700 mb-4">
                All content on our website, including text, images, photographs, videos, and graphics, is the property of StoriesByFoot or its content suppliers and is protected by copyright and other intellectual property laws.
              </p>
              <p className="text-gray-700">
                You may not reproduce, distribute, or transmit any content without our prior written consent.
              </p>
            </div>

            {/* User-Generated Content */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">User-Generated Content</h2>
              <p className="text-gray-700 mb-4">
                If you submit photos, reviews, testimonials, or other content to StoriesByFoot, you grant us a worldwide, royalty-free license to use, reproduce, and display that content for marketing and promotional purposes.
              </p>
            </div>

            {/* Disclaimer of Warranties */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Disclaimer of Warranties</h2>
              <p className="text-gray-700">
                Our website and services are provided "as is" without warranties of any kind. We do not warrant that our services will be uninterrupted, error-free, or free from viruses or malware. We disclaim all implied warranties, including merchantability, fitness for a particular purpose, and non-infringement.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Limitation of Liability</h2>
              <p className="text-gray-700">
                To the maximum extent permitted by law, StoriesByFoot shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services, even if we have been advised of the possibility of such damages.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Governing Law</h2>
              <p className="text-gray-700">
                These Terms and Conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts located in New Delhi.
              </p>
            </div>

            {/* Modifications */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Modifications to Terms</h2>
              <p className="text-gray-700">
                We reserve the right to modify these Terms and Conditions at any time. Modifications will be effective immediately upon posting to the website. Your continued use of our services constitutes your acceptance of the modified terms.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Termination</h2>
              <p className="text-gray-700">
                We reserve the right to terminate or suspend your access to our services at any time, with or without notice, for any reason including violation of these Terms and Conditions.
              </p>
            </div>

            {/* Severability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Severability</h2>
              <p className="text-gray-700">
                If any provision of these Terms and Conditions is found to be invalid or unenforceable, that provision shall be modified to the minimum extent necessary to make it valid, and the remaining provisions shall remain in full force and effect.
              </p>
            </div>

            {/* Contact Us */}
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Questions?</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about these Terms and Conditions, please contact us at:
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
