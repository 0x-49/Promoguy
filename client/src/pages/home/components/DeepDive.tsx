import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, Lightbulb, BarChart2 } from "lucide-react";

const strategyVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const strategies = [
  {
    title: "Next-Gen Algorithms 🚀",
    description: "Utilize cutting-edge algorithms to analyze data and uncover hidden betting opportunities. Our systems leverage deep learning and advanced statistics to project outcomes with unmatched precision.",
    icon: <Rocket className="h-10 w-10 text-primary" />,
  },
  {
    title: "Innovative Insights 💡",
    description: "Gain actionable insights and tactical recommendations through data visualization and interactive dashboards. Our tools simplify complex data into clear, strategic advice.",
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
  },
  {
    title: "Dynamic Analysis 📊",
    description: "Experience real-time performance metrics with dynamic charts and graphs, tracking your betting success and identifying patterns for future gains.",
    icon: <BarChart2 className="h-10 w-10 text-primary" />,
  },
];

export default function DeepDive() {
  return (
    <section id="deep-dive" className="py-20 bg-gradient-to-br from-background to-accent/10">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Deep Dive Strategies 🔍
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Elevate your betting strategy with our in-depth analysis and bespoke conversion tactics that transform data into profit.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {strategies.map((strategy, i) => (
            <motion.div
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={strategyVariants}
              key={strategy.title}
            >
              <Card className="hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center p-6">
                  {strategy.icon}
                  <CardTitle className="mt-4 text-xl font-bold text-center">
                    {strategy.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 text-center text-muted-foreground">
                  <p>{strategy.description}</p>
                  <Button className="mt-4" size="lg" asChild>
                    <a href="https://whop.com/promoguyplus/?a=digitalartlab">
                      Learn More
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
