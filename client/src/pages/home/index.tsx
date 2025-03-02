import { motion } from "framer-motion";
import Hero from "./components/Hero";
import PainPoints from "./components/PainPoints";
import EVAdvantage from "./components/EVAdvantage";
import QuickStart from "./components/QuickStart";
import Features from "./components/Features";
import DeepDive from "./components/DeepDive";
import UseCases from "./components/UseCases";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";

const AFFILIATE_URL = "https://whop.com/promoguyplus/?a=digitalartlab";

// Hero Section CTA
const HeroSectionCTA = () => (
  <div className="responsive-container relative py-20">
    <div className="text-center">
      <p className="text-blue-1200 dark:text-blue-8400 mb-12 max-w-3xl mx-auto text-xl leading-relaxed">
        Stop missing out on life-changing sports betting opportunities. Join PromoGuy Plus today and gain access to a world-class platform that guarantees your success.
      </p>
      <a
        href={AFFILIATE_URL}
        className="inline-block px-10 py-5 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl font-semibold"
      >
        Start Your Journey Now
      </a>
    </div>
  </div>
);

// Features Section CTA
const FeaturesSectionCTA = () => (
  <div className="responsive-container relative py-20">
    <div className="text-center">
      <p className="text-blue-1200 dark:text-blue-8400 mb-12 max-w-3xl mx-auto text-xl leading-relaxed">
        Why struggle alone when you can dominate sports betting? Get exclusive access to our proven tools, expert guidance, and a premium community that ensures your success.
      </p>
      <a
        href={AFFILIATE_URL}
        className="inline-block px-10 py-5 bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl font-semibold"
      >
        Try PromoGuy Plus Risk-Free
      </a>
    </div>
  </div>
);

// Pricing Section CTA
const PricingSectionCTA = () => (
  <div className="responsive-container relative py-20">
    <div className="text-center">
      <p className="text-blue-1200 dark:text-blue-8400 mb-12 max-w-3xl mx-auto text-xl leading-relaxed">
        Simplify your sports betting with PromoGuy Plus. Join today and transform your betting into a highly profitable venture.
      </p>
      <a
        href={AFFILIATE_URL}
        className="inline-block px-10 py-5 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl font-semibold"
      >
        Upgrade Your Game Today
      </a>
    </div>
  </div>
);

// Success Stories Section CTA
const SuccessStoriesSectionCTA = () => (
  <div className="responsive-container relative py-20">
    <div className="text-center">
      <p className="text-blue-1200 dark:text-blue-8400 mb-12 max-w-3xl mx-auto text-xl leading-relaxed">
        Don't settle for average results. Join PromoGuy Plus and become part of a community that consistently dominates the sports betting market.
      </p>
      <a
        href={AFFILIATE_URL}
        className="inline-block px-10 py-5 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl font-semibold"
      >
        Secure Your Spot Today
      </a>
    </div>
  </div>
);

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <PainPoints />
      <EVAdvantage />
      <QuickStart />
      <HeroSectionCTA />
      <Features />
      <FeaturesSectionCTA />
      <UseCases />
      <DeepDive/>
      <Pricing />
      <PricingSectionCTA />
      <Testimonials />
      <SuccessStoriesSectionCTA />
      <FAQ />
      {/* CTASection6: Final Action */}
      <div className="responsive-container relative py-20">
        <div className="text-center">
          <p className="text-blue-1200 dark:text-blue-8400 mb-12 max-w-3xl mx-auto text-xl leading-relaxed">
            It's time to scale your earnings. Join PromoGuy Plus to harness real‑time automation and insider alerts that keep you ahead.
          </p>
          <a
            href={AFFILIATE_URL}
            className="inline-block px-10 py-5 bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl font-semibold"
          >
            Scale Your Profits Now
          </a>
        </div>
      </div>
    </motion.div>
  );
}
