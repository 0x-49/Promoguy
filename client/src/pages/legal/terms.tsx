import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
            <p>
              Welcome to PromoGuy Plus. By accessing our website and using our services, you agree to be bound by these Terms of Service
              ("Terms"). Please read them carefully before using our services.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using our website and services, you acknowledge that you have read, understood, and agree to be bound by
              these Terms. If you do not agree with any part of these Terms, you must not use our services.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Service Description</h2>
            <p>
              PromoGuy Plus provides sports betting analysis, educational content, and community features. Our services are intended for
              informational and educational purposes only. We do not guarantee any specific outcomes or results from using our services.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must be at least 21 years old to use our services</li>
              <li>You are responsible for maintaining the confidentiality of your account</li>
              <li>You agree to provide accurate and complete information</li>
              <li>You must comply with all applicable laws and regulations</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Subscription and Payments</h2>
            <p>
              Access to certain features requires a paid subscription. All payments are processed securely through our payment providers.
              Subscriptions automatically renew unless cancelled. Refunds are provided in accordance with our refund policy.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
            <p>
              All content on our website, including text, graphics, logos, and software, is the property of PromoGuy Plus and is
              protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our
              express permission.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Limitation of Liability</h2>
            <p>
              PromoGuy Plus is not liable for any direct, indirect, incidental, special, or consequential damages resulting from the
              use or inability to use our services. We do not guarantee the accuracy or completeness of any information provided.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Termination</h2>
            <p>
              We reserve the right to terminate or suspend your account and access to our services at our sole discretion, without
              notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for
              any other reason.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to Terms</h2>
            <p>
              We may modify these Terms at any time. We will notify users of any material changes. Your continued use of our services
              after such modifications constitutes acceptance of the updated Terms.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="mt-4">
              PromoGuy Plus<br />
              7768 Cumming Hwy<br />
              Canton, GA 30115<br />
              Email: info@JoinPromoGuyPlus.com<br />
              Phone: (800) 896-3456
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}