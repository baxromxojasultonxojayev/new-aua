import Link from "next/link"

export function Footer() {
  return (
    <footer className="pt-32 pb-12 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="md:col-span-2">
            <Link href="/" className="text-3xl font-bold tracking-tighter uppercase italic mb-8 block">
              Synima<span className="text-primary/50">.</span>
            </Link>
            <p className="text-xl text-muted-foreground max-w-sm font-serif">
              Helping brands tell their stories through cinematic video experiences.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Studios</h4>
            <ul className="space-y-4 text-muted-foreground text-sm">
              <li>London, UK</li>
              <li>New York, US</li>
              <li>Amsterdam, NL</li>
              <li>Los Angeles, US</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Connect</h4>
            <ul className="space-y-4 text-muted-foreground text-sm">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Vimeo
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  X (Twitter)
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-border/20 gap-6">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            © 2026 Synima Creative Agency. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
