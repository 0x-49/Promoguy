import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background z-0" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join the Best Community of
            <span className="text-primary"> Profitable +EV Bettors</span>
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Turn sports betting into a calculated investment with our data-driven approach.
            Over $60K+ in tracked profits and growing.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button size="lg" className="group">
              Start Winning Today
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              View Track Record
            </Button>
          </motion.div>

          <motion.div
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div>
              <h4 className="text-2xl font-bold">$60K+</h4>
              <p className="text-sm text-muted-foreground">Tracked Profits</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold">900+</h4>
              <p className="text-sm text-muted-foreground">Active Members</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold">24+</h4>
              <p className="text-sm text-muted-foreground">Months Profitable</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold">5+</h4>
              <p className="text-sm text-muted-foreground">Expert Contributors</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}