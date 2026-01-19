"use client";

import { useI18n } from "@/lib/i18n-context";

export function Hero() {
  const { dict } = useI18n();

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover grayscale brightness-50"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-cinematic-mountain-landscape-under-dark-clouds-4309-large.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 block animate-in fade-in slide-in-from-bottom-4 duration-1000">
          AUA Creative Agency
        </span>
        <h2 className="text-4xl md:text-6xl lg:text-6xl font-bold tracking-tight mb-8 text-balance animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 uppercase leading-tight">
          {dict.hero.title}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 text-balance animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
          {dict.hero.subtitle}
        </p>
        {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform uppercase text-xs tracking-widest">
            {dict.hero.ctaPrimary}
          </button>
          <button className="border border-border bg-background/20 backdrop-blur-sm px-8 py-3 rounded-full font-medium hover:bg-background/40 transition-colors uppercase text-xs tracking-widest">
            {dict.hero.ctaSecondary}
          </button>
        </div> */}
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
          {dict.hero.scroll}
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
