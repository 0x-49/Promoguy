import React from "react";
import { motion } from "framer-motion";

const EVAdvantage = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-accent/5 to-background relative overflow-hidden">
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
            The Science of Profit
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beyond Luck: The Mathematical Edge of +EV Betting
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10">
          {/* Visuals/Animation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:order-1"
          >
            <motion.img
              src="https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/ScienceOfProfit_11.png"
              alt="The Science of +EV Betting"
              className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 w-full h-auto"
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:order-2 space-y-6"
          >
            <p className="text-lg text-muted-foreground">
              PromoGuy Plus isn't about lucky guesses or inside information. It's
              built on the science of <span className="text-primary font-medium">Positive Expected Value
              (+EV) betting.</span> This is the strategy used by professional
              bettors and sharpest minds in the industry.
            </p>

            <p className="text-lg text-muted-foreground">
              Here's the core principle: We identify bets where the odds offered
              by sportsbooks are <em>mistakenly</em> higher than the
              true probability of an outcome. Think of it as finding
              value in an inefficient market – like spotting a stock that's
              undervalued by the market.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Our Proprietary System Leverages:</h3>
              <ul className="space-y-4">
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="flex items-start gap-2"
                >
                  <span className="font-semibold text-primary">Advanced Data Models:</span>
                  <span className="text-muted-foreground">We analyze vast datasets of sports statistics, team performance metrics, player data, historical odds, and real-time market data.</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="flex items-start gap-2"
                >
                  <span className="font-semibold text-primary">Sophisticated Odds Comparison:</span>
                  <span className="text-muted-foreground">Our algorithms scan odds across leading sportsbooks to pinpoint discrepancies and identify value lines.</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="flex items-start gap-2"
                >
                  <span className="font-semibold text-primary">Proprietary +EV Tools:</span>
                  <span className="text-muted-foreground">We equip our members with tools to quickly calculate the expected value of any bet, ensuring mathematical soundness.</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="flex items-start gap-2"
                >
                  <span className="font-semibold text-primary">Expert Human Analysis:</span>
                  <span className="text-muted-foreground">Our team of experienced +EV bettors uses their deep knowledge, enhanced by data-driven insights, to curate high-value picks.</span>
                </motion.li>
              </ul>
            </div>

            <p className="text-lg text-muted-foreground">
              This isn't gambling – it's <span className="text-primary font-medium">strategic betting</span>. By
              consistently focusing on +EV plays, you shift the odds in your
              favor. Over time, the mathematics of +EV guarantees a statistical
              edge and long-term profitability.
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
                See the Proof: $100,000+ Tracked Profits - Click Here!
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EVAdvantage;