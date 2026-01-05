"use client"
import { motion } from "framer-motion"
import { CheckCircle2, Play, Cpu, Presentation, Box, Camera, Smartphone } from "lucide-react"
import { useI18n } from "@/lib/i18n-context" // imported i18n hook

export function ServicesList() {
  const { dict } = useI18n() // use localized dictionary

  const services = [
    {
      id: "commercial",
      title: dict.services.commercial.title,
      desc: dict.services.commercial.desc,
      features: dict.services.commercial.features,
      icon: Play,
      video:
        "https://assets.mixkit.co/videos/preview/mixkit-sports-car-driving-away-on-a-highway-at-sunset-34531-large.mp4",
    },
    {
      id: "product",
      title: dict.services.product.title,
      desc: dict.services.product.desc,
      features: dict.services.product.features,
      icon: Cpu,
      video: "https://assets.mixkit.co/videos/preview/mixkit-man-running-on-a-treadmill-in-a-gym-43037-large.mp4",
    },
    {
      id: "presentation",
      title: dict.services.presentation.title,
      desc: dict.services.presentation.desc,
      features: dict.services.presentation.features,
      icon: Presentation,
      video:
        "https://assets.mixkit.co/videos/preview/mixkit-gaming-setup-with-a-computer-and-neon-lights-42519-large.mp4",
    },
    {
      id: "cgi",
      title: dict.services.cgi.title,
      desc: dict.services.cgi.desc,
      features: dict.services.cgi.features,
      icon: Box,
      video: "https://assets.mixkit.co/videos/preview/mixkit-abstract-glowing-digital-particles-4318-large.mp4",
    },
    {
      id: "photo",
      title: dict.services.photo.title,
      desc: dict.services.photo.desc,
      features: dict.services.photo.features,
      icon: Camera,
      image: "/cinematic-video-still.jpg",
    },
    {
      id: "reels",
      title: dict.services.reels.title,
      desc: dict.services.reels.desc,
      isSpecial: true,
      features: dict.services.reels.features,
      icon: Smartphone,
      video: "https://assets.mixkit.co/videos/preview/mixkit-woman-working-on-a-laptop-at-home-42517-large.mp4",
    },
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-32">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            id={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
          >
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${service.isSpecial ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}
              >
                <service.icon className="w-7 h-7" />
              </div>
              <h2
                className={`text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6 ${service.isSpecial ? "text-primary" : ""}`}
              >
                {service.title}
              </h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">{service.desc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`relative aspect-video rounded-3xl overflow-hidden border border-border/50 bg-muted ${i % 2 === 1 ? "lg:order-1" : ""}`}
            >
              {service.video ? (
                <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                  <source src={service.video} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
