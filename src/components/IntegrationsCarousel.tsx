import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

interface IntegrationsCarouselProps {
  integrations: string[];
  className?: string;
}

function MarqueeRow({ items, direction = "left" }: { items: string[]; direction?: "left" | "right" }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const baseTrackRef = useRef<HTMLDivElement>(null);
  const [repeatCount, setRepeatCount] = useState(1);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const baseTrack = baseTrackRef.current;
    if (!container || !baseTrack) return;

    const measure = () => {
      const containerWidth = container.clientWidth;
      const baseWidth = baseTrack.scrollWidth || 1;
      const neededRepeats = Math.max(1, Math.ceil(containerWidth / baseWidth));
      setRepeatCount(neededRepeats);
    };

    measure();
    const handle = () => measure();
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);

  const filled = useMemo(() => Array.from({ length: repeatCount }, () => items).flat(), [items, repeatCount]);
  const animatedClass = direction === "left" ? "animate-scroll-left" : "animate-scroll-right";

  return (
    <div ref={containerRef} className="overflow-hidden">
      {/* Hidden base for measurement */}
      <div className="absolute -z-10 opacity-0 pointer-events-none select-none">
        <div ref={baseTrackRef} className="flex gap-6 whitespace-nowrap">
          {items.map((integration, index) => (
            <div
              key={`measure-${index}`}
              className="rounded-lg border border-[#31422d] bg-[rgba(23,39,25,0.25)] p-4 text-center group flex-shrink-0"
            >
              <p className="text-sm whitespace-nowrap">{integration}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Animated track with duplication for seamless loop */}
      <div className={`flex mb-6 ${animatedClass}`}>
        <div className="flex gap-6 whitespace-nowrap">
          {[...filled, ...filled].map((integration, index) => (
            <div
              key={`${direction}-row-${index}`}
              className="rounded-lg border border-[#31422d] bg-[rgba(23,39,25,0.25)] p-4 text-center hover:border-neon-green/50 hover:bg-[rgba(23,39,25,0.35)] transition-all duration-300 hover:scale-105 group flex-shrink-0"
            >
              <p className="text-white/90 text-sm group-hover:text-neon-green transition-colors whitespace-nowrap">
                {integration}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function IntegrationsCarousel({ integrations, className = "" }: IntegrationsCarouselProps) {
  const midpoint = Math.ceil(integrations.length / 2);
  const firstRow = integrations.slice(0, midpoint);
  const secondRow = integrations.slice(midpoint);

  return (
    <div className={`overflow-hidden ${className}`}>
      <MarqueeRow items={firstRow} direction="left" />
      <MarqueeRow items={secondRow} direction="right" />
    </div>
  );
}



