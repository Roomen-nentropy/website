import type { ConsultationContext, Lang } from './types';

export type SolutionSlug =
  | 'eudr'
  | 'ppwr'
  | 'food-industry'
  | 'supply-chain'
  | 'manufacturing'
  | 'trade-warehousing';

export interface SolutionContent {
  slug: SolutionSlug;
  consultationContext: ConsultationContext;
  icon: string;
  heroImage?: string;
  related: SolutionSlug[];
  bg: {
    title: string;
    short: string;
    hero: string;
    challenges: string[];
    helps: { title: string; desc: string }[];
    faq: { q: string; a: string }[];
    matrix?: string;
  };
  en: {
    title: string;
    short: string;
    hero: string;
    challenges: string[];
    helps: { title: string; desc: string }[];
    faq: { q: string; a: string }[];
    matrix?: string;
  };
}

export const solutions: SolutionContent[] = [
  {
    slug: 'eudr',
    consultationContext: 'eudr',
    icon: '🌲',
    heroImage: 'assets/hero-eudr.svg',
    related: ['ppwr', 'supply-chain', 'trade-warehousing'],
    bg: {
      title: 'EUDR',
      short: 'Надлежна проверка по Регламента за обезлесяването — от анкета до DDS.',
      hero: 'Организирайте надлежната проверка по EUDR — без планини от електронни таблици.',
      challenges: [
        'Събиране на геолокация и документи от десетки доставчици на ръка',
        'Проследяване на DDS номера и валидност по партиди',
        'Различни изисквания за търговци, вносители и производители',
      ],
      helps: [
        { title: 'Анкети към доставчици', desc: 'EU и non-EU шаблони, геолокация, качване на документи, PDF/JSON експорт.' },
        { title: 'Оценки на риска', desc: 'Структурирани записи след анкета с прикачени доказателства.' },
        { title: 'DDS работни потоци', desc: 'Създаване или записване на DDS според типа оператор.' },
        { title: 'Продукти и партиди', desc: 'HS кодове, статус на съответствие, предупреждения за изтичане.' },
        { title: 'Геолокация', desc: 'Плотове и координати вързани към доставчици и партиди.' },
        { title: 'Екип и роли', desc: 'Поканете колеги с достъп по табове — снабдяване, QA, правен.' },
      ],
      faq: [
        { q: 'Гарантира ли платформата съответствие с EUDR?', a: 'Nentropy ви помага да организирате надлежната проверка и документацията. Окончателната правна отговорност остава при оператора.' },
        { q: 'Подходяща ли е за търговци?', a: 'Да — опростен път за записване на DDS номера на доставчици и micro анкети.' },
        { q: 'Какво е различно от PPWR модула?', a: 'EUDR е за горски риск и DDS. Етикетирането по 2025/40 е отделен модул в същия акаунт.' },
      ],
      matrix: 'Търговец · Вносител · Производител · Вътрешен EU оператор',
    },
    en: {
      title: 'EUDR',
      short: 'EU Deforestation Regulation due diligence—from survey to DDS.',
      hero: 'Organize EUDR due diligence—without mountains of spreadsheets.',
      challenges: [
        'Collecting geolocation and documents from dozens of suppliers manually',
        'Tracking DDS numbers and validity per batch',
        'Different requirements for traders, importers, and manufacturers',
      ],
      helps: [
        { title: 'Supplier surveys', desc: 'EU and non-EU templates, geolocation, document upload, PDF/JSON export.' },
        { title: 'Risk assessments', desc: 'Structured records after surveys with attached evidence.' },
        { title: 'DDS workflows', desc: 'Create or record DDS depending on operator type.' },
        { title: 'Products & batches', desc: 'HS codes, compliance status, expiry warnings.' },
        { title: 'Geolocation', desc: 'Plots and coordinates linked to suppliers and batches.' },
        { title: 'Team & roles', desc: 'Invite colleagues with tab-level access—procurement, QA, legal.' },
      ],
      faq: [
        { q: 'Does the platform guarantee EUDR compliance?', a: 'Nentropy helps you organize due diligence and documentation. Legal responsibility remains with the operator.' },
        { q: 'Is it suitable for traders?', a: 'Yes—a simplified path to record supplier DDS numbers and micro surveys.' },
        { q: 'How is it different from the PPWR module?', a: 'EUDR covers forest-risk and DDS. 2025/40 labelling is a separate module in the same account.' },
      ],
      matrix: 'Trader · Importer · Manufacturer · Domestic EU operator',
    },
  },
  {
    slug: 'ppwr',
    consultationContext: 'ppwr',
    icon: '📦',
    heroImage: 'assets/hero-ppwr.svg',
    related: ['eudr', 'manufacturing', 'food-industry'],
    bg: {
      title: 'Регламент 2025/40',
      short: 'Опаковки, етикети и декларации за съответствие по партиди.',
      hero: 'Етикетиране и проследимост по Регламент 2025/40 — не е EUDR, но е в същата платформа.',
      challenges: [
        'Материален състав и рециклируемост на етикетите',
        'Партидни QR страници за потребители и одити',
        'Декларации за съответствие и документи от доставчици',
      ],
      helps: [
        { title: 'Дизайн на етикети', desc: 'Шаблони с материали, рециклируемост и задължителни полета.' },
        { title: 'Партидно етикетиране', desc: 'Генериране на PDF/PNG етикети и trace токени.' },
        { title: 'Публична trace страница', desc: 'QR към /trace/:token без вход за потребителя.' },
        { title: 'Самодекларации 2025/40', desc: 'Шаблонни документи за съответствие на опаковките.' },
        { title: 'Блок в анкетите', desc: 'Доставчикът качва техническа спецификация и документи.' },
        { title: 'Връзка с продукти', desc: 'От мрежа продукти и own goods към етикетиране.' },
      ],
      faq: [
        { q: 'Заменя ли PPWR модула EUDR?', a: 'Не — това са два модула с един вход. EUDR е за горски риск; 2025/40 е за опаковки и етикети.' },
        { q: 'Кой тип оператор го ползва?', a: 'Производители и дистрибутори, които пускат опаковани стоки на пазара в ЕС.' },
        { q: 'Има ли AI за етикети?', a: 'Платформата поддържа AI помощ при дизайн, но окончателното съдържание е ваша отговорност.' },
      ],
      matrix: 'Производител · Дистрибуция без преработка',
    },
    en: {
      title: 'Regulation 2025/40',
      short: 'Packaging, labels, and batch conformity declarations.',
      hero: 'Labelling and traceability under EU 2025/40—not EUDR, but in the same platform.',
      challenges: [
        'Material composition and recyclability on labels',
        'Batch QR pages for consumers and audits',
        'Conformity declarations and supplier documents',
      ],
      helps: [
        { title: 'Label designer', desc: 'Templates with materials, recyclability, and required fields.' },
        { title: 'Batch labelling', desc: 'Generate PDF/PNG labels and trace tokens.' },
        { title: 'Public trace page', desc: 'QR to /trace/:token with no consumer login.' },
        { title: '2025/40 self-declarations', desc: 'Template-driven packaging conformity documents.' },
        { title: 'Survey block', desc: 'Suppliers upload technical specs and conformity files.' },
        { title: 'Product linkage', desc: 'From product grids and own goods to labelling.' },
      ],
      faq: [
        { q: 'Does the PPWR module replace EUDR?', a: 'No—two modules, one login. EUDR is forest-risk; 2025/40 is packaging and labels.' },
        { q: 'Who uses it?', a: 'Manufacturers and distributors placing packaged goods on the EU market.' },
        { q: 'Is there AI for labels?', a: 'The platform supports AI-assisted design; final content remains your responsibility.' },
      ],
      matrix: 'Manufacturer · Distribution without processing',
    },
  },
  {
    slug: 'food-industry',
    consultationContext: 'default',
    icon: '🍽️',
    related: ['manufacturing', 'supply-chain', 'eudr'],
    bg: {
      title: 'Хранително-вкусова индустрия',
      short: 'HACCP/PRP чеклисти, собствено производство и проследимост на съставките.',
      hero: 'От съставки до готова стока — съответствие на място и в веригата.',
      challenges: [
        'PRP/HACCP документация разпръсната в хартия и Excel',
        'Връзка между входящи партиди и производствени изходи',
        'EUDR съставки в рецепти и finished goods',
      ],
      helps: [
        { title: 'Production модул', desc: 'Заводи, машини, служители, история на чеклисти.' },
        { title: 'PRP/HACCP каталог', desc: 'Пускане и архивиране на runs с PDF експорт.' },
        { title: 'Own goods & BOM', desc: 'Рецепти, производствени партиди, връзка към доставени лотове.' },
        { title: 'Лабораторни прикачвания', desc: 'Файлове към production записи.' },
        { title: 'Intake чеклисти', desc: 'Качество и транспорт при нова партида.' },
        { title: 'Етикети за готова стока', desc: 'Връзка към packaging модул за finished goods.' },
      ],
      faq: [
        { q: 'Заменя ли система HACCP?', a: 'Поддържа PRP/HACCP чеклисти и одитна история; интегрира се с вашите процеси, не замества експертна оценка.' },
        { q: 'Работи ли с EUDR съставки?', a: 'Да — BOM свързва EUDR партиди към производствен изход.' },
        { q: 'Подходящо ли за малък производител?', a: 'Да — роли и табове се конфигурират по екип.' },
      ],
    },
    en: {
      title: 'Food industry',
      short: 'HACCP/PRP checklists, own production, and ingredient traceability.',
      hero: 'From ingredients to finished goods—on-site and supply chain compliance.',
      challenges: [
        'PRP/HACCP documentation scattered across paper and Excel',
        'Linking incoming lots to production outputs',
        'EUDR ingredients in recipes and finished goods',
      ],
      helps: [
        { title: 'Production module', desc: 'Plants, machines, employees, checklist history.' },
        { title: 'PRP/HACCP catalog', desc: 'Run and archive checklists with PDF export.' },
        { title: 'Own goods & BOM', desc: 'Recipes, production batches, links to supplied lots.' },
        { title: 'Lab attachments', desc: 'Files linked to production records.' },
        { title: 'Intake checklists', desc: 'Quality and transport on new batch arrival.' },
        { title: 'Finished goods labels', desc: 'Link to packaging module for output products.' },
      ],
      faq: [
        { q: 'Does it replace a HACCP system?', a: 'It supports PRP/HACCP checklists and audit history; it integrates with your processes, not expert sign-off.' },
        { q: 'Does it work with EUDR ingredients?', a: 'Yes—BOM links EUDR batches to production output.' },
        { q: 'Suitable for small producers?', a: 'Yes—roles and tabs configure per team.' },
      ],
    },
  },
  {
    slug: 'supply-chain',
    consultationContext: 'default',
    icon: '🔗',
    related: ['eudr', 'trade-warehousing', 'manufacturing'],
    bg: {
      title: 'Управление на веригите на доставки',
      short: 'Доставчици, анкети, партиди и досиета — един източник на истина.',
      hero: 'Вижте цялата верига — от статус на доставчик до партида и документ.',
      challenges: [
        'Фрагментирани данни между снабдяване, QA и правен отдел',
        'Трудно проследяване на анкети и липсващи документи',
        'Многостепенни вериги без единна картина',
      ],
      helps: [
        { title: 'Управление на доставчици', desc: 'Master data, риск, статус, CSV импорт.' },
        { title: 'Мониторинг на анкети', desc: 'Процент завършеност, изтичане, напомняния.' },
        { title: 'Партиди и проследимост', desc: 'DDS статус, intake, връзки към декларации.' },
        { title: 'Досиета', desc: 'Документи и история по доставчик, продукт, партида.' },
        { title: 'Експорт за одит', desc: 'PDF/JSON за анкети, оценки, чеклисти.' },
        { title: 'Вериги (скоро)', desc: 'Визуализация на веригата — в разработка, посочваме честно.' },
      ],
      faq: [
        { q: 'Има ли вече визуализация на веригата?', a: 'Модулът Chain of custody е маркиран „очаквайте скоро“ — основните данни вече са в доставчици и партиди.' },
        { q: 'Мога ли да импортирам хиляди доставчици?', a: 'Да — CSV импорт с поддръжка на големи файлове на сървъра.' },
        { q: 'Интеграция с ERP?', a: 'API и webhooks за синхронизация — дълбочината зависи от вашата интеграция.' },
      ],
    },
    en: {
      title: 'Supply chain management',
      short: 'Suppliers, surveys, batches, and dossiers—one source of truth.',
      hero: 'See the full chain—from supplier status to batch and documents.',
      challenges: [
        'Fragmented data between procurement, QA, and legal',
        'Hard to track surveys and missing documents',
        'Multi-tier chains without a unified view',
      ],
      helps: [
        { title: 'Supplier management', desc: 'Master data, risk, status, CSV import.' },
        { title: 'Survey monitoring', desc: 'Completion %, expiry, reminders.' },
        { title: 'Batches & traceability', desc: 'DDS status, intake, links to declarations.' },
        { title: 'Dossiers', desc: 'Documents and history per supplier, product, batch.' },
        { title: 'Audit export', desc: 'PDF/JSON for surveys, assessments, checklists.' },
        { title: 'Chains (soon)', desc: 'Chain visualization—in development; we state this honestly.' },
      ],
      faq: [
        { q: 'Is chain visualization available?', a: 'Chain of custody is marked coming soon—core data already lives in suppliers and batches.' },
        { q: 'Can I import thousands of suppliers?', a: 'Yes—CSV import with large-file server support.' },
        { q: 'ERP integration?', a: 'API and webhooks for sync—depth depends on your integration.' },
      ],
    },
  },
  {
    slug: 'manufacturing',
    consultationContext: 'default',
    icon: '🏭',
    related: ['food-industry', 'ppwr', 'supply-chain'],
    bg: {
      title: 'Производства и заводи',
      short: 'Заводи, машини, производствени партиди и own goods.',
      hero: 'Цифрова фабрика за съответствие — от рецепта до етикет на изхода.',
      challenges: [
        'Свързване на входящи лотове с изходящи производствени партиди',
        'Чеклисти на място без хартиени дневници',
        'Етикетиране на готова стока след производство',
      ],
      helps: [
        { title: 'Own goods', desc: 'SKU, BOM, production batches, ingredient lots.' },
        { title: 'Заводи и машини', desc: 'Master data и история по актив.' },
        { title: 'Чеклисти', desc: 'PRP/HACCP runs, custom questions, PASS/FAIL.' },
        { title: 'Production orders', desc: 'API за поръчки — UI в разширение.' },
        { title: 'Packaging връзка', desc: 'От own good към етикет и QR.' },
        { title: 'Екипни роли', desc: 'Разделение: настройка vs етикетиране.' },
      ],
      faq: [
        { q: 'Покрива ли производствени поръчки?', a: 'Backend поддържа orders; пълният UI за поръчки се разширява.' },
        { q: 'Мога ли да добавя собствени въпроси?', a: 'Да — question builder в Production модула.' },
        { q: 'Само за храни?', a: 'Фокусът е върху хранително-вкусови процеси и PRP наследство, но BOM и чеклисти са гъвкави.' },
      ],
    },
    en: {
      title: 'Manufacturing & plants',
      short: 'Plants, machines, production batches, and own goods.',
      hero: 'Digital factory compliance—from recipe to output label.',
      challenges: [
        'Linking incoming lots to outgoing production batches',
        'On-site checklists without paper logbooks',
        'Labelling finished goods after production',
      ],
      helps: [
        { title: 'Own goods', desc: 'SKU, BOM, production batches, ingredient lots.' },
        { title: 'Plants & machines', desc: 'Master data and history per asset.' },
        { title: 'Checklists', desc: 'PRP/HACCP runs, custom questions, PASS/FAIL.' },
        { title: 'Production orders', desc: 'API for orders—UI expanding.' },
        { title: 'Packaging link', desc: 'From own good to label and QR.' },
        { title: 'Team roles', desc: 'Split setup vs labelling responsibilities.' },
      ],
      faq: [
        { q: 'Does it cover production orders?', a: 'Backend supports orders; full orders UI is expanding.' },
        { q: 'Can I add custom questions?', a: 'Yes—question builder in the Production module.' },
        { q: 'Food only?', a: 'Focus is food-sector PRP heritage; BOM and checklists are flexible.' },
      ],
    },
  },
  {
    slug: 'trade-warehousing',
    consultationContext: 'default',
    icon: '📊',
    related: ['eudr', 'supply-chain', 'ppwr'],
    bg: {
      title: 'Търговия и складова дейност',
      short: 'Запис на DDS, micro анкети и продукти за препродажба.',
      hero: 'Лек път за търговци — без излишни модули, с пълна проследимост.',
      challenges: [
        'Записване на DDS номера на доставчици без да създавате DDS',
        'Проследяване на стоки за препродажба и етикети',
        'Нужда от бърз onboarding и ясна цена',
      ],
      helps: [
        { title: 'Trader persona', desc: 'Опростен интерфейс — record DDS, micro surveys.' },
        { title: 'Продукти за дистрибуция', desc: 'Флаг за препродажба без преработка + packaging.' },
        { title: 'Партиди', desc: 'DDS номер и валидност на входящи лотове.' },
        { title: 'Доставчици', desc: 'Неограничени доставчици в trader план (~€35/мес.).' },
        { title: 'Запазване 2 години', desc: 'Контекст на задържане според trader роля.' },
        { title: 'Интеграции', desc: 'API за склад и ERP master data.' },
      ],
      faq: [
        { q: 'Трябва ли да създавам DDS като търговец?', a: 'Обикновено записвате DDS номера на доставчици; създаване на DDS не е в trader пътя.' },
        { q: 'Има ли production модул?', a: 'Не за trader — фокус върху запис, анкети и партиди.' },
        { q: 'Мога ли да добавя етикети?', a: 'Да, за продукти за препродажба е наличен packaging workflow.' },
      ],
      matrix: 'Търговец (Trader)',
    },
    en: {
      title: 'Trade & warehousing',
      short: 'Record DDS, micro surveys, and resale products.',
      hero: 'A lighter path for traders—no extra modules, full traceability.',
      challenges: [
        'Recording supplier DDS numbers without creating DDS',
        'Tracking resale goods and labels',
        'Need for fast onboarding and clear pricing',
      ],
      helps: [
        { title: 'Trader persona', desc: 'Simplified UI—record DDS, micro surveys.' },
        { title: 'Distribution products', desc: 'Resale-without-processing flag + packaging.' },
        { title: 'Batches', desc: 'DDS number and validity on incoming lots.' },
        { title: 'Suppliers', desc: 'Unlimited suppliers on trader plan (~€35/mo).' },
        { title: '2-year retention', desc: 'Retention context aligned to trader role.' },
        { title: 'Integrations', desc: 'API for warehouse and ERP master data.' },
      ],
      faq: [
        { q: 'Must traders create DDS?', a: 'Typically you record supplier DDS numbers; creating DDS is not in the trader path.' },
        { q: 'Is there a production module?', a: 'Not for traders—focus on recording, surveys, and batches.' },
        { q: 'Can I add labels?', a: 'Yes—packaging workflow is available for resale products.' },
      ],
      matrix: 'Trader',
    },
  },
];

export function getSolution(slug: SolutionSlug) {
  return solutions.find((s) => s.slug === slug)!;
}

export function getSolutionCopy(slug: SolutionSlug, lang: Lang) {
  const s = getSolution(slug);
  return lang === 'bg' ? { ...s, copy: s.bg } : { ...s, copy: s.en };
}

export const solutionGateway = solutions.map((s) => ({
  slug: s.slug,
  icon: s.icon,
  bg: { title: s.bg.title, short: s.bg.short },
  en: { title: s.en.title, short: s.en.short },
}));
