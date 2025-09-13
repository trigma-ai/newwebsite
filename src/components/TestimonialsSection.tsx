import Container from "@/components/Container";
import Section from "@/components/Section";

const img = "/figma-assets/6e1943b57af4ab59fbf04e32ded535242fe419ff.svg";
const imgCtaButton = "/figma-assets/90f5d461bf78914b4247a54bb6537e32cea9577c.svg";
const imgCtaButton1 = "/figma-assets/343ccaf48af16647755a63e186a22fe05c5b3bfb.svg";

export default function TestimonialsSection() {
  return (
    <Section className="relative" aria-label="testimonials">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Main gradient background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-neon opacity-20 blur-3xl rounded-full"></div>
        
        {/* Decorative polygon */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-neon-green/5 border border-neon-green/20 rounded-lg transform rotate-12"></div>
        
        {/* Additional glow effects */}
        <div className="absolute top-1/3 right-1/4 w-[200px] h-[300px] bg-cyber-cyan/15 blur-2xl rounded-full opacity-30"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[250px] h-[150px] bg-neon-green/10 blur-2xl rounded-full opacity-25"></div>
      </div>

      <Container>
        <h2 className="text-4xl md:text-5xl font-normal font-[Rethink_Sans] text-center mb-4">
          Real Stories, Real Growth
        </h2>
        <p className="text-center text-white/80 max-w-3xl mx-auto mb-12">
          Outcomes from leading Pharma & CPG teams using Trigma.AI for omnichannel impact measurement and budget optimization.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <article className="relative rounded-[30px] border border-[#31422d] bg-[rgba(23,39,25,0.3)] p-8">
            <div className="w-16 h-12 flex items-center justify-center mb-6">
              <img src={img} alt="quote" className="w-full h-auto max-w-full max-h-full object-contain" />
            </div>
            <p className="text-base text-white mb-6 leading-relaxed">
              “Trigma.AI helped us unify field & digital impact into one view and reallocate budget with confidence.”
            </p>
            <div className="border-top border-white/10 pt-4">
              <div className="text-xl font-bold text-white">Commercial Excellence Lead</div>
              <div className="text-base text-white/80">ViiV Healthcare</div>
            </div>
          </article>

          <article className="relative rounded-[30px] border border-[#31422d] bg-[rgba(23,39,25,0.3)] p-8">
            <div className="w-16 h-12 flex items-center justify-center mb-6">
              <img src={img} alt="quote" className="w-full h-auto max-w-full max-h-full object-contain" />
            </div>
            <p className="text-base text-white mb-6 leading-relaxed">
              “We moved our performance measurement cadence from quarterly to monthly without adding extra headcount.”
            </p>
            <div className="border-top border-white/10 pt-4">
              <div className="text-xl font-bold text-white">Global Data Science Director</div>
              <div className="text-base text-white/80">GSK</div>
            </div>
          </article>
        </div>

        <div className="flex items-center justify-center gap-6">
          <button className="w-12 h-12 aspect-square rounded-full border border-white/30 bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center">
            <div className="w-6 h-6 flex items-center justify-center">
              <img src={imgCtaButton} alt="prev" className="w-full h-auto max-w-full max-h-full" />
            </div>
          </button>
          <button className="w-12 h-12 aspect-square rounded-full border border-white/30 bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center">
            <div className="w-6 h-6 flex items-center justify-center">
              <img src={imgCtaButton1} alt="next" className="w-full h-auto max-w-full max-h-full rotate-180" />
            </div>
          </button>
        </div>
      </Container>
    </Section>
  );
}


