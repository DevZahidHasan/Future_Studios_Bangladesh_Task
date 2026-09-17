"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Template({ children }: { children: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // When the route changes, this template re-mounts.
    // We animate the main content in with a premium fade-slide.
    gsap.from(container.current, {
      y: 15,
      opacity: 0,
      duration: 0.7,
      ease: "power4.out",
      clearProps: "all", // Remove inline styles after animation completes
    });
  }, []);

  return (
    <div ref={container} className="will-change-transform">
      {children}
    </div>
  );
}
