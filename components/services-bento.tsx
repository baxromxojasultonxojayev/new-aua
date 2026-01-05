"use client";

import { ArrowUpRight, Play, Cpu, PenTool, Globe } from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n-context";

export function ServicesBento() {
  const { dict } = useI18n();

  const services = [
    {
      title: dict.services.commercial.title,
      desc: dict.services.commercial.desc,
      icon: Play,
      className: "md:col-span-2 md:row-span-2 bg-muted/20",
      image: "/cinematic-video-still.jpg",
    },
    {
      title: dict.services.product.title,
      desc: dict.services.product.desc,
      icon: Cpu,
      className: "md:col-span-1 md:row-span-1 bg-muted/10",
    },
    {
      title: dict.services.cgi.title,
      desc: dict.services.cgi.desc,
      icon: PenTool,
      className: "md:col-span-1 md:row-span-1 bg-muted/10",
    },
    {
      title: dict.services.photo.title,
      desc: dict.services.photo.desc,
      icon: Globe,
      className: "md:col-span-2 md:row-span-1 bg-muted/10",
    },
  ];

  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
              {dict.services.title}
            </h2>
            <p className="text-muted-foreground text-lg">
              {dict.services.desc}
            </p>
          </div>
          <Link
            href="/services"
            className="group flex items-center gap-2 text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors"
          >
            {dict.services.viewAll}{" "}
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {services.map((service, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-3xl border border-border/50 p-8 flex flex-col justify-between hover:border-primary/50 transition-all duration-500 ${service.className}`}
            >
              {service.image && (
                <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="relative z-10">
                <service.icon className="w-8 h-8 mb-6 text-primary" />
                <h3 className="text-2xl font-serif mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[280px]">
                  {service.desc}
                </p>
              </div>
              <div className="relative z-10 flex justify-end">
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-3xl bg-primary text-primary-foreground flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">
              {dict.services.reels.title}
            </h3>
            <p className="opacity-80 max-w-md">{dict.services.reels.desc}</p>
          </div>
          <Link
            href="/services#reels"
            className="relative z-10 bg-primary-foreground text-primary px-8 py-3 rounded-full font-bold uppercase text-xs tracking-widest hover:scale-105 transition-transform shrink-0"
          >
            {dict.services.reels.button}
          </Link>
          <div className="absolute top-0 right-0 w-64 h-full bg-white/10 skew-x-12 translate-x-32" />
        </div>
      </div>
    </section>
  );
}
