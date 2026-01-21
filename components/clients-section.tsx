"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n-context";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

type LogoSize = "normal" | "wide" | "mark" | "big";

type ClientLogoItem = {
  name: string;
  file?: string;
  size?: LogoSize;
  whiteOnWhite?: boolean;
  boost?: number;
};

const clients: ClientLogoItem[] = [
  { name: "Porsche", file: "porsche.png", size: "mark", boost: 1.25 },
  { name: "Toyota", file: "Toyota.png", size: "mark", boost: 1.25 },
  { name: "Yandex", file: "Yandex.png", size: "wide", boost: 1.35 },
  { name: "Technogym", file: "Technogym.png", size: "wide", boost: 1.4 },

  { name: "Ucell", file: "Ucell.png", size: "normal", boost: 1.95 },
  { name: "Asaka Bank", file: "Asaka bank.png", size: "normal", boost: 1.9 },

  { name: "Deepal", file: "Deepal.png", size: "wide", boost: 1.55 },
  { name: "Lixiang Auto", file: "Lixiang.png", size: "wide", boost: 1.55 },
  { name: "Dahua", file: "Dahua.png", size: "wide", boost: 1.55 },
  {
    name: "Space Gaming",
    file: "Space Gaming.png",
    size: "wide",
    whiteOnWhite: true,
    boost: 1.45,
  },

  {
    name: "Tashkent City Mall",
    file: "Tashkent City Mall.png",
    size: "normal",
    whiteOnWhite: true,
    boost: 2.1,
  },
  {
    name: "Biznes Rivojlantirish Banki",
    file: "BRB.png",
    size: "wide",
    boost: 1.45,
  },
];

const basePath = "/media/ClientLogos";

const sizeClass: Record<LogoSize, string> = {
  normal: "w-[92%] h-[78%] md:w-[92%] md:h-[80%]",
  wide: "w-[98%] h-[72%] md:w-[98%] md:h-[74%]",
  mark: "w-[86%] h-[86%] md:w-[86%] md:h-[88%]",
  big: "w-[98%] h-[84%] md:w-[98%] md:h-[86%]",
};

const whiteLogoStyle: React.CSSProperties = {
  filter:
    "drop-shadow(0 1px 0 rgba(0,0,0,0.65)) drop-shadow(0 -1px 0 rgba(0,0,0,0.65)) drop-shadow(1px 0 0 rgba(0,0,0,0.65)) drop-shadow(-1px 0 0 rgba(0,0,0,0.65))",
};

function LogoCard({ client }: { client: ClientLogoItem }) {
  const src = client.file ? `${basePath}/${client.file}` : "";
  const s = client.size ?? "normal";
  const boost = client.boost ?? 1.5;

  return (
    <div
      className="
        group aspect-video rounded-2xl
        
      "
      title={client.name}
    >
      <div
        className={`${sizeClass[s]} flex items-center justify-center relative`}
      >
        {src ? (
          <img
            src={encodeURI(src)}
            alt={client.name}
            loading="lazy"
            className="w-full h-full object-contain  "
            style={{
              ...(client.whiteOnWhite ? whiteLogoStyle : {}),
              transform: `scale(${boost})`,
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
    </div>
  );
}

export function ClientsSection() {
  const { dict } = useI18n();

  const slides = useMemo(() => {
    // ko‘paytirib beramiz: loop "seamless" bo‘lishi uchun
    const repeated: ClientLogoItem[] = [];
    for (let i = 0; i < 6; i++) repeated.push(...clients);
    return repeated;
  }, []);

  return (
    <section className="py-32 px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold uppercase tracking-tighter mb-4">
            {dict.clients.title}
          </h2>
          <p className="text-muted-foreground">{dict.clients.desc}</p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Swiper
            modules={[Autoplay]}
            loop
            centeredSlides={false}
            slidesPerView={2.2}
            spaceBetween={16}
            speed={7000}
            allowTouchMove
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            freeMode={true as any}
            breakpoints={{
              640: { slidesPerView: 3.2, spaceBetween: 18 },
              768: { slidesPerView: 4.2, spaceBetween: 20 },
              1024: { slidesPerView: 6.2, spaceBetween: 24 },
              1280: { slidesPerView: 7.2, spaceBetween: 24 },
            }}
            style={{
              paddingBottom: 6,
            }}
          >
            {slides.map((client, idx) => (
              <SwiperSlide key={`${client.name}-${idx}`}>
                <LogoCard client={client} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <div className="mt-32 text-center max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-8 leading-tight">
            {dict.clients.ctaTitle}
          </h3>
        </div>
      </div>
    </section>
  );
}
