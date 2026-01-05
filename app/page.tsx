import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { FeaturedProjects } from "@/components/featured-projects"
import { ServicesBento } from "@/components/services-bento"
import { StatsSection } from "@/components/stats-section"
import { ClientsSection } from "@/components/clients-section"
import { Footer } from "@/components/footer"

export default function LandingPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <StatsSection />
      <ServicesBento />
      <ClientsSection />
      <Footer />
    </main>
  )
}
