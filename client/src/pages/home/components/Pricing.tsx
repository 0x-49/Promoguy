import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const features = [
  "5 Expert Contributor Channels",
  "Daily +EV Picks and Analysis",
  "Real-time Discord Community",
  "Educational Resources & Tools",
  "Odds Boost Evaluations",
  "Performance Tracking",
  "State-Specific Recommendations",
  "30% Affiliate Commission"
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our community of successful bettors for less than the cost of a single bet
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <Card className="relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-2 bg-primary" />
            <CardHeader className="text-center pb-8 pt-6">
              <CardTitle>
                <div className="text-5xl font-bold mb-2">$19<span className="text-xl text-muted-foreground">/mo</span></div>
                <p className="text-sm text-muted-foreground mt-2">Plus $1 one-time setup fee</p>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 mb-8">
                {features.map((feature, i) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * i }}
                    className="flex items-center gap-3"
                  >
                    <Check className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <Button className="w-full" size="lg">
                Get Started Now
              </Button>
              <p className="text-center text-sm text-muted-foreground mt-4">
                Cancel anytime. No long-term commitment required.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
