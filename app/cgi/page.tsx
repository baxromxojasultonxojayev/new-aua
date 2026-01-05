"use client" // added "use client" to fix SSR i18n error
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n-context" // imported i18n hook

export default function CGIPage() {
  const { dict } = useI18n() // use localized dictionary

  const cgiProjects = [
    {
      id: 1,
      title: dict.cgi.projects.rendering.title,
      desc: dict.cgi.projects.rendering.desc,
      video: "https://assets.mixkit.co/videos/preview/mixkit-abstract-glowing-digital-particles-4318-large.mp4",
    },
    {
      id: 2,
      title: dict.cgi.projects.motion.title,
      desc: dict.cgi.projects.motion.desc,
      video:
        "https://assets.mixkit.co/videos/preview/mixkit-gaming-setup-with-a-computer-and-neon-lights-42519-large.mp4",
    },
    {
      id: 3,
      title: dict.cgi.projects.sims.title,
      desc: dict.cgi.projects.sims.desc,
      video:
        "https://assets.mixkit.co/videos/preview/mixkit-abstract-motion-of-white-particles-on-a-black-background-4316-large.mp4",
    },
  ]

  return (
    <main className="relative min-h-screen">
      <Navbar />

      <section className="pt-40 pb-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter mb-8 leading-[0.8]">
              {dict.cgi.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">{dict.cgi.desc}</p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto space-y-24">
          {cgiProjects.map((project, i) => (
            <div
              key={project.id}
              className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}
            >
              <div className="lg:w-1/2 relative aspect-video rounded-3xl overflow-hidden border border-border/50">
                <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                  <source src={project.video} type="video/mp4" />
                </video>
              </div>
              <div className="lg:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">{project.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{project.desc}</p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-xl bg-muted/50 border border-border">
                    <span className="text-[10px] uppercase tracking-widest opacity-60 block mb-1">Software</span>
                    <span className="font-bold text-sm">C4D / Houdini</span>
                  </div>
                  <div className="p-4 rounded-xl bg-muted/50 border border-border">
                    <span className="text-[10px] uppercase tracking-widest opacity-60 block mb-1">Rendering</span>
                    <span className="font-bold text-sm">Octane / Redshift</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 text-center p-16 rounded-[3rem] bg-card border border-border">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-8 leading-tight">
            {dict.cgi.cta}?
          </h2>
          <Button size="lg" className="rounded-full px-12 py-7 font-bold uppercase text-xs tracking-widest">
            {dict.cgi.cta}
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
