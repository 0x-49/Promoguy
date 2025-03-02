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
  Binary,
  Check
} from "lucide-react";

const features = [
  {
    icon: <Calculator className="h-8 w-8" />,
    title: "Data-Driven Analysis",
    description: "Leverage advanced mathematical models and statistical analysis for precise betting decisions",
    details: [
      "Advanced odds comparison engine",
      "Real-time probability calculations",
      "Risk-reward optimization tools"
    ],
    benefits: "Make informed decisions based on comprehensive data analysis"
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "+EV Betting Strategy",
    description: "Focus on positive expected value plays that ensure consistent long-term profitability",
    details: [
      "Automated value identification",
      "Advanced profit tracking system",
      "ROI optimization tools"
    ],
    benefits: "Maximize your returns with proven mathematical strategies"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Expert Community",
    description: "Join a thriving community of experienced bettors sharing insights and strategies",
    details: [
      "24/7 strategy discussions",
      "Expert mentorship program",
      "Collaborative analysis sessions"
    ],
    benefits: "Learn from successful bettors and share winning strategies"
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "Educational Resources",
    description: "Access comprehensive learning materials to master betting strategies",
    details: [
      "Strategy video library",
      "Interactive workshops",
      "Expert-led webinars"
    ],
    benefits: "Transform from novice to expert with structured learning"
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Real-Time Picks",
    description: "Receive instant notifications for high-value betting opportunities",
    details: [
      "Instant alert system",
      "Detailed opportunity analysis",
      "Win probability scores"
    ],
    benefits: "Never miss profitable betting opportunities"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Risk Management",
    description: "Master advanced bankroll management and strategic bet sizing",
    details: [
      "Dynamic bankroll calculator",
      "Position sizing optimizer",
      "Risk exposure analysis"
    ],
    benefits: "Protect and grow your betting bankroll systematically"
  },
  {
    icon: <ChartBar className="h-8 w-8" />,
    title: "Performance Analytics",
    description: "Track and analyze your betting performance with detailed insights",
    details: [
      "Performance dashboards",
      "Trend analysis tools",
      "Profit visualization"
    ],
    benefits: "Optimize your strategy with data-driven insights"
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "24/7 Support",
    description: "Get expert assistance whenever you need it",
    details: [
      "Live Discord support",
      "Strategy consultations",
      "Technical assistance"
    ],
    benefits: "Never feel lost with our constant support"
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Quick-Start Program",
    description: "Get up to speed quickly with our comprehensive onboarding",
    details: [
      "Guided learning path",
      "Strategy templates",
      "Best practices guide"
    ],
    benefits: "Start winning from day one with structured guidance"
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
    <section id="features" className="py-24 bg-gradient-to-b from-accent/5 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-repeat [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"/>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Why Choose PromoGuy Plus
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your betting approach with our comprehensive suite of tools, expert community, and proven strategies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariant}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/20 overflow-hidden group">
                <CardContent className="p-6">
                  <div className="relative">
                    <div className="text-primary mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <motion.div
                      className="absolute -inset-1 bg-primary/5 rounded-full blur"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      {feature.details.map((detail, index) => (
                        <div key={index} className="flex items-center text-sm group">
                          <Binary className="h-4 w-4 mr-2 text-primary transform group-hover:rotate-180 transition-transform duration-300" />
                          {detail}
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-primary/10">
                      <div className="flex items-center text-sm text-primary">
                        <Check className="h-4 w-4 mr-2" />
                        <span className="font-medium">{feature.benefits}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}