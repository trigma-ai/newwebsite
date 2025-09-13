import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import Container from "@/components/Container";
import Section from "@/components/Section";

const HeroSection = () => {
  return (
    <Section className="relative overflow-hidden">
      {/* Background Effects (decorative) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-auto -z-10 pointer-events-none top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-neon opacity-80 blur-3xl rounded-full"></div>
        <div className="absolute inset-auto -z-10 pointer-events-none top-1/4 right-1/4 w-[300px] h-[600px] bg-cyber-cyan/30 blur-3xl rounded-full opacity-60 rotate-45"></div>
        <div className="absolute inset-auto -z-10 pointer-events-none bottom-1/4 left-1/4 w-[400px] h-[200px] bg-neon-green/20 blur-3xl rounded-full opacity-40 -rotate-45"></div>
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-10 items-center min-h-screen">
          {/* Left column: text content */}
          <div className="text-center lg:text-left space-y-8 max-w-3xl mx-auto lg:mx-0">
            <div className="inline-block bg-neon-green px-8 py-1 rounded-full">
              <span className="font-poppins text-dark-green font-medium text-sm tracking-[0.2em] uppercase">
                Future Platform
              </span>
            </div>

            <h1 className="font-rethink font-semibold text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground uppercase">
              Welcome to the
              <br />
              <span className="text-neon-green">Future</span>
            </h1>

            <p className="font-poppins text-base md:text-lg text-foreground/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Experience the next generation of technology with our innovative platform designed for the digital age.
            </p>

            <div className="pt-4">
              <Button className="bg-neon-green text-dark-green hover:bg-neon-green-dark font-poppins font-medium text-base px-8 py-6 h-auto rounded-xl group transition-all duration-300 shadow-glow-neon">
                Get Started
                <div className="ml-4 p-2 bg-neon-green-dark rounded-md group-hover:bg-dark-green transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Button>
            </div>

            {/* Rating and subtitle inline instead of absolute */}
            <div className="pt-10 space-y-6">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-6 h-6 bg-rating-orange rounded-sm"></div>
                  ))}
                </div>
              </div>
              <h2 className="font-rethink text-2xl md:text-3xl text-foreground text-center lg:text-left">
                Innovation Meets Excellence
              </h2>
            </div>

            {/* Feature indicators */}
            <div className="pt-8 space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-8 font-poppins text-sm text-foreground/80">
                <div className="flex items-center gap-2">
                  <div className="w-32 h-px bg-neon-green-dark"></div>
                  <ArrowRight className="w-3 h-3" />
                </div>
                <span>Advanced Technology</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-8 font-poppins text-sm text-foreground/80">
                <span>Seamless Integration</span>
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" />
                  <div className="w-32 h-px bg-neon-green-dark"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: large play button */}
          <div className="flex justify-center lg:justify-end">
            <Button
              size="icon"
              className="w-20 h-20 rounded-full bg-surface-glass/20 border border-neon-green backdrop-blur-sm hover:bg-surface-glass/30 transition-all duration-300"
            >
              <Play className="w-8 h-8 text-neon-green fill-neon-green ml-1" />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HeroSection;