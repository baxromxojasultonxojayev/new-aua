"use client";

import React, { useEffect, useMemo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { useRouter, useSearchParams } from "next/navigation";

type TabKey =
  | "3D"
  | "Commercial"
  | "Corporate"
  | "Music Clip"
  | "Photo"
  | "Product";

type WorkItem = {
  id: string;
  title: string;
  tab: TabKey;
  image: string;
  href?: string;
  youtube?: string;
};

const normalizeId = (s: string) =>
  s
    .toLowerCase()
    .trim()
    .replace(/\.(png|jpg|jpeg|webp|gif)$/iu, "")
    .replace(/\s+/g, "-")
    .replace(/[^\p{L}\p{N}-]/gu, "");

const folderToTab = (folder: string): TabKey => {
  if (folder === "photos") return "Photo";
  return folder as TabKey;
};

const TITLE: Record<string, string> = {
  "asalya-unlucky": "Asalya - “Unlucky”",
  "asiat-кашель": "Asiat - “Кашель”",
  "samar-hiyla": "Samar - “Hiyla”",
  "konsta-x-munisa-rizayeva-2": "Munisa Rizayeva X Konsta - “Oylamading”",
  "baho-khabi": "Baho Khabi - “Чужой”",
  "raayxonaa-chempion": "Raayxonaa - “Chempion”",
  brb: "Biznesni Rivojlantirish Banki (BRB)",
  "centril-ladies": "Centris",
  dahua: "Dahua Technology",
  deepal: "Deepal",
  deepal1: "Deepal",
  aije: "AIJE",
  lixiang: "Lixiang",
  "lixian-thumbnail-2": "Lixiang",
  porsche: "Porsche X Technogym",
  "mening-biznesim": "Mening biznesim",
  "milaf-cola": "Milaf cola",
  milaf: "Milaf cola",
  toyota: "Toyota",
  "mercury-travel": "Mercury Travel",
  "your-service": "Your Service",
  "yoursevice-thumbnail": "Your Service",
  uzclaas: "UzCLAAS",
  "yandex-go": "Yandex Go",
  "yandex-market": "Yandex Market",
  "shinam-podcast": "Shinam Podcast",
  "central-asian-drift-show": "Central Asian Drift Show",
  rino: "Rino Jeans",
  "space-fusion": "Space Fusion",
  "asaka-bank-2": "Asaka Bank 2",
  "asaka-bank": "Asaka Bank",
};

const YT: Record<string, string> = {
  "asaka-bank-2": "https://youtu.be/r5M8un1iGIE",
  "asaka-bank": "https://youtu.be/EVZk3Eda740?si=1N2qvHd4ZS_3JKt-",
  brb: "https://youtu.be/AiWMzYX4UF0?si=s4_siUgNtKgZVUzt",
  lixiang: "https://youtu.be/Uvj6pd4GRJM?si=jm3s0mHd5vIHu5V3",
  deepal: "https://www.youtube.com/watch?v=8xjXWba_qlE",
  "mercury-travel": "https://www.youtube.com/watch?v=8xjXWba_qlE",
  "milaf-cola": "https://youtu.be/LZt4LlgyQRY?si=UvWx_2BT7ENTIpba",
  toyota: "https://youtu.be/-sbXXczGJcM?si=ERxMvg6Kn0YKbLCh",
  uzclaas: "https://youtu.be/afY3OwkikOk?si=6vufBrpXWYtOAJ3I",
  "mening-biznesim": "https://youtu.be/UPax2OGL4HM?si=v0yB7dfzSeacOdKV",
  "yandex-go": "https://youtu.be/53X5WiHZTpk?si=Y-ZCUKYFYULyYBtE",
  "yoursevice-thumbnail": "https://youtu.be/1Fw9SLvoARs?si=ycr7K-yvIW2SDTh_",
  "your-service": "https://youtu.be/1Fw9SLvoARs?si=ycr7K-yvIW2SDTh_",
  "centril-ladies": "https://youtu.be/fdz_JMZzfX8?si=NogZBpfI-lIPdmyj",
  dahua: "https://youtu.be/urHaY3nv3eo?si=bYQWcFbiyxtKUapb",
  aije: "https://youtu.be/CvQS2ohabfA?si=j1AkjWAuSPrvQxxH",
  "yandex-market": "https://youtu.be/VbSeGvoHwqM?si=eLw6tvXGAtg2pLB1",
  "shinam-podcast": "https://www.youtube.com/watch?v=PnQTTxf7QFs",
  porsche: "https://youtu.be/Wdy4rjjOFak?si=WbYj4gFeJZo8B7Sl",
  "asalya-unlucky": "https://youtu.be/kAqZpG71mZg?si=hrMymaOpW4KvWMZW",
  "asiat-кашель": "https://youtu.be/r-TORAhYud8",
  "samar-hiyla": "https://youtu.be/Lto6c_vB9l0?si=HizssybXoMZpYRZV",
  "uyxoqi-baho-khabi": "https://youtu.be/BoDDlZQpqVM?si=8ODMMiRGbMVk9Aao",
  "raayxonaa-chempion": "https://youtu.be/lKrWoj9VR5w?si=1II7IP3XXSAXlzjf",
  "konsta-x-munisa-rizayeva-2":
    "https://youtu.be/c7DwV2HMmNw?si=S7SxirjUKiKS71uD",
};

const getYoutubeId = (raw?: string) => {
  if (!raw) return "";
  try {
    const u = new URL(raw);

    if (u.hostname.includes("youtu.be")) {
      return u.pathname.split("/").filter(Boolean)[0] || "";
    }

    const v = u.searchParams.get("v");
    if (v) return v;

    if (u.pathname.includes("/shorts/")) {
      return u.pathname.split("/shorts/")[1]?.split("/")[0] || "";
    }

    if (u.pathname.includes("/embed/")) {
      return u.pathname.split("/embed/")[1]?.split("/")[0] || "";
    }

    return "";
  } catch {
    return "";
  }
};

const makeItems = (folder: string, files: string[]): WorkItem[] => {
  const tab = folderToTab(folder);
  return files.map((file) => {
    const key = normalizeId(file);
    const title = TITLE[key] || "—";
    const id = `${folder}-${file}`.toLowerCase().replace(/\s+/g, "-");
    const youtube = YT[key];

    return {
      id,
      title,
      tab,
      image: `/media/${folder}/${file}`,
      href: `/works/${id}`,
      youtube,
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
    "Baho Khabi.jpg",
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

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  const id = getYoutubeId(url);

  const embedSrc = id
    ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&controls=1`
    : "";

  return (
    <div className="fixed inset-0 z-[9999]">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div
          className="w-full max-w-4xl rounded-2xl bg-black border border-white/10 overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
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
            {id ? (
              <iframe
                key={id}
                className="absolute inset-0 w-full h-full"
                src={embedSrc}
                title={title || "YouTube video"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white/70">
                Youtube link topilmadi yoki xato
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
  const searchParams = useSearchParams();
  const router = useRouter();

  const tabs: TabKey[] = useMemo(
    () => ["Commercial", "Product", "3D", "Corporate", "Music Clip", "Photo"],
    []
  );

  const tabLabel = (tab: TabKey) => {
    const c: any = dict.works.categories;
    if (tab === "Commercial") return c.commercial || "Commercial";
    if (tab === "Product") return c.product || "Product";
    if (tab === "Photo") return c.photo || "Photo";
    if (tab === "Corporate") return c.corporate || "Corporate";
    if (tab === "Music Clip") return c.musicClip || "Music Clip";
    if (tab === "3D") return c.d3 || "3D";
    return tab;
  };

  const readTabFromUrl = useCallback((): TabKey => {
    const t = (searchParams.get("tab") || "").trim();
    if (tabs.includes(t as TabKey)) return t as TabKey;
    return "Commercial";
  }, [searchParams, tabs]);

  const [activeTab, setActiveTab] = useState<TabKey>("Commercial");

  useEffect(() => {
    setActiveTab(readTabFromUrl());
  }, [readTabFromUrl]);

  const setTab = (tab: TabKey) => {
    setActiveTab(tab);
    router.replace(`/works?tab=${encodeURIComponent(tab)}`);
  };

  const filtered = useMemo(() => {
    return worksData.filter((x) => x.tab === activeTab);
  }, [activeTab]);

  const [open, setOpen] = useState(false);
  const [activeWork, setActiveWork] = useState<WorkItem | null>(null);

  const openModal = (work: WorkItem) => {
    if (!work.youtube) return;
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
                onClick={() => setTab(tab)}
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
              {filtered.map((work) => {
                const imgSrc = work.image
                  ? encodeURI(work.image)
                  : "/placeholder.svg";

                return (
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
                      src={imgSrc}
                      alt={work.title}
                      className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          "/placeholder.svg";
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-100 transition-opacity duration-500" />

                    <div className="absolute inset-0 p-8 flex flex-col justify-end transition-all duration-500">
                      <span className="text-[10px] uppercase tracking-widest text-white/60 mb-2">
                        {tabLabel(work.tab)}
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
                        disabled={!work.youtube}
                        title={!work.youtube ? "Video yo‘q" : "Open video"}
                        style={{
                          opacity: work.youtube ? 1 : 0.5,
                          cursor: work.youtube ? "pointer" : "not-allowed",
                        }}
                      >
                        <ArrowUpRight className="w-6 h-6" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
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
