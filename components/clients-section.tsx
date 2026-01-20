"use client";
import React from "react";
import { motion } from "framer-motion";

type LogoSize = "normal" | "wide" | "mark" | "big";

type ClientLogoItem = {
  name: string;
  file?: string;
  size?: LogoSize;
  whiteOnWhite?: boolean;
  boost?: number; // ✅ har bir logo uchun alohida kattalashtirish
};

const clients: ClientLogoItem[] = [
  { name: "Porsche", file: "porsche.png", size: "mark", boost: 1.15 },
  { name: "Toyota", file: "Toyota.png", size: "mark", boost: 1.15 },
  { name: "Yandex", file: "Yandex.png", size: "wide", boost: 1.2 },
  { name: "Technogym", file: "Technogym.png", size: "wide", boost: 1.25 },

  { name: "Ucell", file: "Ucell.png", size: "normal", boost: 1.6 },
  { name: "Asaka Bank", file: "Asaka bank.png", size: "normal", boost: 1.55 },

  { name: "Deepal", file: "Deepal.png", size: "wide", boost: 1.35 },
  { name: "Lixiang Auto", file: "Lixiang.png", size: "wide", boost: 1.35 },
  { name: "Dahua", file: "Dahua.png", size: "wide", boost: 1.35 },
  {
    name: "Space Gaming",
    file: "Space Gaming.png",
    size: "wide",
    whiteOnWhite: true,
    boost: 1.25,
  },

  {
    name: "Tashkent City Mall",
    file: "Tashkent City Mall.png",
    size: "normal",
    whiteOnWhite: true,
    boost: 1.75,
  },
  {
    name: "Biznes Rivojlantirish Banki",
    file: "BRB.png",
    size: "wide",
    boost: 1.25,
  },
];

const basePath = "/media/ClientLogos";

/**
 * ✅ Logo kattalashishi uchun:
 * - card ichidagi "slot" (logo container) ni kattalashtirdik
 * - default boost ham oshirildi
 */
const sizeClass: Record<LogoSize, string> = {
  normal: "w-[86%] h-[70%] md:w-[84%] md:h-[72%]",
  wide: "w-[96%] h-[64%] md:w-[94%] md:h-[66%]",
  mark: "w-[72%] h-[82%] md:w-[70%] md:h-[84%]",
  big: "w-[96%] h-[78%] md:w-[94%] md:h-[80%]",
};

// ✅ oq logo qorada chiroyli ko‘rinsin
const whiteLogoStyle: React.CSSProperties = {
  filter:
    "drop-shadow(0 1px 0 rgba(0,0,0,0.65)) drop-shadow(0 -1px 0 rgba(0,0,0,0.65)) drop-shadow(1px 0 0 rgba(0,0,0,0.65)) drop-shadow(-1px 0 0 rgba(0,0,0,0.65))",
};

export function ClientsSection() {
  return (
    <section className="py-32 px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold uppercase tracking-tighter mb-4">
            Наши клиенты
          </h2>
          <p className="text-muted-foreground">
            AUA Creative Agency — продакшн-партнёр ведущих брендов и компаний
            региона.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {clients.map((client, i) => {
            const src = client.file ? `${basePath}/${client.file}` : "";
            const s = client.size ?? "normal";
            // const boost = client.boost ?? 1.3; // ✅ default ham kattaroq

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.05 }}
                className="
                  group aspect-video rounded-2xl
                  border border-white/10
                  bg-zinc-950/70
                  shadow-[0_12px_40px_rgba(0,0,0,0.55)]
                  ring-1 ring-white/5
                  backdrop-blur-md
                  hover:-translate-y-1
                  hover:bg-zinc-900/80
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.65)]
                  transition-all
                  flex items-center justify-center
                  p-2 md:p-3
                "
                title={client.name}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-transparent" />

                <div
                  className={`${sizeClass[s]} flex items-center justify-center relative`}
                >
                  {src ? (
                    <img
                      src={encodeURI(src)}
                      alt={client.name}
                      loading="lazy"
                      className="w-full h-full object-contain opacity-95 group-hover:opacity-100 transition-opacity"
                      style={{
                        ...(client.whiteOnWhite ? whiteLogoStyle : {}),
                        // transform: `scale(${boost})`,
                        transformOrigin: "center",
                      }}
                      onError={(e) => {
                        const el = e.currentTarget;
                        el.style.display = "none";
                        const parent = el.parentElement;
                        if (parent) {
                          const span = document.createElement("span");
                          span.className =
                            "text-xs font-bold uppercase tracking-[0.2em] text-center text-white/75";
                          span.innerText = client.name;
                          parent.appendChild(span);
                        }
                      }}
                    />
                  ) : (
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-center text-white/75">
                      {client.name}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-32 text-center max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-8 leading-tight">
            Мы превращаем идеи в визуальные истории.
          </h3>
          <button className="bg-primary text-primary-foreground px-12 py-4 rounded-full font-bold uppercase text-sm tracking-widest hover:scale-105 transition-transform">
            Запросить продакшн
          </button>
        </div>
      </div>
    </section>
  );
}
