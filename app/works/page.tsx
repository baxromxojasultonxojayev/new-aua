"use client" // added "use client" to fix SSR i18n error
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WorksGallery } from "@/components/works-gallery"
import { useI18n } from "@/lib/i18n-context" // imported i18n hook

export default function WorksPage() {
  const { dict } = useI18n() // use localized dictionary

  return (
    <main className="relative min-h-screen">
      <Navbar />

      <section className="pt-40 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter mb-8 leading-[0.8]">
            {dict.works.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">{dict.works.subtitle}</p>
        </div>
      </section>

      <WorksGallery />

      <Footer />
    </main>
  )
}
