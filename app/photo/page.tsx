"use client" // added "use client" to fix SSR i18n error

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n-context" // imported i18n hook

const photos = [
  { id: 1, title: "Product Shot 01", category: "Product", src: "/luxury-watch-macro.jpg" },
  { id: 2, title: "Fashion Editorial", category: "Fashion", src: "/fashion-model-studio.jpg" },
  { id: 3, title: "Commercial Lifestyle", category: "Commercial", src: "/lifestyle-office-meeting.jpg" },
  { id: 4, title: "Macro Texture", category: "Product", src: "/macro-perfume-bottle.jpg" },
  { id: 5, title: "Automotive Detail", category: "Commercial", src: "/car-interior-luxury.jpg" },
  { id: 6, title: "Beauty Close-up", category: "Fashion", src: "/cosmetics-product-photography.jpg" },
]

export default function PhotoPage() {
  const { dict } = useI18n() // use localized dictionary

  return (
    <main className="relative min-h-screen">
      <Navbar />

      <section className="pt-40 pb-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter mb-8 leading-[0.8]">
              {dict.photo.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">{dict.photo.desc}</p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo) => (
            <div key={photo.id} className="group relative overflow-hidden rounded-2xl bg-muted aspect-[3/4]">
              <img
                src={photo.src || "/placeholder.svg"}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <span className="text-[10px] uppercase tracking-widest text-white/60 mb-1">{photo.category}</span>
                <h3 className="text-xl font-bold text-white uppercase">{photo.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button size="lg" className="rounded-full px-12 py-7 font-bold uppercase text-xs tracking-widest">
            {dict.photo.cta}
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
