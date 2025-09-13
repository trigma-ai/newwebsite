import Container from "@/components/Container";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";

export default function WhyChooseUsSection() {
  return (
    <Section className="bg-[#0B150C]" aria-label="why-choose-us">
      <Container>
        <div className="mb-10">
          <div className="inline-flex items-center justify-center rounded-3xl border border-[#91ffae]/60 bg-[rgba(145,255,174,0.14)] px-5 py-1.5">
            <span className="text-[#91ffae] text-lg">Why Choose Us</span>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-[1.2fr,1fr] gap-8 items-start">
            <h2 className="text-4xl md:text-5xl font-normal font-[Rethink_Sans]">Advanced Hybrid Reasoning, Measurable Marketing Impact</h2>
            <div>
              <p className="text-white/90 max-w-md">
                Why settle for basic analytics when you can have AI that combines your data, model outputs, and brand intelligence—purpose-built for Pharma & CPG?
              </p>
              <div className="mt-6">
                <Button className="bg-neon-green text-dark-green hover:bg-neon-green-dark font-poppins font-medium text-base px-8 py-6 h-auto rounded-xl transition-all duration-300 shadow-glow-neon">
                  Request a Demo
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-lg">
            <div className="h-40 w-full rounded-2xl bg-[#c4c4c4]/20" />
            <h3 className="mt-6 text-2xl font-[Rethink_Sans]">Scales With Your Data Complexity</h3>
            <p className="mt-3 text-white/90">From dashboards to enterprise Cloud integration—our system handles comprehensive pharma & CPG data pipelines with proprietary, trained AI model precision.</p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-lg">
            <div className="h-40 w-full rounded-2xl bg-[#c4c4c4]/20" />
            <h3 className="mt-6 text-2xl font-[Rethink_Sans]">No Data Science Overwhelm</h3>
            <p className="mt-3 text-white/90">Get actionable recommendations, channel attribution, and ROI insights through an intuitive conversational AI—no PhD required.</p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-lg">
            <div className="h-40 w-full rounded-2xl bg-[#c4c4c4]/20" />
            <h3 className="mt-6 text-2xl font-[Rethink_Sans]">Future-Proof AI Architecture</h3>
            <p className="mt-3 text-white/90">Our hybrid reasoning combines live model outputs, vectorized context, and LLM intelligence—adapting to dynamic brand and market shifts.</p>
          </article>
        </div>
      </Container>
    </Section>
  );
}




