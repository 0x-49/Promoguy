import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, TrendingUp, Users, BookOpen, Target, Shield } from "lucide-react";

const features = [
  {
    icon: <Calculator className="h-8 w-8" />,
    title: "Data-Driven Analysis",
    description: "Advanced mathematical models and statistical analysis for optimal betting decisions"
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "+EV Betting Strategy",
    description: "Focus on positive expected value plays for consistent long-term profitability"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Expert Community",
    description: "Learn from experienced bettors and share insights in our active Discord community"
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "Educational Resources",
    description: "Comprehensive guides and tutorials to improve your betting knowledge"
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Real-Time Picks",
    description: "Get instant access to vetted betting opportunities and odds boosts"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Risk Management",
    description: "Learn proper bankroll management and strategic bet sizing"
  }
];

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5
    }
  })
};

export default function Features() {
  return (
    <section id="features" className="py-20 bg-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Why Choose PromoGuy Plus
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Transform your betting approach with our comprehensive suite of tools and expert community
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariant}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
