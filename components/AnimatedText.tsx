"use client";

import { useInView } from "@/hooks/useParallax";

interface Props {
  text: string;
  el?: "h1" | "h2" | "h3" | "p";
  className?: string;
  stagger?: number;
}

export default function AnimatedText({ text, el: El = "h1", className, stagger = 60 }: Props) {
  const { ref, inView } = useInView(0.1);
  const words = text.split(" ");

  return (
    <El className={className} ref={ref as React.Ref<HTMLHeadingElement>} style={{ overflow: "hidden" }}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            marginRight: "0.28em",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0) rotateX(0deg)" : "translateY(60%) rotateX(-40deg)",
            transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${i * stagger}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * stagger}ms`,
            transformOrigin: "bottom",
          }}
        >
          {word}
        </span>
      ))}
    </El>
  );
}
