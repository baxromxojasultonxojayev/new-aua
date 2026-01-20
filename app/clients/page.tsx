"use client";

import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

type LogoSize = "normal" | "wide" | "mark" | "big";

type ClientLogoItem = {
  name: string;
  file?: string;
  size?: LogoSize;
  whiteOnWhite?: boolean;
  boost?: number;
};

const clients: ClientLogoItem[] = [
  { name: "Porsche", file: "porsche.png", size: "mark" },
  { name: "Toyota", file: "Toyota.png", size: "mark" },
  { name: "Yandex", file: "Yandex.png", size: "wide" },
  { name: "Technogym", file: "Technogym.png", size: "wide" },

  { name: "Ucell", file: "Ucell.png", size: "normal", boost: 1.35 },
  { name: "Asaka Bank", file: "Asaka bank.png", size: "normal", boost: 1.35 },

  { name: "Biznes Rivojlantirish Banki", file: "BRB.png", size: "wide" },
  { name: "Deepal", file: "Deepal.png", size: "wide" },
  { name: "Dahua", file: "Dahua.png", size: "wide" },

  {
    name: "Cetris Ladies",
    file: "Centris Ladies.png",
    size: "big",
    whiteOnWhite: true,
    boost: 1.35,
  },

  {
    name: "Space Gaming",
    file: "Space Gaming.png",
    size: "wide",
    whiteOnWhite: true,
    boost: 1.15,
  },

  {
    name: "Regeneration",
    file: "Regeneration.png",
    size: "normal",
    whiteOnWhite: true,
    boost: 1.35,
  },

  {
    name: "Tashkent City Mall",
    file: "Tashkent City Mall.png",
    size: "normal",
    whiteOnWhite: true,
    boost: 1.55,
  },

  {
    name: "Aije",
    file: "AIJE.png",
    size: "normal",
    whiteOnWhite: true,
    boost: 1.25,
  },

  {
    name: "UzCLAAS",
    file: "UzCLAAS.svg",
    size: "normal",
    boost: 1.35,
    whiteOnWhite: true,
  },

  { name: "Lixiang Auto", file: "Lixiang.png", size: "wide" },
];

const basePath = "/media/ClientLogos";

const sizeClass: Record<LogoSize, string> = {
  normal: "w-[74%] h-[56%] md:w-[72%] md:h-[58%]",
  wide: "w-[88%] h-[52%] md:w-[86%] md:h-[54%]",
  mark: "w-[58%] h-[70%] md:w-[56%] md:h-[72%]",
  big: "w-[88%] h-[64%] md:w-[86%] md:h-[66%]",
};

// ✅ oq logo oq fonda yo‘qolib ketmasin (kontur/shadow)
const whiteLogoStyle: React.CSSProperties = {
  filter:
    "drop-shadow(0 1px 0 rgba(0,0,0,0.55)) drop-shadow(0 -1px 0 rgba(0,0,0,0.55)) drop-shadow(1px 0 0 rgba(0,0,0,0.55)) drop-shadow(-1px 0 0 rgba(0,0,0,0.55))",
};

export default function ClientsPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-24">
            <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter mb-8 leading-[0.8]">
              Клиенты
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              AUA Creative Agency — продакшн-партнёр ведущих брендов и компаний
              региона. Мы создаем визуальный контент, который усиливает позиции
              на рынке.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-9">
            {clients.map((client, i) => {
              const src = client.file ? `${basePath}/${client.file}` : "";
              const s = client.size ?? "normal";
              const boost = client.boost ?? 1;

              return (
                <div
                  key={i}
                  className="
                    group aspect-video rounded-2xl
                    border border-white/10
                    bg-zinc-950/70
                    shadow-[0_12px_40px_rgba(0,0,0,0.55)]
                    ring-1 ring-white/5
                    backdrop-blur-md
                    transition-all
                    hover:-translate-y-1
                    hover:bg-zinc-900/80
                    hover:shadow-[0_20px_60px_rgba(0,0,0,0.65)]
                    flex items-center justify-center
                  "
                  title={client.name}
                >
                  {/* ✅ ichkarida yengil "panel" effekt */}
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
                          transform:
                            boost !== 1 ? `scale(${boost})` : undefined,
                          transformOrigin: "center",
                        }}
                        onError={(e) => {
                          const el = e.currentTarget;
                          el.style.display = "none";
                          const parent = el.parentElement;
                          if (parent) {
                            const span = document.createElement("span");
                            span.className =
                              "text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-center text-white/75";
                            span.innerText = client.name;
                            parent.appendChild(span);
                          }
                        }}
                      />
                    ) : (
                      <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-center text-white/75">
                        {client.name}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-32 p-16 rounded-[3rem] bg-primary text-primary-foreground text-center">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-8">
              Станьте частью нашей истории
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-10 text-lg">
              Мы всегда открыты для новых вызовов и масштабных проектов. Давайте
              создадим что-то легендарное вместе.
            </p>
            <button className="bg-primary-foreground text-primary px-12 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:scale-105 transition-transform">
              Начать проект
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
