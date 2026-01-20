"use client";

import type React from "react";
import { createContext, useContext, useState } from "react";

/* -------------------- types -------------------- */
export type Language = "ru" | "en" | "uz";

export interface Dictionary {
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scroll: string;
  };
  nav: {
    works: string;
    services: string;
    photo: string;
    cgi: string;
    clients: string;
    contacts: string;
    request: string;
  };
  projects: {
    title: string;
    desc: string;
    viewAll: string;
  };
  works: {
    title: string;
    subtitle: string;
    categories: {
      all: string;
      commercial: string;
      product: string;
      cgi: string;
      photo: string;
      reels: string;

      // ✅ added for your folders/tabs
      corporate: string;
      musicClip: string;
      d3: string;
    };
  };
  cgi: {
    title: string;
    desc: string;
    cta: string;
    projects: {
      rendering: { title: string; desc: string };
      motion: { title: string; desc: string };
      sims: { title: string; desc: string };
    };
  };
  photo: {
    title: string;
    desc: string;
    cta: string;
  };
  services: {
    title: string;
    desc: string;
    heroTitle: string;
    heroDesc: string;
    heroScroll: string;
    viewAll: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaButton: string;
    commercial: { title: string; desc: string; features: string[] };
    product: { title: string; desc: string; features: string[] };
    cgi: { title: string; desc: string; features: string[] };
    photo: { title: string; desc: string; features: string[] };
    presentation: { title: string; desc: string; features: string[] };
    reels: { title: string; desc: string; features: string[]; button: string };
  };
}

