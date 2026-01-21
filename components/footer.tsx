"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n-context";

export function Footer() {
  const { dict } = useI18n();

  return (
    <footer className="pt-32 pb-12 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-3xl font-bold tracking-tighter uppercase italic mb-8 block"
            >
              AUA Creative Agency
            </Link>
            <p className="text-xl text-muted-foreground max-w-sm font-serif">
              {dict.footer.desc}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">
              {dict.footer.studiosTitle}
            </h4>
            <ul className="space-y-4 text-muted-foreground text-sm">
              <li>{dict.footer.address}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">
              {dict.footer.connectTitle}
            </h4>
            <ul className="space-y-4 text-muted-foreground text-sm">
              <li>
                <Link
                  href="https://www.instagram.com/aua.agency?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  className="hover:text-primary transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </Link>
              </li>

              <li className="flex items-start gap-2">
                <span className="shrink-0">{dict.footer.phoneLabel}</span>
                <div className="flex flex-col leading-relaxed">
                  <Link
                    href="tel:+998900690600"
                    className="hover:text-primary transition-colors"
                  >
                    +998 90 069 06 00
                  </Link>
                  <Link
                    href="tel:+998935379705"
                    className="hover:text-primary transition-colors"
                  >
                    +998 93 537 97 05
                  </Link>
                  <Link
                    href="tel:+998974610709"
                    className="hover:text-primary transition-colors"
                  >
                    +998 97 461 07 09
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-border/20 gap-6">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            {dict.footer.rights}
          </p>

          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">
              {dict.footer.privacy}
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              {dict.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
