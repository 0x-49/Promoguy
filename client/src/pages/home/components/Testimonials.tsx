import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "David Hayward",
    role: "Professional Bettor",
    image: "https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/David_Hayward.png",
    content: "PromoGuy Plus has completely transformed my betting strategy. The +EV approach and community insights are invaluable."
  },
  {
    name: "Javan Drummond",
    role: "Sports Analyst",
    image: "https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/Javan_Drummond.png",
    content: "Joining this betting Discord has been a game-changer! The educational resources and real-time picks are top-notch."
  },
  {
    name: "AlsoYes",
    role: "Community Member",
    image: "https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/AlsoYes.png",
    content: "They teach you to be better and to make your own picks based on math, not gut feelings. Incredible value!"
  },
  {
    name: "Michael Chen",
    role: "Data Scientist",
    image: "https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/Michael_Chen.png",
    content: "The mathematical approach to betting here is unparalleled. The community's focus on data-driven decisions has helped me achieve consistent profits."
  },
  {
    name: "Sarah Thompson",
    role: "Professional Sports Bettor",
    image: "https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/Sarah_Thompson.png",
    content: "The real-time alerts and community discussions have helped me spot opportunities I would have missed. My ROI has improved significantly."
  },
  {
    name: "Marcus Johnson",
    role: "Finance Professional",
    image: "https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/Marcus_Johnson.png",
    content: "The risk management strategies and bankroll optimization tools have been game-changing for my betting portfolio."
  },
  {
    name: "Emily Rodriguez",
    role: "Sports Marketing Expert",
    image: "https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/Emily_Rodriguez.png",
    content: "The community's insights into market inefficiencies and value betting have transformed my approach to sports betting."
  },
  {
    name: "James Wilson",
    role: "Statistical Analyst",
    image: "https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/James_Wilson.png",
    content: "The advanced analytics tools and community discussions have helped me develop more sophisticated betting models."
  },
  {
    name: "Lisa Zhang",
    role: "Risk Management Specialist",
    image: "https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/Lisa_Zhang.png",
    content: "The platform's emphasis on proper bankroll management and risk assessment has been crucial to my long-term success."
  },
  {
    name: "Robert Martinez",
    role: "Professional Gambler",
    image: "https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/Robert_Martinez.png",
    content: "The combination of expert analysis and community wisdom has helped me consistently find +EV opportunities."
  },
  {
    name: "Amanda Foster",
    role: "Sports Betting Consultant",
    image: "https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/Amanda_Foster.png",
    content: "The educational resources and mentorship have accelerated my learning curve in sports betting significantly."
  },
  {
    name: "Thomas Wright",
    role: "Quantitative Analyst",
    image: "https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/Thomas_Wright.png",
    content: "The platform's analytical tools and community insights have helped me develop more precise betting strategies."
  }
];

const TESTIMONIALS_PER_PAGE = 3;

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(testimonials.length / TESTIMONIALS_PER_PAGE);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentTestimonials = testimonials.slice(
    currentPage * TESTIMONIALS_PER_PAGE,
    (currentPage + 1) * TESTIMONIALS_PER_PAGE
  );

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-accent/5 to-background relative overflow-hidden">
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
            What Our Members Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of successful bettors who have improved their results with PromoGuy Plus
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentTestimonials.map((testimonial, i) => (
              <motion.div
                key={`${testimonial.name}-${currentPage}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-12 w-12 border-2 border-primary/20">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="ml-4">
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {testimonial.content}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevPage}
              className="rounded-full hover:bg-primary/10"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextPage}
              className="rounded-full hover:bg-primary/10"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
