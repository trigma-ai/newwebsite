import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, CheckCircle, Target, Shield, Users, Settings, BarChart, Activity, TrendingUp, Clock, Database } from "lucide-react";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IntegrationsCarousel from "@/components/IntegrationsCarousel";

export default function RevOpsAgent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = "RevOps Agent | Trigma AI";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "AI-агент, который соединяет маркетинг, продажи и финансы, автоматизируя Revenue Operations для ускоренного роста и прозрачности бизнеса.");
    
    // Trigger animations after component mounts
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className="min-h-screen text-white font-poppins bg-[#0B150C]">
      <Header />
      {/* Hero */}
      <Section className="relative">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-neon opacity-30 blur-3xl rounded-full transition-all duration-2000 ${isVisible ? 'scale-100 opacity-30' : 'scale-50 opacity-0'}`} />
          <div className={`absolute top-1/4 right-1/4 w-[300px] h-[600px] bg-cyber-cyan/20 blur-3xl rounded-full opacity-40 rotate-45 transition-all duration-2000 delay-500 ${isVisible ? 'scale-100 opacity-40' : 'scale-50 opacity-0'}`} />
          <div className={`absolute bottom-1/4 left-1/4 w-[400px] h-[200px] bg-neon-green/15 blur-3xl rounded-full opacity-30 -rotate-45 transition-all duration-2000 delay-1000 ${isVisible ? 'scale-100 opacity-30' : 'scale-50 opacity-0'}`} />
        </div>
        <Container>
          <div className={`mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <Link to="/" className="inline-flex items-center gap-2 text-neon-green hover:text-neon-green-dark transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </div>

          <div className="text-center mb-16">
            <div className={`inline-flex items-center justify-center rounded-3xl border border-[#91ffae]/60 bg-[rgba(145,255,174,0.14)] px-5 py-1.5 mb-6 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}`}>
              <span className="text-[#91ffae] text-lg">AI Agent</span>
            </div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-normal font-[Rethink_Sans] mb-6 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>RevOps Agent</h1>
            <p className={`text-white/90 max-w-3xl mx-auto text-xl leading-relaxed mb-8 transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>Align marketing, sales, and finance in one intelligent flow.</p>

            <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto transition-all duration-1000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="flex items-center gap-3 text-left">
                <CheckCircle className="w-6 h-6 text-neon-green flex-shrink-0" />
                <span className="text-white/90">Breaks silos between departments</span>
              </div>
              <div className="flex items-center gap-3 text-left">
                <Activity className="w-6 h-6 text-neon-green flex-shrink-0" />
                <span className="text-white/90">Provides real-time revenue insights</span>
              </div>
              <div className="flex items-center gap-3 text-left">
                <TrendingUp className="w-6 h-6 text-neon-green flex-shrink-0" />
                <span className="text-white/90">Automates forecasting and pipeline health</span>
              </div>
            </div>

            <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-1300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <button className="bg-neon-green text-dark-green hover:bg-neon-green-dark font-poppins font-medium text-base px-8 py-4 rounded-xl transition-all duration-300 shadow-glow-neon hover:scale-105">Request a Demo</button>
              <button className="flex items-center gap-2 border border-neon-green/50 text-neon-green hover:bg-neon-green/10 font-poppins font-medium text-base px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105">
                <Download className="w-4 h-4" /> Download Product Sheet
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
              <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-neon-green/30 transition-all duration-300"><Database className="w-8 h-8 text-neon-green" /></div>
              <h3 className="text-xl font-[Rethink_Sans] font-bold mb-3 text-white">Unified Revenue View</h3>
              <p className="text-white/90">All revenue-driving functions connected in one AI system.</p>
            </div>
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-neon-green/30 transition-all duration-300"><BarChart className="w-8 h-8 text-neon-green" /></div>
              <h3 className="text-xl font-[Rethink_Sans] font-bold mb-3 text-white">Smarter Forecasting</h3>
              <p className="text-white/90">Predict revenue with higher accuracy across teams.</p>
            </div>
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-neon-green/30 transition-all duration-300"><Users className="w-8 h-8 text-neon-green" /></div>
              <h3 className="text-xl font-[Rethink_Sans] font-bold mb-3 text-white">Operational Alignment</h3>
              <p className="text-white/90">Synchronise decisions from boardroom to field force.</p>
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
              { title: "Revenue Intelligence Hub", desc: "Single source of truth for pipeline, sales, marketing, and finance data." },
              { title: "Forecast Accuracy", desc: "AI-enhanced predictions on revenue, churn, and deal velocity." },
              { title: "Pipeline Health Monitoring", desc: "Always-on insights into risks and opportunities." },
              { title: "Cross-Functional Dashboards", desc: "Unified reporting for leadership, sales, and marketing." },
              { title: "Actionable Recommendations", desc: "Next-best actions for reps, marketers, and finance leaders." },
              { title: "Scenario-Based Planning", desc: "Simulate revenue outcomes under different strategies." }
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
              <div className="space-y-6">
                {[
                  { step: "1", title: "Ingest Data", desc: "CRM, ERP, Marketing Automation, Finance systems." },
                  { step: "2", title: "Unify & Harmonise", desc: "Resolve IDs, clean and align metrics." },
                  { step: "3", title: "Analyse & Forecast", desc: "AI models generate predictions, scenarios, and anomalies." },
                  { step: "4", title: "Recommend Actions", desc: "Target accounts, adjust budgets, flag risks." },
                  { step: "5", title: "Execute & Align", desc: "Sync back to CRM/finance tools, align KPIs across teams." }
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
              <div className="rounded-[20px] border border-[#31422d] bg-[rgba(23,39,25,0.25)] p-8 h-96 flex items-center justify-center hover:border-neon-green/50 hover:bg-[rgba(23,39,25,0.35)] transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4"><Settings className="w-8 h-8 text-neon-green" /></div>
                  <p className="text-white/90">RevOps Workflow Diagram</p>
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
              { title: "Efficiency", desc: "Automates manual reporting and reconciliations." },
              { title: "Accuracy", desc: "Improves forecast reliability by 20–30%." },
              { title: "Visibility", desc: "One transparent view of revenue health." },
              { title: "Collaboration", desc: "Sales, marketing, and finance finally speaking the same language." },
              { title: "Growth", desc: "Focus resources on the highest-impact opportunities." }
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
              { icon: Users, title: "Human-in-the-Loop", desc: "Sales/finance leaders can override or validate AI forecasts." },
              { icon: Clock, title: "Always-on Monitoring", desc: "Pipeline risks detected early." },
              { icon: Target, title: "Business Context", desc: "Industry-specific KPIs and benchmarks included." },
              { icon: Shield, title: "Integration-First", desc: "Works natively with Salesforce, HubSpot, Netsuite, SAP, Snowflake." }
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
              { title: "Revenue Forecasting", desc: "Weekly predictions for board and sales teams." },
              { title: "Pipeline Optimisation", desc: "Identify stalled deals and resource misallocation." },
              { title: "Budget Alignment", desc: "Sync marketing spend with expected revenue impact." },
              { title: "Product Portfolio Optimization", desc: "Optimize product mix and pricing strategies for maximum revenue impact." }
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
          <div className={`grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            {[
              { value: "+40%", desc: "Improvement in forecast accuracy" },
              { value: "2×", desc: "Faster quarterly planning cycles" },
              { value: "+20%", desc: "Better pipeline conversion" },
              { value: "-30%", desc: "Reduction in manual reporting effort" }
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
              integrations={["Salesforce", "HubSpot", "Netsuite", "SAP", "QuickBooks", "Marketo", "Eloqua", "Google Ads", "Meta", "Snowflake", "BigQuery", "AWS", "Azure", "MCP"]}
            />
          </div>
        </Container>
      </Section>

      {/* Security & Compliance */}
      <Section className="bg-[#0B150C]/50">
        <Container>
          <h2 className={`text-3xl md:text-4xl font-[Rethink_Sans] font-bold mb-12 text-center transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>Security & Compliance</h2>
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            {[
              { icon: Shield, title: "SOC2 and GDPR-ready", desc: "Enterprise-grade compliance and privacy" },
              { icon: Users, title: "RBAC + VPC / On-prem", desc: "Role-based access control and deployment options" },
              { icon: Settings, title: "Model Audit Trails", desc: "Versioning, approvals and governance" }
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
              { title: "Starter", desc: "AI-assisted forecasts, dashboards, CRM integration", button: "Get Started" },
              { title: "Growth", desc: "Multi-department integration, anomaly detection, API access", button: "Get Started", featured: true },
              { title: "Enterprise", desc: "Custom KPIs, private deployment, SLA, dedicated support", button: "Contact Sales" }
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
              { q: "How does this differ from CRM dashboards?", a: "RevOps Agent unifies data across departments and provides AI-driven forecasts and recommendations, beyond static CRM dashboards." },
              { q: "Can we customise KPIs?", a: "Yes, custom KPIs and benchmarks can be configured per brand/market." },
              { q: "How reliable are the forecasts?", a: "Forecasts improve over time with data and feedback; typical gains 20–30% in reliability." },
              { q: "Does it replace finance reporting systems?", a: "No, it complements finance systems by integrating and aligning insights across teams." },
              { q: "How fast is implementation?", a: "Initial rollout typically takes 2–8 weeks depending on integrations and data readiness." },
              { q: "Is data safe in regulated industries?", a: "Yes, with SOC2/GDPR, RBAC, audit trails, and VPC/on-prem deployment options." },
            ].map((faq, i) => (
              <div key={i} className="rounded-[20px] border border-[#31422d] bg-[rgba(23,39,25,0.25)] p-6 hover:border-neon-green/50 hover:bg-[rgba(23,39,25,0.35)] transition-all duration-300 hover:scale-105 group">
                <h3 className="text-lg font-[Rethink_Sans] font-bold mb-3 text-neon-green group-hover:text-neon-green-dark transition-colors">{faq.q}</h3>
                <p className="text-white/90">{faq.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA / Lead Form */}
      <Section>
        <Container>
          <div className={`max-w-2xl mx-auto text-center transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                         <h2 className="text-3xl md:text-4xl font-[Rethink_Sans] font-bold mb-8">Ready to optimize your commercial operation?</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-lg border border-[#31422d] bg-[rgba(23,39,25,0.25)] text-white placeholder-white/50 focus:border-neon-green focus:outline-none transition-all duration-300 hover:border-neon-green/30" />
                <input type="email" placeholder="Work Email" className="w-full px-4 py-3 rounded-lg border border-[#31422d] bg-[rgba(23,39,25,0.25)] text-white placeholder-white/50 focus:border-neon-green focus:outline-none transition-all duration-300 hover:border-neon-green/30" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Company" className="w-full px-4 py-3 rounded-lg border border-[#31422d] bg-[rgba(23,39,25,0.25)] text-white placeholder-white/50 focus:border-neon-green focus:outline-none transition-all duration-300 hover:border-neon-green/30" />
                <input type="text" placeholder="Role" className="w-full px-4 py-3 rounded-lg border border-[#31422d] bg-[rgba(23,39,25,0.25)] text-white placeholder-white/50 focus:border-neon-green focus:outline-none transition-all duration-300 hover:border-neon-green/30" />
              </div>
              <textarea placeholder="Message" rows={4} className="w-full px-4 py-3 rounded-lg border border-[#31422d] bg-[rgba(23,39,25,0.25)] text-white placeholder-white/50 focus:border-neon-green focus:outline-none resize-none transition-all duration-300 hover:border-neon-green/30" />
              <button type="submit" className="w-full bg-neon-green text-dark-green hover:bg-neon-green-dark font-poppins font-medium text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-glow-neon hover:scale-105">Talk to an Expert</button>
            </form>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
