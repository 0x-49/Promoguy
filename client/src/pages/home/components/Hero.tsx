import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Award, Calendar } from "lucide-react";
import { BsDiscord, BsTwitterX, BsInstagram, BsYoutube } from "react-icons/bs";

export default function Hero() {
  const stats = [
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      value: "$60K+",
      label: "Tracked Profits",
      description: "Transparently recorded wins"
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      value: "900+",
      label: "Active Members",
      description: "Growing community"
    },
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      value: "30+",
      label: "Months Profitable",
      description: "Consecutive wins"
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      value: "5+",
      label: "Expert Contributors",
      description: "Professional insights"
    }
  ];

  const socialLinks = [
    { icon: <BsDiscord className="h-5 w-5" />, href: "#", label: "Discord" },
    { icon: <BsTwitterX className="h-5 w-5" />, href: "https://x.com/promoguyus", label: "Twitter" },
    { icon: <BsInstagram className="h-5 w-5" />, href: "https://instagram.com/promoguyus", label: "Instagram" },
    { icon: <BsYoutube className="h-5 w-5" />, href: "https://www.youtube.com/@promoguyus", label: "YouTube" }
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Enhanced background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background z-0" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-repeat [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 relative z-10 pt-10 md:pt-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Enhanced social proof section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center gap-4 mb-8"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>

          {/* Enhanced headline with better visual hierarchy */}
          <motion.div
            className="relative mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Join the Best Community of{" "}
              <span className="relative inline-block">
                <span className="text-primary bg-primary/10 px-2 rounded-lg">
                  Profitable +EV Bettors
                </span>
                <motion.span
                  className="absolute -inset-1 border border-primary/20 rounded-lg"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </span>
            </h1>
          </motion.div>

          {/* Enhanced value proposition */}
          <motion.div
            className="space-y-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Transform sports betting into a calculated investment with our data-driven approach.
              Join 900+ members who've generated over $60K+ in tracked profits.
            </p>
            <p className="text-lg text-muted-foreground/80">
              Expert analysis • Real-time alerts • Proven track record
            </p>
          </motion.div>

          {/* Enhanced CTA section */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button size="lg" className="group text-lg relative overflow-hidden">
              <span className="relative z-10">Start Winning Today</span>
              <motion.span
                className="absolute inset-0 bg-primary/20"
                animate={{
                  x: ["100%", "-100%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              View Track Record
            </Button>
          </motion.div>

          {/* Enhanced stats section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="flex flex-col items-center p-4 rounded-lg bg-accent/5 backdrop-blur-sm hover:bg-accent/10 transition-colors"
              >
                {stat.icon}
                <h4 className="text-3xl font-bold mt-2">{stat.value}</h4>
                <p className="font-medium text-primary">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}