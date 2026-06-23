"use client";

import { useRef, MouseEvent, ReactNode } from "react";

export default function TiltCard({ children, className, style }: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 8}deg) scale(1.02)`;
    el.style.transition = "transform 0.1s ease";
    // glow follows cursor
    el.style.setProperty("--glow-x", `${(x + 0.5) * 100}%`);
    el.style.setProperty("--glow-y", `${(y + 0.5) * 100}%`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)";
    el.style.transition = "transform 0.6s cubic-bezier(0.16,1,0.3,1)";
  };

  return (
    <div
      ref={ref}
      className={`tilt-card ${className ?? ""}`}
      style={{ ...style, willChange: "transform" }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
}
