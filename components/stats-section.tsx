export function StatsSection() {
  const stats = [
    { value: "50+", label: "Projects Delivered", brand: "Global Scale" },
    { value: "90%", label: "Client Retention", brand: "Quality Focus" },
    { value: "20+", label: "Industry Awards", brand: "Creative Excellence" },
    // { value: "4", label: "Global Offices", brand: "NY • LON • AMS • LA" },
  ];

  return (
    <section className="py-24 border-y border-border/50 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-12">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <span className="text-4xl md:text-5xl font-serif mb-2">
              {stat.value}
            </span>
            <span className="text-sm font-medium text-foreground mb-1">
              {stat.label}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
              {stat.brand}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
