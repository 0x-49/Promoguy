import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is +EV betting?",
    answer: "+EV (Positive Expected Value) betting involves placing wagers where the probability-weighted payout exceeds the stake. Our platform helps identify these opportunities through mathematical analysis and real-time odds evaluation."
  },
  {
    question: "How much can I expect to make?",
    answer: "While results vary, our top contributors average over $3,600 monthly in profits. Success depends on following our system, proper bankroll management, and consistent application of +EV principles."
  },
  {
    question: "Is this legal?",
    answer: "Yes, we operate completely legally by analyzing publicly available odds and promotions. We work with licensed sportsbooks and provide state-specific recommendations to ensure compliance."
  },
  {
    question: "How does the Discord community work?",
    answer: "Our Discord features 5 expert contributor channels providing daily picks, real-time odds boost evaluations, educational content, and community discussion. Members can interact, learn, and share insights 24/7."
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Yes, you can cancel anytime. There are no long-term commitments required. Your subscription will remain active until the end of your billing period."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about PromoGuy Plus
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
