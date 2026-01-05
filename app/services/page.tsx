"use client" // added "use client" to fix SSR i18n error
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServicesList } from "@/components/services-list"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { useI18n } from "@/lib/i18n-context" // imported i18n hook

export default function ServicesPage() {
  const { dict } = useI18n() // use localized dictionary

  return (
    <main className="relative min-h-screen">
      <Navbar />

      <section className="pt-40 pb-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.3em] text-primary mb-6 block">Our Expertise</span>
            <h1 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
              {dict.services.heroTitle}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">{dict.services.heroDesc}</p>
          </div>
          <div className="mt-16 flex items-center gap-4 animate-bounce">
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
              {dict.services.heroScroll}
            </span>
          </div>
        </div>
      </section>

      <ServicesList />

      <section className="py-32 px-6 border-t border-border/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-8 leading-tight">
            {dict.services.ctaTitle}
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">{dict.services.ctaDesc}</p>
          <Button size="lg" className="rounded-full px-12 py-7 font-bold uppercase text-sm tracking-widest">
            {dict.services.ctaButton}
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
