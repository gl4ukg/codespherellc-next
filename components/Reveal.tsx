"use client";

import { useInView } from "@/hooks/useParallax";
import { CSSProperties, ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  y?: number;
  style?: CSSProperties;
  className?: string;
}

export default function Reveal({ children, delay = 0, y = 36, style, className }: Props) {
  const { ref, inView } = useInView(0.12);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0px)" : `translateY(${y}px)`,
        transition: `opacity 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
