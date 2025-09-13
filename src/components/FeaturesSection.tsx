import Container from "@/components/Container";
import Section from "@/components/Section";
import { Link } from "react-router-dom";

const imgEllipse1 = "/figma-assets/369f7abef874355096550dc0d9b274dc8f0387a0.svg";
const imgEllipse154 = "/figma-assets/4518168086bb3740145550aa4ea21f7777adff05.svg";
const imgEllipse155 = "/figma-assets/1a9b29d2ed55424f7a4962c97546d16fd840cc66.svg";
const imgSubtract = "/figma-assets/34872826258ff22793710dc363d0304269a6a7a0.svg";
const imgEllipse152 = "/figma-assets/15af764a02896385d95c59582650f2ce03034cf0.svg";
const imgEllipse156 = "/figma-assets/a7f84a053728601c00d6678e2cfc716dfc1498b4.svg";
const imgOmnichannel = "/images/dsagent.png";
const imgScenario = "/images/planneragent.png";
const imgRevOps = "/images/revops.png";

export default function FeaturesSection() {
  return (
    <Section className="bg-[#0B150C] overflow-hidden relative" aria-label="features">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Main gradient background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-neon opacity-30 blur-3xl rounded-full"></div>
        
        {/* Ellipse decorations */}
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[600px] bg-cyber-cyan/20 blur-3xl rounded-full opacity-40 rotate-45"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[200px] bg-neon-green/15 blur-3xl rounded-full opacity-30 -rotate-45"></div>
        
        {/* Additional glow effects */}
        <div className="absolute top-1/3 left-1/3 w-[200px] h-[400px] bg-neon-green/10 blur-2xl rounded-full opacity-25"></div>
        <div className="absolute bottom-1/3 right-1/3 w-[250px] h-[300px] bg-cyber-cyan/15 blur-2xl rounded-full opacity-20"></div>
      </div>

      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center rounded-3xl border border-[#91ffae]/60 bg-[rgba(145,255,174,0.14)] px-5 py-1.5 mb-6">
            <span className="text-[#91ffae] text-lg">Products</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal font-[Rethink_Sans] mb-6">
            Our AI Agents
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto text-lg">
            Our AI features are designed for scalability smart today, smarter tomorrow.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 - Clickable */}
          <Link to="/omnichannel-ds-agent" className="block group">
            <article className="relative rounded-[20px] border border-[#31422d] bg-[rgba(23,39,25,0.25)] p-6 h-full flex flex-col transition-all duration-300 group-hover:border-neon-green/50 group-hover:bg-[rgba(23,39,25,0.35)] group-hover:scale-[1.02]">
              <div className="mb-6 flex justify-center">
                <img src={imgOmnichannel} alt="Omnichannel DS Agent icon" className="w-32 h-32 object-contain" />
              </div>
              <h3 className="text-2xl font-[Rethink_Sans] font-bold mb-3 flex-grow group-hover:text-neon-green transition-colors">
                Omnichannel DS Agent
              </h3>
              <p className="text-white/90">
                Activate only what you need. Add features as your business evolves.
              </p>
            </article>
          </Link>

          {/* Card 2 - Clickable */}
          <Link to="/products/scenario-planner-agent" className="block group">
            <article className="relative rounded-[20px] border border-[#31422d] bg-[rgba(23,39,25,0.25)] p-6 h-full flex flex-col transition-all duration-300 group-hover:border-neon-green/50 group-hover:bg-[rgba(23,39,25,0.35)] group-hover:scale-[1.02]">
              <div className="mb-6 flex justify-center">
                <img src={imgScenario} alt="Scenario Planner Agent icon" className="w-32 h-32 object-contain" />
              </div>
              <h3 className="text-2xl font-[Rethink_Sans] font-bold mb-3 flex-grow group-hover:text-neon-green transition-colors">
                Scenario Planner Agent
              </h3>
              <p className="text-white/90">
                Our AI gets better with use, adapting to your data and workflow.
              </p>
            </article>
          </Link>

          {/* Card 3 - Clickable */}
          <Link to="/products/revops-agent" className="block group">
            <article className="relative rounded-[20px] border border-[#31422d] bg-[rgba(23,39,25,0.25)] p-6 h-full flex flex-col transition-all duration-300 group-hover:border-neon-green/50 group-hover:bg-[rgba(23,39,25,0.35)] group-hover:scale-[1.02]">
              <div className="mb-6 flex justify-center">
                <img src={imgRevOps} alt="RevOps Agent icon" className="w-32 h-32 object-contain" />
              </div>
              <h3 className="text-2xl font-[Rethink_Sans] font-bold mb-3 flex-grow group-hover:text-neon-green transition-colors">
                RevOps Agent
              </h3>
              <p className="text-white/90">
                Connect effortlessly with your existing tools and platforms.
              </p>
            </article>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
