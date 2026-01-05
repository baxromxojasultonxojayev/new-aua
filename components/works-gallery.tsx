"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { useI18n } from "@/lib/i18n-context" // imported i18n hook

const works = [
  {
    id: "porsche",
    title: "Porsche",
    category: "Commercial",
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-sports-car-driving-away-on-a-highway-at-sunset-34531-large.mp4",
  },
  {
    id: "technogym",
    title: "Technogym",
    category: "Product",
    video: "https://assets.mixkit.co/videos/preview/mixkit-man-running-on-a-treadmill-in-a-gym-43037-large.mp4",
  },
  {
    id: "space-gaming",
    title: "Space Gaming",
    category: "3D / CGI",
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-gaming-setup-with-a-computer-and-neon-lights-42519-large.mp4",
  },
  {
    id: "yandex",
    title: "Yandex",
    category: "Product",
    video: "https://assets.mixkit.co/videos/preview/mixkit-woman-working-on-a-laptop-at-home-42517-large.mp4",
  },
  {
    id: "toyota",
    title: "Toyota",
    category: "Commercial",
    video: "https://assets.mixkit.co/videos/preview/mixkit-front-of-a-white-car-driving-on-a-road-34533-large.mp4",
  },
  {
    id: "deepal",
    title: "Deepal",
    category: "Commercial",
    video: "https://assets.mixkit.co/videos/preview/mixkit-car-driving-through-a-mountain-pass-4309-large.mp4",
  },
  {
    id: "fashion-lifestyle",
    title: "Axis Fashion",
    category: "Photo",
    image: "/cinematic-video-still.jpg",
  },
  {
    id: "vertica-reels",
    title: "Vertica Reels",
    category: "Reels",
    video: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-woman-using-a-smartphone-42515-large.mp4",
  },
]

export function WorksGallery() {
  const { dict } = useI18n() // use localized dictionary

  const categoriesMap: Record<string, string> = {
    All: dict.works.categories.all,
    Commercial: dict.works.categories.commercial,
    Product: dict.works.categories.product,
    "3D / CGI": dict.works.categories.cgi,
    Photo: dict.works.categories.photo,
    Reels: dict.works.categories.reels,
  }

  const categoryKeys = ["All", "Commercial", "Product", "3D / CGI", "Photo", "Reels"]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredWorks = activeCategory === "All" ? works : works.filter((work) => work.category === activeCategory)

  return (
    <section className="pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-4 mb-16 border-b border-border/50 pb-8">
          {categoryKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`text-sm font-bold uppercase tracking-widest px-6 py-2 rounded-full border transition-all ${
                activeCategory === key
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {categoriesMap[key]}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-video overflow-hidden rounded-3xl bg-muted"
              >
                {work.video ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                  >
                    <source src={work.video} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={work.image || "/placeholder.svg"}
                    alt={work.title}
                    className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                  <span className="text-[10px] uppercase tracking-widest text-white/60 mb-2">{work.category}</span>
                  <h3 className="text-3xl font-bold text-white uppercase tracking-tight mb-4">{work.title}</h3>
                  <Link
                    href={`/works/${work.id}`}
                    className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center"
                  >
                    <ArrowUpRight className="w-6 h-6" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
