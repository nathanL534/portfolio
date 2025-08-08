"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

type NumberTickerProps = {
  value: number;
  durationMs?: number;
  className?: string;
};

export function NumberTicker({ value, durationMs = 1200, className }: NumberTickerProps) {
  const spring = useSpring(0, { stiffness: 100, damping: 20 });
  const rounded = useTransform(spring, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    const start = performance.now();
    function tick(now: number) {
      const progress = Math.min(1, (now - start) / durationMs);
      spring.set(value * progress);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [durationMs, spring, value]);

  return (
    <motion.span className={className}>
      {rounded as unknown as string}
    </motion.span>
  );
}


