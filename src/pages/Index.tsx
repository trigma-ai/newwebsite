import FigmaHero from "@/components/FigmaHero";
import Header from "@/components/Header";
import CompanyLogos from "@/components/CompanyLogos";
import FeaturesSection from "@/components/FeaturesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import InfographicSection from "@/components/InfographicSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import FuturisticBackground from "@/components/FuturisticBackground";
import * as React from "react";
import { useReveal } from "@/hooks/use-reveal";

export default function Index() {
  const pageRef = React.useRef<HTMLDivElement>(null);
  useReveal(pageRef);

  return (
    <div ref={pageRef} className="relative min-h-screen text-white font-poppins overflow-x-hidden bg-[#0B150C]">
      <FuturisticBackground />
      <Header />
      <main className="flex flex-col space-y-16 md:space-y-24 lg:space-y-28">
        <div className="reveal-up is-visible">
          <FigmaHero />
        </div>
        <div className="reveal-up">
          <CompanyLogos />
        </div>
        <div className="reveal-up">
          <InfographicSection />
        </div>
        <div className="reveal-up">
          <FeaturesSection />
        </div>
        <div className="reveal-up">
          <WhyChooseUsSection />
        </div>
        <div className="reveal-up">
          <HowItWorksSection />
        </div>
        <div className="reveal-up">
          <TestimonialsSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}


