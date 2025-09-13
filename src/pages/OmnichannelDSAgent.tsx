import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, CheckCircle, Zap, Target, TrendingUp, Shield, Users, BarChart3, Settings, Brain, Clock, Eye, ArrowRight, Play, BarChart, Globe, Smartphone, Monitor } from "lucide-react";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IntegrationsCarousel from "@/components/IntegrationsCarousel";

export default function OmnichannelDSAgent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className="min-h-screen text-white font-poppins bg-[#0B150C]">
      <Header />
      {/* Meta tags would be added in a real implementation */}
      
      {/* Hero Section */}
      <Section className="relative">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-neon opacity-30 blur-3xl rounded-full transition-all duration-2000 ${isVisible ? 'scale-100 opacity-30' : 'scale-50 opacity-0'}`}></div>
          <div className={`absolute top-1/4 right-1/4 w-[300px] h-[600px] bg-cyber-cyan/20 blur-3xl rounded-full opacity-40 rotate-45 transition-all duration-2000 delay-500 ${isVisible ? 'scale-100 opacity-40' : 'scale-50 opacity-0'}`}></div>
          <div className={`absolute bottom-1/4 left-1/4 w-[400px] h-[200px] bg-neon-green/15 blur-3xl rounded-full opacity-30 -rotate-45 transition-all duration-2000 delay-1000 ${isVisible ? 'scale-100 opacity-30' : 'scale-50 opacity-0'}`}></div>
        </div>

        <Container>
          {/* Back Button */}
          <div className={`mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-neon-green hover:text-neon-green-dark transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>

          {/* Hero Content */}
          <div className="text-center mb-16">
            <div className={`inline-flex items-center justify-center rounded-3xl border border-[#91ffae]/60 bg-[rgba(145,255,174,0.14)] px-5 py-1.5 mb-6 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}`}>
              <span className="text-[#91ffae] text-lg">AI Agent</span>
            </div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-normal font-[Rethink_Sans] mb-6 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              Omnichannel DS Agent
            </h1>
            <p className={`text-white/90 max-w-3xl mx-auto text-xl leading-relaxed mb-8 transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              Unify your digital presence across all channels with intelligent automation.
            </p>
            
            {/* Hero Bullets */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto transition-all duration-1000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="flex items-center gap-3 text-left">
                <CheckCircle className="w-6 h-6 text-neon-green flex-shrink-0" />
                <span className="text-white/90">Seamlessly connect all digital touchpoints</span>
              </div>
              <div className="flex items-center gap-3 text-left">
                <Brain className="w-6 h-6 text-neon-green flex-shrink-0" />
                <span className="text-white/90">AI-powered content optimization</span>
              </div>
              <div className="flex items-center gap-3 text-left">
                <Zap className="w-6 h-6 text-neon-green flex-shrink-0" />
                <span className="text-white/90">Real-time performance analytics</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-1300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <button className="bg-neon-green text-dark-green hover:bg-neon-green-dark font-poppins font-medium text-base px-8 py-4 rounded-xl transition-all duration-300 shadow-glow-neon hover:scale-105">
                Request a Demo
              </button>
              <button className="flex items-center gap-2 border border-neon-green/50 text-neon-green hover:bg-neon-green/10 font-poppins font-medium text-base px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105">
                <Download className="w-4 h-4" />
                Download Product Sheet
              </button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Value Proposition */}
      <Section className="bg-[#0B150C]/50">
        <Container>
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-neon-green/30 transition-all duration-300">
                <Globe className="w-8 h-8 text-neon-green" />
              </div>
              <h3 className="text-xl font-[Rethink_Sans] font-bold mb-3 text-white group-hover:text-neon-green transition-colors">Unified Experience</h3>
              <p className="text-white/90">Create consistent brand experiences across all digital channels.</p>
            </div>
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-neon-green/30 transition-all duration-300">
                <Target className="w-8 h-8 text-neon-green" />
              </div>
              <h3 className="text-xl font-[Rethink_Sans] font-bold mb-3 text-white group-hover:text-neon-green transition-colors">Smart Targeting</h3>
              <p className="text-white/90">AI-driven audience segmentation and personalized content delivery.</p>
            </div>
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-neon-green/30 transition-all duration-300">
                <Shield className="w-8 h-8 text-neon-green" />
              </div>
              <h3 className="text-xl font-[Rethink_Sans] font-bold mb-3 text-white group-hover:text-neon-green transition-colors">Compliance Ready</h3>
              <p className="text-white/90">Built-in regulatory compliance for healthcare and pharmaceutical industries.</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* What It Does */}
      <Section>
        <Container>
          <h2 className={`text-3xl md:text-4xl font-[Rethink_Sans] font-bold mb-12 text-center transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>What It Does</h2>
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            {[
              { title: "Cross-Channel Integration", desc: "Connect websites, social media, email, and mobile apps seamlessly." },
              { title: "Content Optimization", desc: "AI-powered content creation and optimization for each channel." },
              { title: "Audience Segmentation", desc: "Advanced targeting based on behavior, demographics, and preferences." },
              { title: "Performance Analytics", desc: "Real-time insights across all channels with unified reporting." },
              { title: "Automated Workflows", desc: "Streamline content publishing and campaign management." },
              { title: "Compliance Management", desc: "Ensure regulatory compliance across all digital touchpoints." }
            ].map((item, index) => (
              <div key={index} className="rounded-[20px] border border-[#31422d] bg-[rgba(23,39,25,0.25)] p-6 hover:border-neon-green/50 hover:bg-[rgba(23,39,25,0.35)] transition-all duration-300 hover:scale-105 group">
                <h3 className="text-xl font-[Rethink_Sans] font-bold mb-3 text-neon-green group-hover:text-neon-green-dark transition-colors">{item.title}</h3>
                <p className="text-white/90">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* How It Works */}
      <Section className="bg-[#0B150C]/50">
        <Container>
          <h2 className={`text-3xl md:text-4xl font-[Rethink_Sans] font-bold mb-12 text-center transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>How It Works</h2>
          <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Workflow Steps */}
              <div className="space-y-6">
                {[
                  { step: "1", title: "Channel Integration", desc: "Connect all your digital platforms and data sources." },
                  { step: "2", title: "Audience Analysis", desc: "AI analyzes user behavior and preferences across channels." },
                  { step: "3", title: "Content Optimization", desc: "Automatically optimize content for each channel and audience." },
                  { step: "4", title: "Campaign Execution", desc: "Deploy coordinated campaigns across all touchpoints." },
                  { step: "5", title: "Performance Monitoring", desc: "Track results and continuously improve performance." }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group hover:scale-105 transition-all duration-300">
                    <div className="w-8 h-8 bg-neon-green rounded-full flex items-center justify-center text-dark-green font-bold text-sm flex-shrink-0 mt-1 group-hover:bg-neon-green-dark transition-colors">{item.step}</div>
                    <div>
                      <h3 className="text-xl font-[Rethink_Sans] font-bold mb-2 text-neon-green group-hover:text-neon-green-dark transition-colors">{item.title}</h3>
                      <p className="text-white/90">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Workflow Diagram Placeholder */}
              <div className="rounded-[20px] border border-[#31422d] bg-[rgba(23,39,25,0.25)] p-8 h-96 flex items-center justify-center hover:border-neon-green/50 hover:bg-[rgba(23,39,25,0.35)] transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-neon-green" />
                  </div>
                  <p className="text-white/90">Omnichannel Workflow</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Benefits */}
      <Section>
        <Container>
          <h2 className={`text-3xl md:text-4xl font-[Rethink_Sans] font-bold mb-12 text-center transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>Benefits</h2>
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            {[
              { title: "Consistency", desc: "Maintain brand consistency across all digital channels" },
              { title: "Efficiency", desc: "Automate repetitive tasks and streamline workflows" },
              { title: "Engagement", desc: "Increase user engagement through personalized experiences" },
              { title: "Insights", desc: "Gain comprehensive insights into cross-channel performance" },
              { title: "Compliance", desc: "Ensure regulatory compliance across all touchpoints" }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 group hover:scale-105 transition-all duration-300">
                <CheckCircle className="w-6 h-6 text-neon-green flex-shrink-0 mt-1 group-hover:text-neon-green-dark transition-colors" />
                <div>
                  <h3 className="text-lg font-[Rethink_Sans] font-bold mb-2 text-white group-hover:text-neon-green transition-colors">{item.title}</h3>
                  <p className="text-white/90 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Key Differentiators */}
      <Section className="bg-[#0B150C]/50">
        <Container>
          <h2 className={`text-3xl md:text-4xl font-[Rethink_Sans] font-bold mb-12 text-center transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>Key Differentiators</h2>
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            {[
              { icon: Users, title: "AI-Powered", desc: "Advanced machine learning for content optimization" },
              { icon: Clock, title: "Real-Time", desc: "Live monitoring and instant campaign adjustments" },
              { icon: Target, title: "Industry-Specific", desc: "Built for healthcare and pharmaceutical compliance" },
              { icon: Settings, title: "Scalable", desc: "Grows with your business needs" }
            ].map((item, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-neon-green/30 transition-all duration-300">
                  <item.icon className="w-8 h-8 text-neon-green group-hover:text-neon-green-dark transition-colors" />
                </div>
                <h3 className="text-lg font-[Rethink_Sans] font-bold mb-3 text-white group-hover:text-neon-green transition-colors">{item.title}</h3>
                <p className="text-white/90 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Use Cases */}
      <Section>
        <Container>
          <h2 className={`text-3xl md:text-4xl font-[Rethink_Sans] font-bold mb-12 text-center transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>Use Cases</h2>
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            {[
              { title: "Brand Performance", desc: "Detect shifts, explain, recommend actions" },
              { title: "Field & CRM", desc: "Targeting refresh, next-best-action" },
              { title: "eComm & Media", desc: "Budget re-allocation, creative/placement insights" },
              { title: "Launch Readiness", desc: "Demand forecasting, supply alignment" }
            ].map((item, index) => (
              <div key={index} className="rounded-[20px] border border-[#31422d] bg-[rgba(23,39,25,0.25)] p-6 text-center hover:border-neon-green/50 hover:bg-[rgba(23,39,25,0.35)] transition-all duration-300 hover:scale-105 group">
                <h3 className="text-lg font-[Rethink_Sans] font-bold mb-2 text-neon-green group-hover:text-neon-green-dark transition-colors">{item.title}</h3>
                <p className="text-white/90 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Outcomes & Proof */}
      <Section className="bg-[#0B150C]/50">
        <Container>
          <h2 className={`text-3xl md:text-4xl font-[Rethink_Sans] font-bold mb-12 text-center transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>Outcomes & Proof</h2>
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            {[
              { value: "+45%", desc: "Increase in cross-channel engagement" },
              { value: "-60%", desc: "Reduction in content creation time" },
              { value: "+30%", desc: "Improvement in conversion rates" }
            ].map((item, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-neon-green mb-2 group-hover:text-neon-green-dark transition-colors">{item.value}</div>
                <p className="text-white/90 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Integrations */}
      <Section>
        <Container>
          <h2 className={`text-3xl md:text-4xl font-[Rethink_Sans] font-bold mb-12 text-center transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>Integrations</h2>
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <IntegrationsCarousel 
              integrations={['WordPress', 'Shopify', 'Mailchimp', 'HubSpot', 'Google Analytics', 'Facebook Ads', 'Google Ads', 'LinkedIn', 'Twitter', 'Instagram', 'TikTok', 'YouTube', 'MCP']}
            />
          </div>
          <p className="text-center text-white/70 mt-8">"Seamlessly integrates with your existing digital marketing stack."</p>
        </Container>
      </Section>

      {/* Security & Compliance */}
      <Section className="bg-[#0B150C]/50">
        <Container>
          <h2 className={`text-3xl md:text-4xl font-[Rethink_Sans] font-bold mb-12 text-center transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>Security & Compliance</h2>
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            {[
              { icon: Shield, title: "GDPR & HIPAA Compliant", desc: "Built-in compliance for healthcare and data protection" },
              { icon: Settings, title: "Enterprise Security", desc: "SOC2 certified with advanced security measures" },
              { icon: CheckCircle, title: "Audit Trails", desc: "Complete tracking and reporting for compliance" }
            ].map((item, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-neon-green/30 transition-all duration-300">
                  <item.icon className="w-8 h-8 text-neon-green group-hover:text-neon-green-dark transition-colors" />
                </div>
                <h3 className="text-xl font-[Rethink_Sans] font-bold mb-3 text-white group-hover:text-neon-green transition-colors">{item.title}</h3>
                <p className="text-white/90">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Pricing */}
      <Section>
        <Container>
          <h2 className={`text-3xl md:text-4xl font-[Rethink_Sans] font-bold mb-12 text-center transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>Pricing</h2>
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            {[
              { title: "Starter", desc: "Basic omnichannel management for small teams", button: "Get Started" },
              { title: "Professional", desc: "Advanced features with AI optimization", button: "Get Started", featured: true },
              { title: "Enterprise", desc: "Full suite with custom integrations", button: "Contact Sales" }
            ].map((plan, index) => (
              <div key={index} className={`rounded-[20px] border ${plan.featured ? 'border-neon-green/50 bg-[rgba(23,39,25,0.35)]' : 'border-[#31422d] bg-[rgba(23,39,25,0.25)]'} p-8 text-center hover:scale-105 transition-all duration-300 hover:border-neon-green/50 hover:bg-[rgba(23,39,25,0.35)] group`}>
                <h3 className="text-2xl font-[Rethink_Sans] font-bold mb-4 text-neon-green group-hover:text-neon-green-dark transition-colors">{plan.title}</h3>
                <p className="text-white/90 mb-6">{plan.desc}</p>
                <button className="w-full bg-neon-green text-dark-green hover:bg-neon-green-dark font-poppins font-medium py-3 rounded-xl transition-all duration-300 hover:scale-105">{plan.button}</button>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="bg-[#0B150C]/50">
        <Container>
          <h2 className={`text-3xl md:text-4xl font-[Rethink_Sans] font-bold mb-12 text-center transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>Frequently Asked Questions</h2>
          <div className={`max-w-4xl mx-auto space-y-6 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            {[
              { q: "How does this differ from traditional CMS?", a: "Omnichannel DS Agent goes beyond content management to provide AI-powered optimization, cross-channel coordination, and real-time performance analytics." },
              { q: "Can we integrate with existing tools?", a: "Yes, we offer extensive API integrations with popular marketing tools, CMS platforms, and analytics services." },
              { q: "Is it suitable for healthcare companies?", a: "Absolutely. We include built-in compliance features for HIPAA, GDPR, and other healthcare regulations." },
              { q: "How long does implementation take?", a: "Basic setup typically takes 2-4 weeks, with full integration depending on your existing tech stack." },
              { q: "Do you provide training and support?", a: "Yes, we offer comprehensive training, documentation, and ongoing support to ensure success." },
              { q: "Can we customize the AI algorithms?", a: "Yes, our AI models can be trained on your specific data and business rules for optimal performance." }
            ].map((faq, index) => (
              <div key={index} className="rounded-[20px] border border-[#31422d] bg-[rgba(23,39,25,0.25)] p-6 hover:border-neon-green/50 hover:bg-[rgba(23,39,25,0.35)] transition-all duration-300 hover:scale-105 group">
                <h3 className="text-lg font-[Rethink_Sans] font-bold mb-3 text-neon-green group-hover:text-neon-green-dark transition-colors">{faq.q}</h3>
                <p className="text-white/90">{faq.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA/Lead Form */}
      <Section>
        <Container>
          <div className={`max-w-2xl mx-auto text-center transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                         <h2 className="text-3xl md:text-4xl font-[Rethink_Sans] font-bold mb-8">Ready to optimize your commercial operation?</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full px-4 py-3 rounded-lg border border-[#31422d] bg-[rgba(23,39,25,0.25)] text-white placeholder-white/50 focus:border-neon-green focus:outline-none transition-all duration-300 hover:border-neon-green/30"
                />
                <input 
                  type="email" 
                  placeholder="Work Email" 
                  className="w-full px-4 py-3 rounded-lg border border-[#31422d] bg-[rgba(23,39,25,0.25)] text-white placeholder-white/50 focus:border-neon-green focus:outline-none transition-all duration-300 hover:border-neon-green/30"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Company" 
                  className="w-full px-4 py-3 rounded-lg border border-[#31422d] bg-[rgba(23,39,25,0.25)] text-white placeholder-white/50 focus:border-neon-green focus:outline-none transition-all duration-300 hover:border-neon-green/30"
                />
                <input 
                  type="text" 
                  placeholder="Industry" 
                  className="w-full px-4 py-3 rounded-lg border border-[#31422d] bg-[rgba(23,39,25,0.25)] text-white placeholder-white/50 focus:border-neon-green focus:outline-none transition-all duration-300 hover:border-neon-green/30"
                />
              </div>
              <textarea 
                placeholder="Message" 
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-[#31422d] bg-[rgba(23,39,25,0.25)] text-white placeholder-white/50 focus:border-neon-green focus:outline-none resize-none transition-all duration-300 hover:border-neon-green/30"
              />
              <button 
                type="submit" 
                className="w-full bg-neon-green text-dark-green hover:bg-neon-green-dark font-poppins font-medium text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-glow-neon hover:scale-105"
              >
                Talk to an Expert
              </button>
            </form>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
