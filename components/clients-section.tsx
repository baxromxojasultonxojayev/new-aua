"use client";
import { motion } from "framer-motion";

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
  "Space Gaming",
  "Tashkent City Mall",
  "Biznes Rivojlantirish Banki",
];

export function ClientsSection() {
  return (
    <section className="py-32 px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold uppercase tracking-tighter mb-4">
            Наши клиенты
          </h2>
          <p className="text-muted-foreground">
            AUA Creative Agency — продакшн-партнёр ведущих брендов и компаний
            региона.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {clients.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              className="aspect-video bg-muted/50 rounded-xl flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all border border-transparent hover:border-border"
            >
              <span className="text-sm font-bold opacity-40 uppercase tracking-widest text-center">
                {client}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 text-center max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-8 leading-tight">
            Мы превращаем идеи в визуальные истории.
          </h3>
          <button className="bg-primary text-primary-foreground px-12 py-4 rounded-full font-bold uppercase text-sm tracking-widest hover:scale-105 transition-transform">
            Запросить продакшн
          </button>
        </div>
      </div>
    </section>
  );
}
