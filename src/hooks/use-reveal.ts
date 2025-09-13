import * as React from "react";

/**
 * Adds the `is-visible` class to target elements when they enter viewport.
 * By default, it targets elements with `.reveal-up` inside the provided ref.
 */
export function useReveal(containerRef: React.RefObject<HTMLElement>, options?: IntersectionObserverInit) {
  React.useEffect(() => {
    const rootEl = containerRef.current;
    if (!rootEl) return;

    const elements: Element[] = Array.from(rootEl.querySelectorAll(".reveal-up"));
    if (elements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    }, { root: null, rootMargin: "0px", threshold: 0.12, ...(options || {}) });

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [containerRef, options]);
}


