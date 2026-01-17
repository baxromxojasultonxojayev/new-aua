"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n-context";

const projects = [
  {
    id: "3d",
    title: "3D",
    category: "3D",
    image: "/media/3D/porsche.png",
  },
  {
    id: "commercial",
    title: "Commercial",
    category: "Commercial",
    image: "/media/Commercial/mening biznesim.png",
  },
  {
    id: "corporate",
    title: "Corporate",
    category: "Corporate",
    image: "/media/Corporate/Asaka Bank 2.png",
  },
  {
    id: "music-clip",
    title: "Music Clip",
    category: "Music Clip",
    image: "/media/Music Clip/asalya unlucky.jpg",
  },
  {
    id: "photo",
    title: "Photo",
    category: "Photo",
    image: "/media/photos/central asian drift show.jpg",
  },
  {
    id: "product",
    title: "Product",
    category: "Product",
    image: "/media/Product/aije.jpg",
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
              {/* ✅ video o‘rniga rasm */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[10px] uppercase tracking-widest text-white/60 mb-2">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-4">
                  {project.title}
                </h3>
                <Link
                  href={`/works`}
                  className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
