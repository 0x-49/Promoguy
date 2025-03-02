import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const QuickStart = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-accent/5 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-repeat [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] pointer-events-none"/>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Profit Today, Master +EV For Life
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Minutes to Profit, Lifetime of +EV Mastery: Your Quick-Start Guide to PromoGuy Plus.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center relative"
          >
            <motion.img
              src="https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/JoinPromoGuy_1.png"
              alt="Join PromoGuy Plus"
              className="mx-auto mb-6 w-full max-w-[280px] h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-10"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />
            <div className="relative z-20">
              <h3 className="text-2xl font-semibold mb-4">Step 1: Join PromoGuy Plus</h3>
              <p className="text-muted-foreground mb-4">
                Click "Join Now" & Secure Your Spot: Select your membership and complete
                our secure checkout process. Instant access awaits on the other side.
              </p>
              <p className="text-sm font-medium text-primary">
                Benefit: Immediate access to the best +EV betting community and
                resources on the web.
              </p>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center relative"
          >
            <motion.img
              src="https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/JoinDiscord_2.png"
              alt="Access Discord Community"
              className="mx-auto mb-6 w-full max-w-[280px] h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-10"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />
            <div className="relative z-20">
              <h3 className="text-2xl font-semibold mb-4">
                Step 2: Access Your Exclusive Discord Community
              </h3>
              <p className="text-muted-foreground mb-4">
                Instant Discord Invitation: Immediately after joining, you'll receive your
                exclusive invite to our private PromoGuy Plus Discord server.
              </p>
              <p className="text-sm font-medium text-primary">
                Benefit: Dive into real-time discussions, expert channels, and a
                welcoming community of like-minded bettors.
              </p>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center relative"
          >
            <motion.img
              src="https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/StartProfiting_3.png"
              alt="Start Profiting"
              className="mx-auto mb-6 w-full max-w-[280px] h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-10"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />
            <div className="relative z-20">
              <h3 className="text-2xl font-semibold mb-4">
                Step 3: Start Profiting with +EV Picks & Tools
              </h3>
              <p className="text-muted-foreground mb-4">
                Unlock Daily +EV Picks & Advanced Tools: Access our expert-vetted
                picks, +EV calculator, promo tracker, and beginner-to-advanced
                betting guides.
              </p>
              <p className="text-sm font-medium text-primary">
                Benefit: Start making mathematically sound +EV bets immediately,
                build your bankroll, and master the art of profitable sports betting.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12 text-lg text-muted-foreground max-w-4xl mx-auto relative z-20"
        >
          It's that easy. No complicated setups, no technical jargon – just a
          clear, streamlined path to profitable betting. From day one, you'll
          have the tools and community you need to start seeing real results.
          But PromoGuy Plus is more than just quick profits – it's your
          <em className="text-primary font-medium"> long-term investment</em> in mastering the art and science of +EV
          betting, for consistent gains now and into the future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-8 relative z-20"
        >
          <Button size="lg" asChild>
            <a 
              href="https://whop.com/promoguyplus/?a=digitalartlab"
              className="text-lg px-8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started Now - Join PromoGuy Plus in 3 Easy Steps!
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickStart;