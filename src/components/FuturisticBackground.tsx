import * as React from "react";
import { cn } from "@/lib/utils";

type FuturisticBackgroundProps = {
  className?: string;
};

/**
 * Layered, animated background for a futuristic vibe.
 * Renders blurred aurora gradients, subtle grid, scanline and floating orbs.
 * Non-interactive and sits behind content.
 */
const FuturisticBackground: React.FC<FuturisticBackgroundProps> = ({ className }) => {
  return (
    <div className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)} aria-hidden="true">
      {/* Aurora gradient wash */}
      <div className="absolute -inset-[12%] animate-aurora opacity-[0.35] [filter:blur(120px)]" />

      {/* Radial center glow */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(1200px 600px at 50% 20%, hsl(var(--surface-glass) / 0.8), transparent 60%)"
      }} />

      {/* Subtle grid with vignette mask */}
      <div className="absolute inset-0 bg-grid opacity-[0.08]" />

      {/* Soft scanline sweep */}
      <div className="scanline animate-scan" />

      {/* Floating orbs */}
      <div className="absolute -top-10 -right-10 w-[42vw] max-w-[680px] aspect-square rounded-full bg-cyber-cyan/15 blur-3xl animate-float-slow" />
      <div className="absolute -bottom-16 -left-16 w-[48vw] max-w-[720px] aspect-square rounded-full bg-neon-green/12 blur-3xl animate-float-slow [animation-delay:1.2s]" />
    </div>
  );
};

export default FuturisticBackground;


