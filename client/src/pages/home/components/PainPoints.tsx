import React from "react";
import { motion } from "framer-motion";

const PainPoints = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-accent/5 relative overflow-hidden">
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
            Are You Making These Costly Mistakes?
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10">
          {/* Image/Visuals */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:order-2"
          >
            <motion.img
              src="https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/MillionsLose_22.png"
              alt="Common Betting Traps and Mistakes"
              className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 w-full h-auto"
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:order-1 space-y-6"
          >
            <p className="text-lg text-muted-foreground">
              Millions lose money on sports betting. And it's often not because
              they're "unlucky." It's because they're falling into predictable
              traps. Are you making these costly mistakes?
            </p>
            <ul className="space-y-4">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex items-start gap-2"
              >
                <span className="font-semibold text-primary">The "Gut Feeling" Gamble:</span>
                <span className="text-muted-foreground">Trusting your hunches? Sportsbooks love this. Emotions cloud judgment. Data wins, not feelings.</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="flex items-start gap-2"
              >
                <span className="font-semibold text-primary">The "Guru" Trap:</span>
                <span className="text-muted-foreground">Blindly following "tipsters" with empty promises? Most are scams. Verifiable results are rare. Transparency is key, not hype.</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="flex items-start gap-2"
              >
                <span className="font-semibold text-primary">The Parlay Lottery:</span>
                <span className="text-muted-foreground">Chasing the big payout with risky parlays? The odds are stacked against you. High-probability bets yield consistent gains.</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="flex items-start gap-2"
              >
                <span className="font-semibold text-primary">The "Chasing Losses" Cycle:</span>
                <span className="text-muted-foreground">Trying to recoup losses with bigger, riskier bets? This is a downward spiral. Disciplined bankroll management breaks the cycle.</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="flex items-start gap-2"
              >
                <span className="font-semibold text-primary">Ignoring +EV: The Biggest Mistake of All:</span>
                <span className="text-muted-foreground">Betting without understanding Expected Value is like driving blindfolded. +EV is the mathematical edge you need to win long-term.</span>
              </motion.li>
            </ul>
            <p className="text-lg text-muted-foreground">
              Stop letting these betting traps drain your bankroll and fuel
              frustration. It's time to break free and approach sports betting
              with a strategic, data-driven advantage.
            </p>
            <p className="text-lg font-medium">
              PromoGuy Plus is your escape from the Betting Trap. We offer the
              tools, knowledge, and community to transform your betting from a
              game of chance into a calculated investment.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a 
                href="https://whop.com/promoguyplus/?a=digitalartlab"
                className="inline-block bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Break Free From the Betting Trap - Discover +EV Now!
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;