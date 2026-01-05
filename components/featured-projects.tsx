"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n-context";

const projects = [
  {
    id: "porsche",
    title: "Porsche",
    category: "Commercial",
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-sports-car-driving-away-on-a-highway-at-sunset-34531-large.mp4",
  },
  {
    id: "yandex",
    title: "Yandex",
    category: "Product Advertising",
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-woman-working-on-a-laptop-at-home-42517-large.mp4",
  },
  {
    id: "toyota",
    title: "Toyota",
    category: "Commercial",
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-front-of-a-white-car-driving-on-a-road-34533-large.mp4",
  },
  {
    id: "technogym",
    title: "Technogym",
    category: "Product Production",
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-man-running-on-a-treadmill-in-a-gym-43037-large.mp4",
  },
  {
    id: "space-gaming",
    title: "Space Gaming",
    category: "3D / CGI",
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-gaming-setup-with-a-computer-and-neon-lights-42519-large.mp4",
  },
  {
    id: "deepal",
    title: "Deepal",
    category: "Commercial",
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-car-driving-through-a-mountain-pass-4309-large.mp4",
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
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
              >
                <source src={project.video} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[10px] uppercase tracking-widest text-white/60 mb-2">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-4">
                  {project.title}
                </h3>
                <Link
                  href={`/works/${project.id}`}
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
