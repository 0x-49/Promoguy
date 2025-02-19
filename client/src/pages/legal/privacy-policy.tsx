import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet";

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - PromoGuy Plus</title>
        <meta name="description" content="Privacy Policy for PromoGuy Plus - Learn how we protect and manage your data." />
        <meta name="robots" content="noindex" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
              <div className="prose max-w-none">
                <p className="text-lg mb-6">Last updated: February 19, 2025</p>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                  <p>When you use PromoGuy Plus, we collect information that you provide directly to us:</p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Account information (name, email, username)</li>
                    <li>Betting preferences and history</li>
                    <li>Communication records when you contact support</li>
                    <li>Payment information for subscriptions</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                  <p>We use the collected information to:</p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Provide and improve our services</li>
                    <li>Send you important updates and notifications</li>
                    <li>Process your transactions</li>
                    <li>Analyze and optimize our platform</li>
                  </ul>
                </section>

                {/* Add more sections as needed */}
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
