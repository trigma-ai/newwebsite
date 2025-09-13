import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0B150C]/80 backdrop-blur supports-[backdrop-filter]:bg-[#0B150C]/60 border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="font-poppins font-semibold text-[18px] tracking-[0.25em] text-grownetic-green uppercase">
          TRIGMA AI
        </Link>

        <nav className="hidden md:flex items-center gap-6 font-poppins text-sm text-white/80">
          <NavLink to="/omnichannel-ds-agent" className={({ isActive }) => `transition-colors ${isActive ? "text-white" : "hover:text-white"}`}>
            Omnichannel DS Agent
          </NavLink>
          <NavLink to="/products/scenario-planner-agent" className={({ isActive }) => `transition-colors ${isActive ? "text-white" : "hover:text-white"}`}>
            Scenario Planner
          </NavLink>
          <NavLink to="/products/revops-agent" className={({ isActive }) => `transition-colors ${isActive ? "text-white" : "hover:text-white"}`}>
            RevOps Agent
          </NavLink>
        </nav>

        <div className="hidden md:block">
          <Link to="#contact" className="inline-flex items-center gap-3 bg-neon-green text-dark-green px-5 py-2 rounded-[10px] font-poppins text-[14px] hover:bg-neon-green-dark transition-colors">
            Contact us
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/10 text-white/90"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0B150C]/95">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-3 font-poppins text-white/90">
            <NavLink to="/omnichannel-ds-agent" className={({ isActive }) => `py-2 ${isActive ? "text-white" : "text-white/80"}`} onClick={() => setMobileOpen(false)}>
              Omnichannel DS Agent
            </NavLink>
            <NavLink to="/products/scenario-planner-agent" className={({ isActive }) => `py-2 ${isActive ? "text-white" : "text-white/80"}`} onClick={() => setMobileOpen(false)}>
              Scenario Planner
            </NavLink>
            <NavLink to="/products/revops-agent" className={({ isActive }) => `py-2 ${isActive ? "text-white" : "text-white/80"}`} onClick={() => setMobileOpen(false)}>
              RevOps Agent
            </NavLink>
            <Link to="#contact" className="mt-2 inline-flex items-center justify-center gap-2 bg-neon-green text-dark-green px-4 py-2 rounded-[10px]" onClick={() => setMobileOpen(false)}>
              Contact us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}


