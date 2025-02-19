import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calculator,
  TrendingUp,
  Users,
  BookOpen,
  Target,
  Shield,
  ChartBar,
  MessageSquare,
  Zap,
  Binary
} from "lucide-react";

const features = [
  {
    icon: <Calculator className="h-8 w-8" />,
    title: "Data-Driven Analysis",
    description: "Advanced mathematical models and statistical analysis for optimal betting decisions",
    details: [
      "Real-time odds evaluation",
      "Probability calculation tools",
      "Risk assessment metrics"
    ]
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "+EV Betting Strategy",
    description: "Focus on positive expected value plays for consistent long-term profitability",
    details: [
      "Value identification system",
      "Profit probability analysis",
      "Long-term ROI tracking"
    ]
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Expert Community",
    description: "Learn from experienced bettors and share insights in our active Discord community",
    details: [
      "Live strategy discussions",
      "Member success stories",
      "Collaborative learning"
    ]
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "Educational Resources",
    description: "Comprehensive guides and tutorials to improve your betting knowledge",
    details: [
      "Video training library",
      "Strategy documentation",
      "Expert webinars"
    ]
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Real-Time Picks",
    description: "Get instant access to vetted betting opportunities and odds boosts",
    details: [
      "Instant notifications",
      "Detailed analysis reports",
      "Win probability scores"
    ]
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Risk Management",
    description: "Learn proper bankroll management and strategic bet sizing",
    details: [
      "Bankroll calculators",
      "Risk assessment tools",
      "Position sizing guides"
    ]
  },
  {
    icon: <ChartBar className="h-8 w-8" />,
    title: "Performance Analytics",
    description: "Track your betting performance with detailed analytics and insights",
    details: [
      "Personal ROI tracking",
      "Win rate analysis",
      "Trend identification"
    ]
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "24/7 Support",
    description: "Get help when you need it from our community and expert contributors",
    details: [
      "Discord chat support",
      "Expert consultation",
      "Strategy reviews"
    ]
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Quick-Start Guides",
    description: "Get up to speed quickly with our comprehensive onboarding resources",
    details: [
      "Step-by-step tutorials",
      "Strategy templates",
      "Best practices"
    ]
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
    <section id="features" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose PromoGuy Plus
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your betting approach with our comprehensive suite of tools and expert community
          </p>
        </motion.div>

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
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/20">
                <CardContent className="p-6">
                  <div className="text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <Binary className="h-4 w-4 mr-2 text-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}