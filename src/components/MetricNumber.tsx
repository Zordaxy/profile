"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const DURATION_MS = 800;

function parseMetric(value: string): { prefix: string; target: number; suffix: string } | null {
  const match = value.match(/^([+\-]?)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, numStr, suffix] = match;
  return { prefix, target: parseFloat(numStr), suffix };
}

export function MetricNumber({ value }: { value: string }) {
  const parsed = useMemo(() => parseMetric(value), [value]);
  const ref = useRef<HTMLSpanElement>(null);
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    if (!parsed) return;
    const node = ref.current;
    if (!node) return;

    let started = false;
    let rafId = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || started) continue;
          started = true;
          observer.disconnect();

          const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          ).matches;
          if (reduceMotion) {
            setDisplayed(parsed.target);
            return;
          }

          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - start) / DURATION_MS, 1);
            const eased = 1 - Math.pow(1 - t, 4);
            setDisplayed(Math.round(parsed.target * eased));
            if (t < 1) rafId = requestAnimationFrame(tick);
          };
          rafId = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [parsed]);

  if (!parsed) return <span>{value}</span>;

  return (
    <span ref={ref} className="tabular-nums">
      {parsed.prefix}
      {displayed}
      {parsed.suffix}
    </span>
  );
}
