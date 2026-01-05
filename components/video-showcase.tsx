export function VideoShowcase() {
  return (
    <section id="work" className="py-32 bg-card/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-video rounded-3xl overflow-hidden group cursor-pointer border border-border">
            <img
              src="/cinematic-video-still.jpg"
              alt="Video thumbnail"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center pl-1">
                <div className="w-0 h-0 border-y-[10px] border-y-transparent border-l-[18px] border-l-current" />
              </div>
            </div>
          </div>

          <div>
            <span className="text-xs uppercase tracking-widest text-primary mb-6 block">Featured Work</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Creating stories that move people.</h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              From Fortune 500 commercials to innovative 3D animations, we push the boundaries of what's possible in
              video production. Our process is collaborative, transparent, and results-driven.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 p-4 rounded-2xl border border-border/50 hover:bg-card/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0">01</div>
                <div>
                  <h4 className="font-medium mb-1">Concept to Completion</h4>
                  <p className="text-sm text-muted-foreground">
                    We handle the entire creative lifecycle from initial idea to final render.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-2xl border border-border/50 hover:bg-card/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0">02</div>
                <div>
                  <h4 className="font-medium mb-1">Global Scale Production</h4>
                  <p className="text-sm text-muted-foreground">
                    Operating across 3 continents to deliver world-class content anywhere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
