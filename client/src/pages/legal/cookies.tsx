import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function CookiePolicy() {
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

          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
            <p>
              This Cookie Policy explains how PromoGuy Plus ("we", "us", and "our") uses cookies and similar technologies
              to recognize you when you visit our website. It explains what these technologies are and why we use them,
              as well as your rights to control our use of them.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">What are cookies?</h2>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website.
              Cookies are widely used by website owners in order to make their websites work, or to work more efficiently,
              as well as to provide reporting information.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">How do we use cookies?</h2>
            <p>
              We use cookies for several purposes, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To enable certain functions of the Service</li>
              <li>To provide analytics</li>
              <li>To store your preferences</li>
              <li>To enable ad delivery and behavioral targeting</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Types of cookies we use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">Essential Cookies</h3>
                <p>
                  These cookies are necessary for the website to function and cannot be switched off in our systems.
                  They are usually only set in response to actions made by you which amount to a request for services.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Performance Cookies</h3>
                <p>
                  These cookies allow us to count visits and traffic sources so we can measure and improve the performance
                  of our site. They help us to know which pages are the most and least popular.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Functional Cookies</h3>
                <p>
                  These cookies enable the website to provide enhanced functionality and personalization. They may be set
                  by us or by third party providers whose services we have added to our pages.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">How to control cookies</h2>
            <p>
              You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies,
              you may still use our website though your access to some functionality and areas of our website may be restricted.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact us</h2>
            <p>
              If you have any questions about our use of cookies or other technologies, please email us at
              info@JoinPromoGuyPlus.com or contact us at:
            </p>
            <p className="mt-4">
              PromoGuy Plus<br />
              7768 Cumming Hwy<br />
              Canton, GA 30115
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}