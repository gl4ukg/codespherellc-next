"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/useParallax";

interface Props {
  value: string; // e.g. "120+" or "99.98%"
  duration?: number;
}

function parseValue(raw: string): { num: number; suffix: string } {
  const match = raw.match(/^([\d.]+)(.*)$/);
  if (!match) return { num: 0, suffix: raw };
  return { num: parseFloat(match[1]), suffix: match[2] };
}

export default function Counter({ value, duration = 1800 }: Props) {
  const { ref, inView } = useInView(0.3);
  const [display, setDisplay] = useState("0");
  const started = useRef(false);
  const { num, suffix } = parseValue(value);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const start = performance.now();
    const isFloat = num % 1 !== 0;

    const step = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      const current = eased * num;
      setDisplay(isFloat ? current.toFixed(2) : Math.round(current).toString());
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, num, duration]);

  return (
    <span ref={ref as React.Ref<HTMLSpanElement>}>
      {display}{suffix}
    </span>
  );
}
