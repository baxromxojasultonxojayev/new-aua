"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n-context";

type StatItem = {
  key: "projects" | "retention" | "awards";
  end: number; // raqam (count up shu end gacha)
  suffix?: string; // + yoki %
  durationMs?: number; // animatsiya vaqti
};

function useInViewOnce<T extends HTMLElement>(threshold = 0.25) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function useCountUp(
  end: number,
  start: number,
  enabled: boolean,
  durationMs = 900
) {
  const [val, setVal] = useState(start);

  useEffect(() => {
    if (!enabled) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setVal(end);
      return;
    }

    let raf = 0;
    const t0 = performance.now();

    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / durationMs);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      const next = Math.round(start + (end - start) * eased);
      setVal(next);
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [enabled, end, start, durationMs]);

  return val;
}

export function StatsSection() {
  const { dict } = useI18n();
  const { ref, inView } = useInViewOnce<HTMLDivElement>(0.25);

  const stats: StatItem[] = useMemo(
    () => [
      { key: "projects", end: 50, suffix: "+", durationMs: 900 },
      { key: "retention", end: 90, suffix: "%", durationMs: 900 },
      { key: "awards", end: 20, suffix: "+", durationMs: 900 },
    ],
    []
  );

  return (
    <section className="py-24 border-y border-border/50 bg-card/30">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-12"
      >
        {stats.map((s) => {
          const start = 0;
          const value = useCountUp(s.end, start, inView, s.durationMs);

          const t = dict.stats.items[s.key];

          return (
            <div key={s.key} className="flex flex-col items-center text-center">
              <span className="text-4xl md:text-5xl font-serif mb-2">
                {value}
                {s.suffix || ""}
              </span>

              <span className="text-sm font-medium text-foreground mb-1">
                {t.label}
              </span>

              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                {t.brand}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
