"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n-context";

type TabKey =
  | "3D"
  | "Commercial"
  | "Corporate"
  | "Music Clip"
  | "Photo"
  | "Product";

type Project = {
  id: string;
  title: string;
  categories: string[];
  image: string;
  tab: TabKey;
};

const projects: Project[] = [
  {
    id: "asaka-bank",
    title: "Asaka Bank",
    categories: ["Corporate", "3D / CGI"],
    image: "/media/Corporate/Asaka Bank 2.png",
    tab: "Corporate",
  },
  {
    id: "porsche-x-technogym",
    title: "Porsche X Technogym",
    categories: ["Product", "Corporate", "3D / CGI"],
    image: "/media/3D/porsche.png",
    tab: "3D",
  },
  {
    id: "brb",
    title: "Biznesni Rivojlantirish Banki",
    categories: ["Corporate"],
    image: "/media/Corporate/brb.png",
    tab: "Corporate",
  },
  {
    id: "toyota",
    title: "Toyota",
    categories: ["Corporate", "Product"],
    image: "/media/Corporate/toyota.jpg",
    tab: "Corporate",
  },
  {
    id: "milaf-cola",
    title: "Milaf Cola",
    categories: ["Corporate", "Product"],
    image: "/media/Corporate/milaf cola.jpg",
    tab: "Corporate",
  },
  {
    id: "konsta-x-munisa",
    title: "Konsta X Munisa Rizayeva — O‘ylamading",
    categories: ["Music Clip"],
    image: "/media/Music Clip/Konsta X Munisa Rizayeva (2).png",
    tab: "Music Clip",
  },
];

export function FeaturedProjects() {
  const { dict } = useI18n();

  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">
              {dict.projects.title}
            </h2>
            <p className="text-muted-foreground text-lg">
              {dict.projects.desc}
            </p>
          </div>

          <Link
            href="/works"
            className="hidden md:flex items-center gap-2 group text-sm font-medium uppercase tracking-widest"
          >
            {dict.projects.viewAll}{" "}
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted"
            >
              <img
                src={encodeURI(project.image)}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                loading="lazy"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "/placeholder.svg";
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.categories.map((c) => (
                    <span
                      key={`${project.id}-${c}`}
                      className="text-[10px] uppercase tracking-widest text-white/70"
                    >
                      {c}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-4">
                  {project.title}
                </h3>

                <Link
                  href={`/works?tab=${encodeURIComponent(project.tab)}`}
                  className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Open works"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>

              <Link
                href={`/works?tab=${encodeURIComponent(project.tab)}`}
                className="absolute inset-0"
                aria-label={`Open ${project.title}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
