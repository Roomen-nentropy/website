import type { Lang } from './types';

export const ui = {
  bg: {
    siteName: "Nentropy",
    tagline: "Съответствие във веригата на доставки — просто и човешко",
    nav: {
      solutions: "Решения",
      blog: "Блог",
      events: "Събития",
      docs: "Интеграции",
      about: "За нас",
      contact: "Контакти",
      login: "Вход",
      trial: "Безплатен пробен период",
    },
    cta: {
      consultation: "Запишете консултация",
      trial: "Стартирайте безплатно",
      demo: "Заявка за демо",
      contact: "Свържете се с нас",
      learnMore: "Научете повече",
    },
    footer: {
      product: "Продукт",
      company: "Компания",
      legal: "Правна информация",
      privacy: "Поверителност",
      terms: "Общи условия",
      cookies: "Бисквитки",
      rights: "Всички права запазени.",
      appLogin: "Вход в платформата",
    },
    home: {
      heroTitle: "Едно работно пространство за съответствие, което наистина е човешко",
      heroSubtitle:
        "EUDR надлежна проверка и етикетиране по Регламент 2025/40 — от имейла до доставчика до QR кода за потребителя.",
      solutionsTitle: "Намерете вашия път",
      solutionsSubtitle: "Същата платформа — настроена за вашия сектор и регулаторен фокус.",
      howTitle: "Как работи",
      step1Title: "Изпратете анкети",
      step1Desc: "Цифрови въпросници към доставчици с качване на документи — без вход за тях.",
      step2Title: "Оценете риска",
      step2Desc: "Структурирани оценки на риска с предварително попълване от отговорите.",
      step3Title: "Декларирайте и проследявайте",
      step3Desc: "DDS, партиди, етикети и публични trace страници от едно място.",
      regulatoryTitle: "EUDR и Регламент 2025/40 в един акаунт",
      regulatoryDesc:
        "Две регулации, един вход — без дублиране на доставчици и документи.",
      finalCtaTitle: "Готови ли сте да спрете ръчната документация?",
      finalCtaDesc: "Запишете консултация или стартирайте 7-дневен безплатен пробен период.",
    },
    solutions: {
      challenges: "Предизвикателства",
      helps: "Как помага Nentropy",
      faq: "Често задавани въпроси",
      related: "Свързани решения",
    },
    contact: {
      title: "Контакти",
      subtitle: "Свържете се с екипа ни",
      consultation: "Запишете консултация",
      rumenOnly: "За EUDR и Регламент 2025/40",
    },
    blog: { title: "Блог", readMore: "Прочетете", downloadPdf: "Изтегли PDF" },
    events: {
      title: "Събития",
      upcoming: "Предстоящи",
      past: "Минали събития",
      register: "Регистрация",
      watch: "Гледайте",
    },
    docs: { title: "Документация за интеграции", overview: "Преглед" },
    comingSoon: "Очаквайте скоро",
  },
  en: {
    siteName: "Nentropy",
    tagline: "Supply chain compliance — simple and human",
    nav: {
      solutions: "Solutions",
      blog: "Blog",
      events: "Events",
      docs: "Integrations",
      about: "About",
      contact: "Contact",
      login: "Log in",
      trial: "Free trial",
    },
    cta: {
      consultation: "Book a consultation",
      trial: "Start free trial",
      demo: "Request demo",
      contact: "Contact us",
      learnMore: "Learn more",
    },
    footer: {
      product: "Product",
      company: "Company",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookies: "Cookie Policy",
      rights: "All rights reserved.",
      appLogin: "Platform login",
    },
    home: {
      heroTitle: "One compliance workspace that actually feels human",
      heroSubtitle:
        "EUDR due diligence and EU 2025/40 packaging labels—from supplier inbox to consumer QR.",
      solutionsTitle: "Find your path",
      solutionsSubtitle: "Same platform—tuned for your sector and regulatory focus.",
      howTitle: "How it works",
      step1Title: "Send surveys",
      step1Desc: "Digital supplier questionnaires with document upload—no supplier login required.",
      step2Title: "Assess risk",
      step2Desc: "Structured risk assessments prefilled from survey responses.",
      step3Title: "Declare & trace",
      step3Desc: "DDS, batches, labels, and public trace pages from one place.",
      regulatoryTitle: "EUDR and Regulation 2025/40 in one account",
      regulatoryDesc:
        "Two regulations, one login—no duplicate suppliers or document vaults.",
      finalCtaTitle: "Ready to stop manual documentation?",
      finalCtaDesc: "Book a consultation or start your 7-day free trial.",
    },
    solutions: {
      challenges: "Your challenges",
      helps: "How Nentropy helps",
      faq: "Frequently asked questions",
      related: "Related solutions",
    },
    contact: {
      title: "Contact",
      subtitle: "Get in touch with our team",
      consultation: "Book a consultation",
      rumenOnly: "For EUDR and Regulation 2025/40",
    },
    blog: { title: "Blog", readMore: "Read more", downloadPdf: "Download PDF" },
    events: {
      title: "Events",
      upcoming: "Upcoming",
      past: "Past events",
      register: "Register",
      watch: "Watch",
    },
    docs: { title: "Integration documentation", overview: "Overview" },
    comingSoon: "Coming soon",
  },
} as const satisfies Record<Lang, Record<string, unknown>>;

export function t(lang: Lang) {
  return ui[lang];
}

export function langPath(lang: Lang, path: string) {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `/${lang}${clean === '/' ? '' : clean}`;
}
