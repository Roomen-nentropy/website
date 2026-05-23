import type { Lang } from './types';
import { withBase } from './paths';

export const ui = {
  bg: {
    siteName: "Nentropy",
    tagline: "Съответствие във веригата на доставки — просто и по човешки",
    nav: {
      solutions: "Решения",
      blog: "Блог",
      events: "Събития",
      docs: "Интеграции",
      about: "За нас",
      contact: "Контакти",
    },
    cta: {
      consultation: "Запишете консултация",
      demo: "Заявете демонстрация",
      contact: "Свържете се с нас",
      learnMore: "Вижте решението",
    },
    footer: {
      product: "Решения",
      company: "Компания",
      legal: "Правна информация",
      privacy: "Поверителност",
      terms: "Общи условия",
      cookies: "Бисквитки",
      rights: "Всички права запазени.",
      brochure: "Интерактивна брошура",
    },
    home: {
      heroTitle: "Едно работно пространство за съответствие, което наистина работи за хората",
      heroSubtitle:
        "Регламентът за обезлесяването (EUDR) и изискванията по Регламент 2025/40 за опаковки и етикети — от първия имейл към доставчик до QR кода за потребителя, без планини от лепенки и таблици.",
      storyTitle: "От хаос към ред",
      storyBefore: "Преди: ръчни задачи, лепенки, изтекли срокове",
      storyAfter: "С Nentropy: структура, ясни стъпки, спокойен екип",
      solutionsTitle: "Изберете вашия регулаторен фокус",
      solutionsSubtitle:
        "Същата платформа — с настройки за вашия сектор. Не е нужно да избирате между EUDR, опаковки или производствен контрол.",
      howTitle: "Как работи на практика",
      step1Title: "Съберете данни от доставчици",
      step1Desc:
        "Изпращате цифрови анкети с документи и геолокация. Доставчикът попълва през линк — без отделен акаунт.",
      step2Title: "Оценете и документирайте риска",
      step2Desc:
        "Оценките на риска се подготвят от отговорите. Имате ясен запис за одит — PDF и структурирани данни.",
      step3Title: "Декларирайте и проследявайте партиди",
      step3Desc:
        "DDS, партиди, етикети и публични страници за проследимост — свързани в една база, а не в десет папки.",
      proofTitle: "Платформата в действие",
      proofDesc: "Регистър на доставчици, анкети и оценки на риска — ясен интерфейс, без таблици в Excel.",
      regulatoryTitle: "EUDR и Регламент 2025/40 в един акаунт",
      regulatoryDesc:
        "Две различни регулации, един набор доставчици и документи. Без дублиране на анкети и без разминаване между отделите.",
      finalCtaTitle: "Готови ли сте да махнете хаоса от съответствието?",
      finalCtaDesc: "Заявете демонстрация или консултация — ще ви покажем пътя според вашия тип оператор.",
    },
    solutions: {
      challenges: "Какво усложнява ежедневието ви",
      helps: "Как Nentropy ви помага",
      faq: "Често задавани въпроси",
      related: "Свързани решения",
      intro: "За кого е това решение",
    },
    contact: {
      title: "Контакти",
      subtitle: "Заявете демонстрация или консултация — отговаряме лично.",
      consultation: "Изпратете имейл",
      rumenOnly: "За EUDR и Регламент 2025/40 — Rumen Lozanov",
      brochureLink: "Вижте интерактивната ни брошура",
    },
    blog: { title: "Блог", readMore: "Прочетете", downloadPdf: "Изтеглете PDF" },
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
    },
    cta: {
      consultation: "Book a consultation",
      demo: "Request a demo",
      contact: "Contact us",
      learnMore: "See the solution",
    },
    footer: {
      product: "Solutions",
      company: "Company",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookies: "Cookie Policy",
      rights: "All rights reserved.",
      brochure: "Interactive brochure",
    },
    home: {
      heroTitle: "One compliance workspace that actually works for people",
      heroSubtitle:
        "EU Deforestation Regulation (EUDR) and Regulation 2025/40 packaging labels—from the first supplier email to the consumer QR, without sticky notes and spreadsheet chaos.",
      storyTitle: "From chaos to clarity",
      storyBefore: "Before: manual overload",
      storyAfter: "With Nentropy: structure and calm",
      solutionsTitle: "Choose your regulatory focus",
      solutionsSubtitle: "Same platform—configured for your sector.",
      howTitle: "How it works in practice",
      step1Title: "Collect supplier data",
      step1Desc: "Digital surveys with documents and geolocation. Suppliers use a link—no account required.",
      step2Title: "Assess and document risk",
      step2Desc: "Risk assessments prefilled from responses. Audit-ready PDFs and structured records.",
      step3Title: "Declare and trace batches",
      step3Desc: "DDS, batches, labels, and public trace pages in one system—not ten folders.",
      proofTitle: "Platform in action",
      proofDesc: "Supplier register, surveys, and risk assessments — a clear workspace, not another spreadsheet.",
      regulatoryTitle: "EUDR and Regulation 2025/40 in one account",
      regulatoryDesc: "Two regulations, one supplier and document base.",
      finalCtaTitle: "Ready to remove compliance chaos?",
      finalCtaDesc: "Request a demo or consultation—we'll walk through your operator type.",
    },
    solutions: {
      challenges: "What makes daily work harder",
      helps: "How Nentropy helps",
      faq: "Frequently asked questions",
      related: "Related solutions",
      intro: "Who this is for",
    },
    contact: {
      title: "Contact",
      subtitle: "Request a demo or consultation—we reply personally.",
      consultation: "Send an email",
      rumenOnly: "For EUDR and Regulation 2025/40 — Rumen Lozanov",
      brochureLink: "View our interactive brochure",
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
  const clean = path.startsWith('/') ? path.slice(1) : path;
  if (!clean || clean === '/') return withBase(`${lang}/`);
  return withBase(`${lang}/${clean}`);
}
