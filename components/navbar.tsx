"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { useI18n } from "@/lib/i18n-context";

export function Navbar() {
  const { dict } = useI18n();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/50 backdrop-blur-md border-b border-border/40">
      <div className="flex items-center gap-8">
        <Link href="/" className="text-xl font-bold tracking-tighter uppercase">
          AUA Creative Agency<span className="text-primary/50">.</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link
            href="/works"
            className="hover:text-foreground transition-colors"
          >
            {dict.nav.works}
          </Link>
          <Link
            href="/services"
            className="hover:text-foreground transition-colors"
          >
            {dict.nav.services}
          </Link>
          <Link
            href="/photo"
            className="hover:text-foreground transition-colors"
          >
            {dict.nav.photo}
          </Link>
          {/* <Link href="/cgi" className="hover:text-foreground transition-colors">
            {dict.nav.cgi}
          </Link> */}
          <Link
            href="/clients"
            className="hover:text-foreground transition-colors"
          >
            {dict.nav.clients}
          </Link>
          {/* <Link
            href="/contacts"
            className="hover:text-foreground transition-colors"
          >
            {dict.nav.contacts}
          </Link> */}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Button
          variant="outline"
          className="rounded-full px-6 bg-transparent uppercase text-[10px] tracking-widest font-bold"
        >
          {dict.nav.request}
        </Button>
      </div>
    </nav>
  );
}
