"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const clients = [
  "Porsche",
  "Toyota",
  "Yandex",
  "Technogym",
  "Ucell",
  "Asaka Bank",
  "Deepal",
  "Lixiang Auto",
  "Dahua",
  "Cetris Ladies",
  "Space Gaming",
  "Regeneration",
  "Tashkent City Mall",
  "Biznes Rivojlantirish Banki",
  "UzCLAAS",
  "Aije",
];

export default function ClientsPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-24">
            <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter mb-8 leading-[0.8]">
              Клиенты
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              AUA Creative Agency — продакшн-партнёр ведущих брендов и компаний
              региона. Мы создаем визуальный контент, который усиливает позиции
              на рынке.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {clients.map((client, i) => (
              <div
                key={i}
                className="aspect-video bg-muted/30 rounded-2xl flex items-center justify-center p-8 border border-border/50 grayscale hover:grayscale-0 transition-all hover:bg-muted/50"
              >
                <span className="text-sm font-bold opacity-40 uppercase tracking-[0.2em] text-center">
                  {client}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-32 p-16 rounded-[3rem] bg-primary text-primary-foreground text-center">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-8">
              Станьте частью нашей истории
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-10 text-lg">
              Мы всегда открыты для новых вызовов и масштабных проектов. Давайте
              создадим что-то легендарное вместе.
            </p>
            <button className="bg-primary-foreground text-primary px-12 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:scale-105 transition-transform">
              Начать проект
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