/* -------------------- dictionaries -------------------- */
const dictionaries: Record<Language, Dictionary> = {
  ru: {
    hero: {
      title: "AUA Creative Agency — продакшн мирового уровня",
      subtitle:
        "Мы создаем коммерческие, корпоративные и продуктовые видео, которые рассказывают истории, вдохновляют и приносят результат.",
      ctaPrimary: "Смотреть шоурил",
      ctaSecondary: "Наши работы",
      scroll: "Листайте вниз",
    },
    nav: {
      works: "Работы",
      services: "Услуги",
      photo: "Фото",
      cgi: "3D / CGI",
      clients: "Клиенты",
      contacts: "Контакты",
      request: "Запросить продакшн",
    },
    projects: {
      title: "Избранные проекты",
      desc: "Визуальные истории, созданные для ведущих брендов.",
      viewAll: "Все работы",
    },
    works: {
      title: "Работы",
      subtitle:
        "Портфолио проектов, созданных командой AUA Creative Agency для ведущих брендов.",
      categories: {
        all: "Все",
        commercial: "Commercial",
        product: "Product",
        cgi: "3D / CGI",
        photo: "Photo",
        reels: "Reels",

        // ✅ your folder tabs
        corporate: "Corporate",
        musicClip: "Music Clip",
        d3: "3D",
      },
    },
    cgi: {
      title: "3D / CGI",
      desc: "Визуализация будущего. Мы создаем миры и объекты, которые невозможно отличить от реальности.",
      cta: "Обсудить 3D продакшн",
      projects: {
        rendering: {
          title: "Product Rendering",
          desc: "Фотореалистичная визуализация электроники.",
        },
        motion: {
          title: "Motion Graphics",
          desc: "Динамичная графика для рекламных кампаний.",
        },
        sims: {
          title: "Simulations",
          desc: "Сложные физические симуляции жидкостей и частиц.",
        },
      },
    },
    photo: {
      title: "Фото",
      desc: "Рекламная, предметная и имиджевая съёмка с акцентом на эстетику.",
      cta: "Запросить фотосъёмку",
    },
    services: {
      title: "Наши услуги",
      desc: "Мы предлагаем полный спектр продакшн-услуг, от идеи до финального монтажа.",
      heroTitle: "Превращаем идеи в визуальную реальность",
      heroDesc:
        "AUA Creative Agency предоставляет полный цикл видео-производства от идеи до финального монтажа.",
      heroScroll: "Исследуйте наши услуги",
      viewAll: "Все услуги",
      ctaTitle: "Готовы обсудить ваш проект?",
      ctaDesc:
        "Расскажите нам о ваших задачах, и мы предложим оптимальный формат в течение 24 часов.",
      ctaButton: "Запросить смету",
      commercial: {
        title: "Video production",
        desc: "Рекламные, корпоративные и продуктовые ролики для любой сферы деятельности.",
        features: [
          "ТВ и онлайн реклама",
          "Корпоративные кампании",
          "Имиджевые промо",
          "Полноцикловое производство",
        ],
      },
      product: {
        title: "Photo Production",
        desc: "Рекламная, предметная, fashion и имиджевая фотосъёмка с глубокой ретушью.",
        features: [
          "Макросъёмка продукции",
          "Студийные постановки",
          "Интеграция CGI элементов",
          "Динамичный монтаж",
        ],
      },
      cgi: {
        title: "3D / CGI Production",
        desc: "Продуктовая визуализация, моушн-графика и сложные симуляции.",
        features: [
          "Продуктовый рендеринг",
          "Анимация персонажей",
          "Визуальные эффекты (VFX)",
          "Motion Graphics",
        ],
      },
      photo: {
        title: "Photo Production",
        desc: "Рекламная, предметная, fashion и имиджевая съёмка с глубокой ретушью.",
        features: [
          "Product & Subject photo",
          "Fashion / Lifestyle",
          "Коммерческая съемка",
          "Post-production",
        ],
      },
      presentation: {
        title: "Presentation Videos",
        desc: "Видео для выставок, презентаций и громких запусков новых продуктов.",
        features: [
          "Кинематографичный визуал",
          "Акцент на детали",
          "Сторителинг бренда",
          "Высокое разрешение",
        ],
      },
      reels: {
        title: "Reels Production — Vertica Visuals",
        desc: "Создание короткого динамичного контента для соцсетей.",
        features: [
          "Reels / Shorts / TikTok",
          "Мобильный сторителлинг",
          "Естественное движение",
          "Трендовый монтаж",
        ],
        button: "Подробнее",
      },
    },
  },

  en: {
    hero: {
      title: "AUA Creative Agency — World-Class Production",
      subtitle:
        "We create commercial and product videos that tell stories, inspire, and drive results.",
      ctaPrimary: "Watch Showreel",
      ctaSecondary: "Our Works",
      scroll: "Scroll to explore",
    },
    nav: {
      works: "Works",
      services: "Services",
      photo: "Photo",
      cgi: "3D / CGI",
      clients: "Clients",
      contacts: "Contacts",
      request: "Inquiry",
    },
    projects: {
      title: "Featured Projects",
      desc: "Visual stories crafted for leading brands.",
      viewAll: "View All",
    },
    works: {
      title: "Works",
      subtitle:
        "A portfolio of projects created by the AUA Creative Agency team for leading brands.",
      categories: {
        all: "All",
        commercial: "Commercial",
        product: "Product",
        cgi: "3D / CGI",
        photo: "Photo",
        reels: "Reels",

        // ✅ your folder tabs
        corporate: "Corporate",
        musicClip: "Music Clip",
        d3: "3D",
      },
    },
    cgi: {
      title: "3D / CGI",
      desc: "Visualizing the future. We create worlds and objects indistinguishable from reality.",
      cta: "Discuss 3D Production",
      projects: {
        rendering: {
          title: "Product Rendering",
          desc: "Photorealistic visualization of electronics.",
        },
        motion: {
          title: "Motion Graphics",
          desc: "Dynamic graphics for advertising campaigns.",
        },
        sims: {
          title: "Simulations",
          desc: "Complex physical simulations of fluids and particles.",
        },
      },
    },
    photo: {
      title: "Photo",
      desc: "Advertising, product, and brand photography with a focus on aesthetics.",
      cta: "Inquire Photo Session",
    },
    services: {
      title: "Our Services",
      desc: "We offer a full spectrum of production services from concept to final cut.",
      heroTitle: "Turning Ideas into Visual Reality",
      heroDesc:
        "AUA Creative Agency provides full-cycle video production from concept to final cut.",
      heroScroll: "Explore our services",
      viewAll: "All Services",
      ctaTitle: "Ready to discuss your project?",
      ctaDesc:
        "Tell us about your tasks, and we'll propose the best format within 24 hours.",
      ctaButton: "Request Quote",
      commercial: {
        title: "Commercial Production",
        desc: "Advertising and image films for brands, banks, and corporations.",
        features: [
          "TV & Online Ads",
          "Corporate Campaigns",
          "Image Promos",
          "Full-cycle Production",
        ],
      },
      product: {
        title: "Photo Production",
        desc: "World-class demonstration videos and product shoots.",
        features: [
          "Macro Cinematography",
          "Studio Setups",
          "CGI Integration",
          "Dynamic Editing",
        ],
      },
      cgi: {
        title: "3D / CGI Production",
        desc: "Product visualization, motion graphics, and complex simulations.",
        features: [
          "Product Rendering",
          "Character Animation",
          "Visual Effects (VFX)",
          "Motion Graphics",
        ],
      },
      photo: {
        title: "Photo Production",
        desc: "Advertising, product, fashion, and brand photography with deep retouching.",
        features: [
          "Product & Subject photo",
          "Fashion / Lifestyle",
          "Commercial Shoots",
          "Post-production",
        ],
      },
      presentation: {
        title: "Presentation Videos",
        desc: "Videos for exhibitions, presentations, and major product launches.",
        features: [
          "Cinematic Visuals",
          "Attention to Detail",
          "Brand Storytelling",
          "High Resolution",
        ],
      },
      reels: {
        title: "Reels Production — Vertica Visuals",
        desc: "Creating short, dynamic social media content with a focus on virality.",
        features: [
          "Reels / Shorts / TikTok",
          "Mobile Storytelling",
          "Natural Movement",
          "Trending Edits",
        ],
        button: "Explore",
      },
    },
  },

  uz: {
    hero: {
      title: "AUA Creative Agency — Jahon darajasidagi prodakshn",
      subtitle:
        "Biz hikoya qiluvchi, ilhomlantiruvchi va natija beruvchi tijoriy va mahsulot videolarini yaratamiz.",
      ctaPrimary: "Shourilni ko'rish",
      ctaSecondary: "Ishlarimiz",
      scroll: "Pastga tushing",
    },
    nav: {
      works: "Ishlar",
      services: "Xizmatlar",
      photo: "Foto",
      cgi: "3D / CGI",
      clients: "Mijozlar",
      contacts: "Kontaktlar",
      request: "So'rov yuborish",
    },
    projects: {
      title: "Tanlangan loyihalar",
      desc: "Yetakchi brendlar uchun yaratilgan vizual hikoyalar.",
      viewAll: "Barcha ishlar",
    },
    works: {
      title: "Ishlar",
      subtitle:
        "AUA Creative Agency jamoasi tomonidan yetakchi brendlar uchun yaratilgan loyihalar portfeli.",
      categories: {
        all: "Barchasi",
        commercial: "Commercial",
        product: "Product",
        cgi: "3D / CGI",
        photo: "Photo",
        reels: "Reels",

        // ✅ your folder tabs
        corporate: "Korporativ",
        musicClip: "Musiqa klip",
        d3: "3D",
      },
    },
    cgi: {
      title: "3D / CGI",
      desc: "Kelajak vizualizatsiyasi. Biz reallikdan farq qilmaydigan dunyo va ob'ektlarni yaratamiz.",
      cta: "3D prodakshnni muhokama qilish",
      projects: {
        rendering: {
          title: "Product Rendering",
          desc: "Elektronikaning fotorealistik vizualizatsiyasi.",
        },
        motion: {
          title: "Motion Graphics",
          desc: "Reklama kampaniyalari uchun dinamik grafika.",
        },
        sims: {
          title: "Simulations",
          desc: "Suyuqlik va zarrachalarning murakkab jismoniy simulyatsiyalari.",
        },
      },
    },
    photo: {
      title: "Foto",
      desc: "Estetika va texnik mukammallikka urg'u berilgan reklama va imidj suratga olish xizmati.",
      cta: "Fotosurat so'rovini yuborish",
    },
    services: {
      title: "Xizmatlarimiz",
      desc: "Biz g'oyadan yakuniy montajgacha to'liq prodakshn xizmatini taklif etadi.",
      heroTitle: "G'oyalarni vizual haqiqatga aylantiramiz",
      heroDesc:
        "AUA Creative Agency g'oyadan yakuniy montajgacha bo'lgan to'liq video prodakshn xizmatini taqdim etadi.",
      heroScroll: "Xizmatlarimizni o'rganing",
      viewAll: "Barcha xizmatlar",
      ctaTitle: "Loyihangizni muhokama qilishga tayyormisiz?",
      ctaDesc:
        "Vazifalaringiz haqida aytib bering va biz 24 soat ichida eng yaxshi formatni taklif qilamiz.",
      ctaButton: "Smetani so'rash",
      commercial: {
        title: "Commercial Production",
        desc: "Brendlar, banklar va korporatsiyalar uchun reklama va imidj roliklari.",
        features: [
          "TV va onlayn reklama",
          "Korporativ kampaniyalar",
          "Imidj promolari",
          "To'liq sikl prodakshn",
        ],
      },
      product: {
        title: "Photo Production",
        desc: "Jahon darajasidagi namoyish videolari va mahsulot suratga olish ishlari.",
        features: [
          "Makro-tasvirga olish",
          "Studiya postanovkalari",
          "CGI elementlar integratsiyasi",
          "Montaj",
        ],
      },
      cgi: {
        title: "3D / CGI Production",
        desc: "Mahsulot vizualizatsiyasi, moušn-grafika va murakkab simulyatsiyalar.",
        features: [
          "Mahsulot renderi",
          "Personaj animatsiyasi",
          "Vizual effektlar (VFX)",
          "Motion Graphics",
        ],
      },
      photo: {
        title: "Photo Production",
        desc: "Reklama, mahsulot va imidj fotosuratlari hamda chuqur retush xizmati.",
        features: [
          "Product & Subject photo",
          "Fashion / Lifestyle",
          "Tijoriy suratga olish",
          "Post-prodakshn",
        ],
      },
      presentation: {
        title: "Presentation Videos",
        desc: "Ko'rgazmalar, taqdimotlar va yangi mahsulotlarni ishga tushirish uchun videolar.",
        features: [
          "Kinematografik vizual",
          "Detallarga e'tibor",
          "Brend hikoyasi",
          "Yuqori ruxsat (8K/4K)",
        ],
      },
      reels: {
        title: "Reels Production — Vertica Visuals",
        desc: "Ijtimoiy tarmoqlar uchun dinamik va virusli kontent yaratish.",
        features: [
          "Reels / Shorts / TikTok",
          "Mobil hikoya qilish",
          "Tabiiy harakat",
          "Trend montaj",
        ],
        button: "Batafsil",
      },
    },
  },
};

/* -------------------- context -------------------- */
interface I18nContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
  dict: Dictionary;
}

const I18nContext = createContext<I18nContextProps | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("ru");

  return (
    <I18nContext.Provider value={{ lang, setLang, dict: dictionaries[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within I18nProvider");
  return context;
}
