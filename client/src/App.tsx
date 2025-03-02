import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Helmet } from "react-helmet";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import PrivacyPolicy from "@/pages/legal/privacy-policy";
import TermsOfService from "@/pages/legal/terms";

// Common metadata for SEO
const defaultMeta = {
  title: "PromoGuy Plus - Expert Sports Betting Community",
  description: "Join PromoGuy Plus for expert betting picks, tools, and community insights. With $100K+ tracked profits, we cover all US states.",
  keywords: "sports betting, EV betting, betting community, PromoGuy Plus, betting picks, sports analytics",
};

function Router() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/legal/privacy-policy" component={PrivacyPolicy} />
          <Route path="/legal/terms" component={TermsOfService} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Helmet>
        <title>{defaultMeta.title}</title>
        <meta name="description" content={defaultMeta.description} />
        <meta name="keywords" content={defaultMeta.keywords} />

        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={defaultMeta.title} />
        <meta property="og:description" content={defaultMeta.description} />
        <meta property="og:site_name" content="PromoGuy Plus" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={defaultMeta.title} />
        <meta name="twitter:description" content={defaultMeta.description} />

        {/* Viewport and Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#1a56db" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Performance Optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </Helmet>

      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;