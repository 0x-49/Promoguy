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

const plans = [
  {
    title: "Monthly",
    price: "19",
    period: "month",
    initialFee: "1.00",
    href: "https://whop.com/promoguyplus/?a=digitalartlab"
  },
  {
    title: "6 Months",
    price: "89",
    period: "6 months",
    discount: "22%",
    href: "https://whop.com/promoguyplus/?a=digitalartlab"
  },
  {
    title: "Yearly",
    price: "159",
    period: "year",
    discount: "30%",
    href: "https://whop.com/promoguyplus/?a=digitalartlab"
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-background to-accent/5 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-repeat [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"/>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our community of successful bettors for less than the cost of a single bet
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <Card className="relative overflow-hidden border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 group h-full z-10">
                <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-primary to-primary/80" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"/>
                {plan.discount && (
                  <div className="absolute top-4 right-4 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {plan.discount} Discount
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-6">
                  <CardTitle>
                    <div className="text-2xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">{plan.title}</div>
                    <div className="text-5xl font-extrabold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                      ${plan.price}<span className="text-2xl font-semibold text-muted-foreground">/{plan.period}</span>
                    </div>
                    {plan.initialFee && (
                      <p className="text-sm font-medium text-muted-foreground mt-2">+ ${plan.initialFee} Initial Fee</p>
                    )}
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
                        className="flex items-center gap-3 group"
                      >
                        <Check className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                        <span className="font-medium group-hover:text-primary transition-colors">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full relative z-20" 
                    size="lg" 
                    asChild
                  >
                    <a 
                      href={plan.href}
                      className="w-full py-2 inline-block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Started Now
                    </a>
                  </Button>
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    Cancel anytime. No long-term commitment required.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
