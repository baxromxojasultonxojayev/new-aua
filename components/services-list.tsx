"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Play,
  Cpu,
  Presentation,
  Box,
  Camera,
  Smartphone,
} from "lucide-react";
import { useI18n } from "@/lib/i18n-context";

type ServiceItem = {
  id: string;
  title: string;
  desc: string;
  features: string[];
  icon: any;
  isSpecial?: boolean;
  media?: { type: "image" | "video"; src: string };
};

const mediaMap: Record<
  string,
  { type: "image" | "video"; src: string } | undefined
> = {
  commercial: { type: "image", src: "/media/Services/video production.jpg" },
  product: { type: "image", src: "/media/Services/product video.jpg" },
  presentation: {
    type: "image",
    src: "/media/Services/presentation videos.jpg",
  },
  cgi: { type: "image", src: "/media/Services/3D & CGI production.jpg" },
};

export function ServicesList() {
  const { dict } = useI18n();

  const services: ServiceItem[] = [
    {
      id: "commercial",
      title: dict.services.commercial.title,
      desc: dict.services.commercial.desc,
      features: dict.services.commercial.features,
      icon: Play,
      media: mediaMap.commercial,
    },
    {
      id: "product",
      title: dict.services.product.title,
      desc: dict.services.product.desc,
      features: dict.services.product.features,
      icon: Cpu,
      media: mediaMap.product,
    },
    {
      id: "presentation",
      title: dict.services.presentation.title,
      desc: dict.services.presentation.desc,
      features: dict.services.presentation.features,
      icon: Presentation,
      media: mediaMap.presentation,
    },
    {
      id: "cgi",
      title: dict.services.cgi.title,
      desc: dict.services.cgi.desc,
      features: dict.services.cgi.features,
      icon: Box,
      media: mediaMap.cgi,
    },
    // {
    //   id: "photo",
    //   title: dict.services.photo.title,
    //   desc: dict.services.photo.desc,
    //   features: dict.services.photo.features,
    //   icon: Camera,
    // },
    // {
    //   id: "reels",
    //   title: dict.services.reels.title,
    //   desc: dict.services.reels.desc,
    //   isSpecial: true,
    //   features: dict.services.reels.features,
    //   icon: Smartphone,
    // },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-32">
        {services.map((service, i) => {
          const hasMedia = !!service.media;

          return (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={
                hasMedia
                  ? `grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`
                  : `grid grid-cols-1 gap-16 items-center`
              }
            >
              <div className={hasMedia && i % 2 === 1 ? "lg:order-2" : ""}>
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${
                    service.isSpecial
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  <service.icon className="w-7 h-7" />
                </div>

                <h2
                  className={`text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6 ${
                    service.isSpecial ? "text-primary" : ""
                  }`}
                >
                  {service.title}
                </h2>

                <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                  {service.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {hasMedia && (
                <div
                  className={`relative aspect-video rounded-3xl overflow-hidden border border-border/50 bg-muted ${
                    i % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  {service.media?.type === "video" ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={service.media.src} />
                    </video>
                  ) : (
                    <img
                      src={service.media!.src}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
