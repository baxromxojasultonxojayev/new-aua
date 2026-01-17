"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import dynamic from "next/dynamic";
import { useI18n } from "@/lib/i18n-context";

// ✅ ReactPlayer uchun minimal props type (TS muammosiz)
type PlayerProps = {
  url?: string;
  width?: string | number;
  height?: string | number;
  controls?: boolean;
  playing?: boolean;
};

// ✅ SSRda yiqilmasin (player faqat clientda)
const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
}) as unknown as React.ComponentType<PlayerProps>;

type TabKey =
  | "All"
  | "3D"
  | "Commercial"
  | "Corporate"
  | "Music Clip"
  | "Photo"
  | "Product";

type WorkItem = {
  id: string;
  title: string;
  tab: Exclude<TabKey, "All">;
  image: string;
  href?: string;
  youtube?: string;
};

const folderToTab = (folder: string): Exclude<TabKey, "All"> => {
  if (folder === "photos") return "Photo";
  return folder as Exclude<TabKey, "All">;
};

const makeItems = (folder: string, files: string[]): WorkItem[] => {
  const tab = folderToTab(folder);

  return files.map((file) => {
    const title = file.replace(/\.(png|jpg|jpeg|webp|gif)$/i, "");
    const id = `${folder}-${file}`.toLowerCase().replace(/\s+/g, "-");

    return {
      id,
      title,
      tab,
      image: `/media/${folder}/${file}`,
      href: `/works/${id}`,
      youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // keyin siz link berasiz
    };
  });
};

const worksData: WorkItem[] = [
  ...makeItems("3D", ["porsche.png"]),

  ...makeItems("Commercial", [
    "mening biznesim.png",
    "yandex go.png",
    "yoursevice thumbnail.png",
  ]),

  ...makeItems("Corporate", [
    "Asaka Bank 2.png",
    "asaka bank.png",
    "brb.png",
    "Deepal.jpg",
    "Lixiang.png",
    "mercury travel.jpg",
    "milaf cola.jpg",
    "porsche.png",
    "toyota.jpg",
    "uzclaas.png",
  ]),

  ...makeItems("Music Clip", [
    "asalya unlucky.jpg",
    "Asiat Кашель.png",
    "Konsta X Munisa Rizayeva (2).png",
    "raayxonaa chempion.jpg",
    "samar hiyla.jpg",
    "uyxoqi Baho Khabi.jpg",
  ]),

  ...makeItems("photos", [
    "central asian drift show.jpg",
    "deepal.jpg",
    "milaf.jpg",
    "rino.jpg",
    "space fusion.png",
    "toyota.jpg",
    "Your Service.jpg",
  ]),

  ...makeItems("Product", [
    "aije.jpg",
    "centril ladies.png",
    "dahua.png",
    "deepal_1.jpg",
    "lixian thumbnail 2.png",
    "milaf cola.jpg",
    "porsche.png",
    "shinam podcast.jpg",
    "toyota.jpg",
    "yandex market.jpg",
  ]),
];

const Modal = ({
  open,
  title,
  url,
  onClose,
}: {
  open: boolean;
  title?: string;
  url?: string;
  onClose: () => void;
}) => {
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    // scroll lock (modal ochilganda body qimirlamasin)
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999]">
      {/* overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* content */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div
          className="w-full max-w-4xl rounded-2xl bg-black border border-white/10 overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()} // ✅ ichini bossangiz yopilib ketmasin
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <div className="text-white font-semibold truncate pr-3">
              {title || "Video"}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          <div className="relative w-full aspect-video bg-black">
            {url ? (
              <ReactPlayer
                url={url}
                width="100%"
                height="100%"
                controls
                playing
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white/70">
                Youtube link yo‘q
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const WorksGallery = () => {
  const { dict } = useI18n();

  const tabs: TabKey[] = useMemo(
    () => [
      "All",
      "Commercial",
      "Product",
      "3D",
      "Corporate",
      "Music Clip",
      "Photo",
    ],
    []
  );

  const tabLabel = (tab: TabKey) => {
    const c = dict.works.categories;

    if (tab === "All") return c.all;
    if (tab === "Commercial") return c.commercial;
    if (tab === "Product") return c.product;
    if (tab === "Photo") return c.photo;

    // sizda dictda shular bor deb turibsiz:
    if (tab === "Corporate") return c.corporate;
    if (tab === "Music Clip") return c.musicClip;
    if (tab === "3D") return c.d3;

    return tab;
  };

  const [activeTab, setActiveTab] = useState<TabKey>("All");

  const filtered = useMemo(() => {
    if (activeTab === "All") return worksData;
    return worksData.filter((x) => x.tab === activeTab);
  }, [activeTab]);

  const [open, setOpen] = useState(false);
  const [activeWork, setActiveWork] = useState<WorkItem | null>(null);

  const openModal = (work: WorkItem) => {
    setActiveWork(work);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setActiveWork(null);
  };

  return (
    <>
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 mb-16 border-b border-border/50 pb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm font-bold uppercase tracking-widest px-6 py-2 rounded-full border transition-all ${
                  activeTab === tab
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border hover:border-primary/50"
                }`}
                type="button"
              >
                {tabLabel(tab)}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((work) => (
                <motion.div
                  key={work.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative aspect-video overflow-hidden rounded-3xl bg-muted cursor-pointer"
                  onClick={() => openModal(work)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") openModal(work);
                  }}
                >
                  <img
                    src={work.image || "/placeholder.svg"}
                    alt={work.title}
                    className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                    <span className="text-[10px] uppercase tracking-widest text-white/60 mb-2">
                      {tabLabel(work.tab as TabKey)}
                    </span>

                    <h3 className="text-3xl font-bold text-white uppercase tracking-tight mb-4">
                      {work.title}
                    </h3>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        openModal(work);
                      }}
                      className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center"
                      aria-label="Open video"
                    >
                      <ArrowUpRight className="w-6 h-6" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Modal
        open={open}
        title={activeWork?.title}
        url={activeWork?.youtube}
        onClose={closeModal}
      />
    </>
  );
};
