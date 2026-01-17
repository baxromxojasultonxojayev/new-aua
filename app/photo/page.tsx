"use client";

import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n-context";

type PhotoItem = {
  id: number;
  title: string;
  category: string;
  src: string;
};

const photos: PhotoItem[] = [
  {
    id: 1,
    title: "Central Asian Drift Show",
    category: "Photo",
    src: "/media/photos/central asian drift show.jpg",
  },
  {
    id: 2,
    title: "Deepal",
    category: "Photo",
    src: "/media/photos/deepal.jpg",
  },
  {
    id: 3,
    title: "Milaf",
    category: "Photo",
    src: "/media/photos/milaf.jpg",
  },
  {
    id: 4,
    title: "Rino",
    category: "Photo",
    src: "/media/photos/rino.jpg",
  },
  {
    id: 5,
    title: "Space Fusion",
    category: "Photo",
    src: "/media/photos/space fusion.png",
  },
  {
    id: 6,
    title: "Toyota",
    category: "Photo",
    src: "/media/photos/toyota.jpg",
  },
  {
    id: 7,
    title: "Your Service",
    category: "Photo",
    src: "/media/photos/Your Service.jpg",
  },
];

const PhotoCard = ({ photo }: { photo: PhotoItem }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-muted aspect-[3/4]">
      <img
        src={photo.src || "/placeholder.svg"}
        alt={photo.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
        <span className="text-[10px] uppercase tracking-widest text-white/60 mb-1">
          {photo.category}
        </span>
        <h3 className="text-xl font-bold text-white uppercase">
          {photo.title}
        </h3>
      </div>
    </div>
  );
};

const PhotoPage = () => {
  const { dict } = useI18n();

  return (
    <main className="relative min-h-screen">
      <Navbar />

      <section className="pt-40 pb-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter mb-8 leading-[0.8]">
              {dict.photo.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {dict.photo.desc}
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>

        {/* <div className="mt-20 text-center">
          <Button
            size="lg"
            className="rounded-full px-12 py-7 font-bold uppercase text-xs tracking-widest"
          >
            {dict.photo.cta}
          </Button>
        </div> */}
      </section>

      <Footer />
    </main>
  );
};

export default PhotoPage;
