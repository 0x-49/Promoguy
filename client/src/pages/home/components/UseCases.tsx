import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Binary, Percent, DollarSign, TrendingUp } from "lucide-react";

const useCases = [
  //#1
  {
    title: "MLB Game Analysis",
    category: "Baseball",
    profit: "+$450",
    roi: "15%",
    description: "Found significant edge in pitcher vs. batter matchup statistics",
    analysis: "Mathematical edge identified through advanced sabermetrics and historical data analysis",
    outcome: "Successful +EV play with clear statistical advantage",
    icon: <Binary className="h-6 w-6" />
  },
  //#2
  {
    title: "NBA Player Props",
    category: "Basketball",
    profit: "+$680",
    roi: "22%",
    description: "Identified mispriced player performance lines",
    analysis: "Leveraged injury reports and lineup changes for value betting",
    outcome: "Multiple successful parlays based on correlated outcomes",
    icon: <TrendingUp className="h-6 w-6" />
  },
  //#3
  {
    title: "UFC Fight Night",
    category: "MMA",
    profit: "+$320",
    roi: "18%",
    description: "Exploited odds discrepancy between bookmakers",
    analysis: "Cross-referenced multiple sportsbooks for arbitrage opportunities",
    outcome: "Guaranteed profit through strategic line shopping",
    icon: <DollarSign className="h-6 w-6" />
  },
  //#4
  {
    title: "NFL Game Total",
    category: "Football",
    profit: "+$550",
    roi: "25%",
    description: "Weather impact analysis on game totals",
    analysis: "Combined weather data with historical performance metrics",
    outcome: "Successfully predicted under in adverse conditions",
    icon: <Percent className="h-6 w-6" />
  },
  //#5
  {
    title: "NHL Goal Scoring",
    category: "Hockey",
    profit: "+$290",
    roi: "16%",
    description: "Power play efficiency vs. penalty kill analysis",
    analysis: "Statistical model incorporating special teams performance",
    outcome: "Accurate prediction of high-scoring matchup",
    icon: <TrendingUp className="h-6 w-6" />
  },
  //#6
  {
    title: "Tennis Grand Slam",
    category: "Tennis",
    profit: "+$420",
    roi: "20%",
    description: "Surface-specific performance analysis",
    analysis: "Historical win rates on different court surfaces",
    outcome: "Multiple successful set betting predictions",
    icon: <Binary className="h-6 w-6" />
  },
  //#7
  {
    title: "Soccer Goal Lines",
    category: "Soccer",
    profit: "+$380",
    roi: "19%",
    description: "Expected goals (xG) model application",
    analysis: "Advanced metrics compared to market lines",
    outcome: "Profitable series of Asian handicap bets",
    icon: <DollarSign className="h-6 w-6" />
  },
  //#8
  {
    title: "Golf Tournament",
    category: "Golf",
    profit: "+$780",
    roi: "28%",
    description: "Course history and current form analysis",
    analysis: "Comprehensive statistical model for matchup betting",
    outcome: "Multiple winning head-to-head selections",
    icon: <Percent className="h-6 w-6" />
  },
  //#9
  {
    title: "Boxing Title Fight",
    category: "Boxing",
    profit: "+$520",
    roi: "24%",
    description: "Style matchup and round betting analysis",
    analysis: "Historical pattern recognition for similar matchups",
    outcome: "Accurate method of victory prediction",
    icon: <TrendingUp className="h-6 w-6" />
  },
  //#10
  {
    title: "F1 Race Winner",
    category: "Racing",
    profit: "+$640",
    roi: "26%",
    description: "Track-specific performance analysis",
    analysis: "Weather impact and qualifying position correlation",
    outcome: "Successful longshot winner prediction",
    icon: <Binary className="h-6 w-6" />
  },
  //#11
  {
    title: "Cricket Match",
    category: "Cricket",
    profit: "+$410",
    roi: "21%",
    description: "Pitch conditions and toss advantage analysis",
    analysis: "Historical data model for specific venues",
    outcome: "Profitable innings total predictions",
    icon: <DollarSign className="h-6 w-6" />
  },
  //#12
  {
    title: "Rugby Tournament",
    category: "Rugby",
    profit: "+$340",
    roi: "17%",
    description: "Team composition and injury impact analysis",
    analysis: "Statistical model for points spread betting",
    outcome: "Consistent wins on handicap markets",
    icon: <Percent className="h-6 w-6" />
  }
];

export default function UseCases() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our proven track record across different sports and betting markets
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {useCases.map((useCase, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="border-primary/10 hover:border-primary/20 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-muted-foreground">
                          {useCase.category}
                        </span>
                        <div className="text-primary">{useCase.icon}</div>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                      <p className="text-muted-foreground mb-4">{useCase.description}</p>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-primary font-medium">Profit</span>
                          <span>{useCase.profit}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-primary font-medium">ROI</span>
                          <span>{useCase.roi}</span>
                        </div>
                        
                        <div className="pt-4 border-t border-primary/10">
                          <p className="text-sm text-muted-foreground mb-2">
                            {useCase.analysis}
                          </p>
                          <p className="text-sm font-medium text-primary">
                            {useCase.outcome}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
