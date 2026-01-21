"use client";

import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";

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
  clients: {
    title: string;
    desc: string;
    ctaTitle: string;
  };
  stats: {
    items: {
      projects: { label: string; brand: string };
      retention: { label: string; brand: string };
      awards: { label: string; brand: string };
    };
  };
  footer: {
    desc: string;
    studiosTitle: string;
    connectTitle: string;
    address: string;
    phoneLabel: string;
    rights: string;
    privacy: string;
    terms: string;
  };
}

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
        title: "Photo production",
        desc: "Демонстрационные видео и контент для продвижения продукта.",
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
    clients: {
      title: "Наши клиенты",
      desc: "AUA Creative Agency — продакшн-партнёр ведущих брендов и компаний региона.",
      ctaTitle: "Мы превращаем идеи в визуальные истории.",
    },
    stats: {
      items: {
        projects: { label: "Проектов выполнено", brand: "Глобальный масштаб" },
        retention: { label: "Удержание клиентов", brand: "Фокус на качестве" },
        awards: {
          label: "Профессиональных наград",
          brand: "Креативное превосходство",
        },
      },
    },
    footer: {
      desc: "Помогаем брендам рассказывать свои истории через кинематографичный видеопродакшн.",
      studiosTitle: "Студия",
      connectTitle: "Связаться",
      address: "Chimkents Street, 8, Tashkent City, Uzbekistan",
      phoneLabel: "Телефон",
      rights: "© 2026 AUA Creative Agency. Все права защищены.",
      privacy: "Политика конфиденциальности",
      terms: "Условия использования",
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
        title: "Video production",
        desc: "Commercial, corporate, and product videos for any industry.",
        features: [
          "TV & Online Ads",
          "Corporate Campaigns",
          "Brand Promos",
          "Full-cycle Production",
        ],
      },
      product: {
        title: "Photo production",
        desc: "World-class demonstration videos and product content.",
        features: [
          "Macro cinematography",
          "Studio setups",
          "CGI integration",
          "Dynamic editing",
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
          "Commercial shoots",
          "Post-production",
        ],
      },
      presentation: {
        title: "Presentation Videos",
        desc: "Videos for exhibitions, presentations, and major product launches.",
        features: [
          "Cinematic visuals",
          "Attention to detail",
          "Brand storytelling",
          "High resolution",
        ],
      },
      reels: {
        title: "Reels Production — Vertica Visuals",
        desc: "Short, dynamic content for social media.",
        features: [
          "Reels / Shorts / TikTok",
          "Mobile storytelling",
          "Natural movement",
          "Trending edits",
        ],
        button: "Explore",
      },
    },
    clients: {
      title: "Our Clients",
      desc: "AUA Creative Agency is the production partner of leading brands and companies in the region.",
      ctaTitle: "We turn ideas into visual stories.",
    },
    stats: {
      items: {
        projects: { label: "Проектов выполнено", brand: "Глобальный масштаб" },
        retention: { label: "Удержание клиентов", brand: "Фокус на качестве" },
        awards: {
          label: "Профессиональных наград",
          brand: "Креативное превосходство",
        },
      },
    },
    footer: {
      desc: "Helping brands tell their stories through cinematic video experiences.",
      studiosTitle: "Studios",
      connectTitle: "Connect",
      address: "Chimkents Street, 8, Tashkent City, Uzbekistan",
      phoneLabel: "Phone",
      rights: "© 2026 AUA Creative Agency. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
  },

  uz: {
    hero: {
      title: "AUA Creative Agency — Jahon darajasidagi prodakshn",
      subtitle:
        "Biz hikoya qiluvchi, ilhomlantiruvchi va natija beruvchi tijoriy hamda mahsulot videolarini yaratamiz.",
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
      desc: "Reklama, mahsulot va imidj fotosuratlari — estetika va sifatga urg'u bilan.",
      cta: "Foto sessiya so'rovi",
    },
    services: {
      title: "Xizmatlarimiz",
      desc: "Biz g'oyadan yakuniy montajgacha to'liq prodakshn xizmatlarini taklif qilamiz.",
      heroTitle: "G'oyalarni vizual haqiqatga aylantiramiz",
      heroDesc:
        "AUA Creative Agency g'oyadan yakuniy montajgacha bo'lgan to'liq video prodakshn xizmatini taqdim etadi.",
      heroScroll: "Xizmatlarni ko'ring",
      viewAll: "Barcha xizmatlar",
      ctaTitle: "Loyihangizni muhokama qilamizmi?",
      ctaDesc:
        "Vazifalaringizni yozing — biz 24 soat ichida eng yaxshi formatni taklif qilamiz.",
      ctaButton: "Smetani so'rash",
      commercial: {
        title: "Video production",
        desc: "Har qanday soha uchun reklama, korporativ va mahsulot videolari.",
        features: [
          "TV va onlayn reklama",
          "Korporativ kampaniyalar",
          "Brend promolari",
          "To'liq sikl prodakshn",
        ],
      },
      product: {
        title: "Photo production",
        desc: "Mahsulotni targ'ib qilish uchun video va kontent.",
        features: [
          "Makro suratga olish",
          "Studiya postanovkalari",
          "CGI integratsiya",
          "Dinamik montaj",
        ],
      },
      cgi: {
        title: "3D / CGI Production",
        desc: "Mahsulot vizualizatsiyasi, motion-grafika va murakkab simulyatsiyalar.",
        features: [
          "Mahsulot renderi",
          "Personaj animatsiyasi",
          "VFX",
          "Motion Graphics",
        ],
      },
      photo: {
        title: "Photo Production",
        desc: "Reklama, mahsulot, fashion va imidj suratga olish (chuqur retush bilan).",
        features: [
          "Mahsulot & predmet foto",
          "Fashion / Lifestyle",
          "Tijoriy suratga olish",
          "Post-prodakshn",
        ],
      },
      presentation: {
        title: "Presentation Videos",
        desc: "Ko'rgazma, taqdimot va yangi mahsulotlar launch uchun videolar.",
        features: [
          "Kinematografik vizual",
          "Detallarga e'tibor",
          "Brend hikoyasi",
          "Yuqori sifat",
        ],
      },
      reels: {
        title: "Reels Production — Vertica Visuals",
        desc: "Ijtimoiy tarmoqlar uchun qisqa va dinamik kontent.",
        features: [
          "Reels / Shorts / TikTok",
          "Mobil story",
          "Tabiiy harakat",
          "Trend montaj",
        ],
        button: "Batafsil",
      },
    },
    clients: {
      title: "Mijozlarimiz",
      desc: "AUA Creative Agency — mintaqadagi yetakchi brend va kompaniyalar uchun prodakshn-hamkor.",
      ctaTitle: "Biz g'oyalarni vizual hikoyalarga aylantiramiz.",
    },
    stats: {
      items: {
        projects: { label: "Bajarilgan loyihalar", brand: "Global miqyos" },
        retention: {
          label: "Mijozlarni saqlab qolish",
          brand: "Sifatga urg'u",
        },
        awards: { label: "Sohaviy mukofotlar", brand: "Kreativ mukammallik" },
      },
    },

    footer: {
      desc: "Brendlarga hikoyalarini kinomatografik video orqali yetkazishga yordam beramiz.",
      studiosTitle: "Studiya",
      connectTitle: "Aloqa",
      address: "Chimkents ko‘chasi, 8, Tashkent City, O‘zbekiston",
      phoneLabel: "Telefon",
      rights: "© 2026 AUA Creative Agency. Barcha huquqlar himoyalangan.",
      privacy: "Maxfiylik siyosati",
      terms: "Foydalanish shartlari",
    },
  },
};

interface I18nContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
  dict: Dictionary;
}

const I18nContext = createContext<I18nContextProps | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("ru");

  useEffect(() => {
    try {
      const saved = (localStorage.getItem("lang") || "").trim() as Language;
      if (saved === "ru" || saved === "en" || saved === "uz") {
        setLangState(saved);
      }
    } catch {}
  }, []);

  const setLang = (l: Language) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {}
  };

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
