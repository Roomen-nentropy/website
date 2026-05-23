import type { ConsultationContext, Lang } from './types';
import { solutionHeroImages } from './assets';

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
    intro: string;
    challenges: string[];
    helps: { title: string; desc: string }[];
    faq: { q: string; a: string }[];
    matrix?: string;
  };
  en: {
    title: string;
    short: string;
    hero: string;
    intro: string;
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
    heroImage: solutionHeroImages.eudr,
    related: ['ppwr', 'supply-chain', 'trade-warehousing'],
    bg: {
      title: 'EUDR',
      short: 'Надлежна проверка по Регламента за обезлесяването — от анкета до декларация за надлежна проверка (DDS).',
      hero: 'Организирайте EUDR съответствието — без планини от таблици и изгубени срокове.',
      intro:
        'Регламентът за обезлесяването изисква доказуема надлежна проверка за какао, кафе, палмово масло, соя, гума, дървесина и говеждо месо. Nentropy събира геолокация, анкети, оценки на риска и DDS номера в една работна среда — с пътища за търговец, вносител и производител.',
      challenges: [
        'Ръчно събиране на геолокация и документи от десетки доставчици в различни часови зони',
        'Липса на ясен преглед кой DDS номер към коя партида важи и кога изтича',
        'Различни задължения за търговци (запис на DDS), вносители и производители (пълна надлежна проверка)',
        'Екипите работят в отделни файлове — снабдяване, качество и правен не виждат една и съща картина',
      ],
      helps: [
        { title: 'Анкети към доставчици', desc: 'Шаблони за доставчици от ЕС и извън ЕС, въпроси за геолокация, качване на документи, експорт в PDF и JSON.' },
        { title: 'Оценки на риска', desc: 'Структуриран запис след анкета — с прикачени доказателства и ясен статус за одит.' },
        { title: 'Работа с DDS', desc: 'Създаване на DDS или записване на номер от доставчик — според дали сте търговец или оператор.' },
        { title: 'Продукти и партиди', desc: 'Каталог по HS кодове, статус на съответствие, предупреждения при изтичащи декларации.' },
        { title: 'Геолокация и площи', desc: 'Координати и полигони, свързани с доставчик и партида — не в отделна таблица.' },
        { title: 'Екип и роли', desc: 'Поканете колеги с права по модули — снабдяване, качество, правен отдел.' },
      ],
      faq: [
        { q: 'Гарантира ли Nentropy правно съответствие с EUDR?', a: 'Не. Платформата ви помага да организирате надлежната проверка и документацията. Окончателната отговорност остава при оператора.' },
        { q: 'Подходяща ли е за търговци?', a: 'Да — има опростен път за запис на DDS номера на доставчици и кратки анкети.' },
        { q: 'Какво е различното от модула за опаковки (2025/40)?', a: 'EUDR е за горски иск и DDS. Регламент 2025/40 е за етикети и опаковки — отделен модул, същият акаунт.' },
        { q: 'Колко дълго се пазят записите?', a: 'В продукта логиката е съобразена с ролята — например около 2 години за търговец и 5 за оператор.' },
      ],
      matrix: 'Търговец · Вносител · Производител · Оператор само в ЕС',
    },
    en: {
      title: 'EUDR',
      short: 'EU Deforestation Regulation due diligence—from survey to DDS.',
      hero: 'Organize EUDR due diligence—without mountains of spreadsheets.',
      intro:
        'The EU Deforestation Regulation requires due diligence for cocoa, coffee, palm, soy, rubber, wood, and cattle. Nentropy brings geolocation, surveys, risk assessments, and DDS numbers into one workspace.',
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
    heroImage: solutionHeroImages.ppwr,
    related: ['eudr', 'manufacturing', 'food-industry'],
    bg: {
      title: 'Регламент 2025/40 за опаковките',
      short: 'Опаковки, етикети, декларации за съответствие и проследимост по партиди.',
      hero: 'Етикетиране и проследимост по 2025/40 — отделно от EUDR, в същата платформа.',
      intro:
        'Регламент (ЕС) 2025/40 изисква ясна информация върху опаковките — материали, рециклируемост, понякога QR към данни за партидата. Nentropy свързва дизайн на етикет, партидно отпечатване и декларации за съответствие с вашите продукти и доставчици.',
      challenges: [
        'Всеки SKU и всяка партида изискват различни полета на етикета',
        'Трудно поддържате единна версия на шаблон след промяна в регулацията',
        'Доставчиците изпращат технически листове в имейли — не в структуриран вид',
        'Одитът иска доказателство какво е било на етикета в момента на пускане на пазара',
      ],
      helps: [
        { title: 'Дизайн на етикети', desc: 'Шаблони с материален състав, рециклируемост и задължителни полета по продукт.' },
        { title: 'Партидно етикетиране', desc: 'Генериране на PDF или PNG за конкретна партида и токен за проследимост.' },
        { title: 'Публична страница за проследимост', desc: 'QR код води към страница без вход — за потребител или одитор.' },
        { title: 'Декларации за съответствие', desc: 'Шаблони за самодекларация по 2025/40, свързани с продукт или собствена стока.' },
        { title: 'Блок в анкетите към доставчици', desc: 'Доставчикът качва техническа спецификация и документи за опаковката.' },
        { title: 'Връзка с каталога', desc: 'От продукти и собствено производство директно към етикетиране.' },
      ],
      faq: [
        { q: 'Заменя ли модулът за опаковки EUDR?', a: 'Не. Това са два отделни модула с един акаунт — EUDR е за горски риск, 2025/40 за опаковки и етикети.' },
        { q: 'Кой го ползва най-често?', a: 'Производители и дистрибутори, които пускат опаковани стоки на пазара в Европейския съюз.' },
        { q: 'Има ли помощ при дизайн на етикет?', a: 'Има подкрепа с изкуствен интелект за чернови, но окончателното съдържание и отговорност са ваши.' },
        { q: 'Как се свързва с EUDR?', a: 'Споделяте доставчици и документи — без да дублирате анкети за същия контрагент.' },
      ],
      matrix: 'Производител · Дистрибуция без преработка',
    },
    en: {
      title: 'Regulation 2025/40',
      short: 'Packaging, labels, and batch conformity declarations.',
      hero: 'Labelling and traceability under EU 2025/40—not EUDR, but in the same platform.',
      intro:
        'Regulation (EU) 2025/40 requires clear packaging information—materials, recyclability, and often batch-level QR transparency. Nentropy links label design, batch printing, and conformity declarations.',
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
    heroImage: solutionHeroImages['food-industry'],
    related: ['manufacturing', 'supply-chain', 'eudr'],
    bg: {
      title: 'Хранително-вкусова индустрия',
      short: 'Чеклисти по HACCP и PRP, собствено производство и проследимост на съставките.',
      hero: 'От входяща суровина до готова стока — съответствие на място и във веригата.',
      intro:
        'В хранително-вкусовата промишленост съответствието е едновременно на склада, в цеха и в регулаторните досиета. Nentropy свързва входящи партиди (вкл. EUDR), рецепти, производствени записи и етикети на готова продукция.',
      challenges: [
        'Чеклистите по HACCP и PRP живеят в хартия или отделни файлове',
        'Трудно проследявате коя входяща партида в кой изход е влязла',
        'EUDR съставките в рецептите изискват връзка към DDS и геолокация на доставчика',
        'Лабораторни резултати и производствени дневници не са на едно място при одит',
      ],
      helps: [
        { title: 'Модул „Производство“', desc: 'Заводи, машини, служители и пълна история на попълнени чеклисти.' },
        { title: 'Каталог PRP/HACCP', desc: 'Стартиране и архивиране на проверки с експорт в PDF.' },
        { title: 'Собствено производство и рецепти', desc: 'Рецепти, производствени партиди, връзка към доставени лотове.' },
        { title: 'Лабораторни файлове', desc: 'Прикачвания към производствени записи и партиди.' },
        { title: 'Чеклисти при прием', desc: 'Качество и транспорт при нова входяща партида.' },
        { title: 'Етикети на готова стока', desc: 'Връзка към модула за опаковки и етикетиране.' },
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
      intro:
        'Food compliance happens on the floor, in the warehouse, and in audit files. Nentropy links incoming lots (including EUDR), recipes, production records, and finished-goods labels.',
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
    heroImage: solutionHeroImages['supply-chain'],
    related: ['eudr', 'trade-warehousing', 'manufacturing'],
    bg: {
      title: 'Управление на веригите на доставки',
      short: 'Доставчици, анкети, партиди и досиета — единна картина за целия екип.',
      hero: 'От статус на доставчик до партида и документ — без да скачате между системи.',
      intro:
        'Веригата на доставки не е само карта на екрана — тя е живи данни от анкети, партиди, оценки на риска и файлове. Nentropy държи доставчиците и доказателствата на едно място, докато визуализацията на веригата се разширява.',
      challenges: [
        'Снабдяване, качество и правен отдел работят с различни таблици',
        'Не виждате кой доставчик не е отговорил и кой документ липсва',
        'Многостепенни вериги без обща снимка на риска',
        'При одит търсите файлове в пощата от преди месеци',
      ],
      helps: [
        { title: 'Регистър на доставчици', desc: 'Основни данни, ниво на риск, статус, импорт от CSV.' },
        { title: 'Наблюдение на анкети', desc: 'Процент завършеност, изтичащи срокове, ясен статус по контрагент.' },
        { title: 'Партиди и проследимост', desc: 'Статус на DDS, прием на партида, връзка към декларации.' },
        { title: 'Досиета', desc: 'Документи и история по доставчик, продукт или партида.' },
        { title: 'Експорт за одит', desc: 'PDF и JSON за анкети, оценки на риска и чеклисти.' },
        { title: 'Вериги на доставки', desc: 'Визуализацията е в разработка — основните данни вече са налични.' },
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
      intro:
        'Your chain is live data from surveys, batches, risk assessments, and files—not a static diagram. Nentropy keeps suppliers and evidence together.',
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
    heroImage: solutionHeroImages.manufacturing,
    related: ['food-industry', 'ppwr', 'supply-chain'],
    bg: {
      title: 'Производства и заводи',
      short: 'Заводи, машини, производствени партиди и собствено производство.',
      hero: 'Цифрово съответствие в цеха — от рецепта до етикет на изхода.',
      intro:
        'В завода съответствието е ежедневни чеклисти, машини, партиди и връзка към входящи суровини. Nentropy свързва рецептата, производствения запис и етикета без хартия между отделите.',
      challenges: [
        'Входящите лотове не се виждат ясно в изходящата производствена партида',
        'Чеклистите на линията са на хартия или в различни приложения',
        'Етикетирането на готова стока идва дни след производството',
        'При одит липсва една верига от суровина до готова стока',
      ],
      helps: [
        { title: 'Собствено производство', desc: 'Артикули, рецепти (BOM), производствени партиди, входящи лотове.' },
        { title: 'Заводи и машини', desc: 'Основни данни и история на проверки по актив.' },
        { title: 'Чеклисти на място', desc: 'PRP/HACCP записи, собствени въпроси, резултат PASS/FAIL.' },
        { title: 'Производствени поръчки', desc: 'API за поръчки — пълният интерфейс се разширява.' },
        { title: 'Връзка с етикетите', desc: 'От собствена стока към етикет и QR код.' },
        { title: 'Роли в екипа', desc: 'Един колега настройва, друг печата етикети — същите данни.' },
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
      intro:
        'Compliance on the shop floor means checklists, machines, batches, and links to incoming lots. Nentropy connects recipes, production records, and labels.',
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
    heroImage: solutionHeroImages['trade-warehousing'],
    related: ['eudr', 'supply-chain', 'ppwr'],
    bg: {
      title: 'Търговия и складова дейност',
      short: 'Запис на DDS, кратки анкети и проследимост при препродажба.',
      hero: 'По-лек път за търговци — фокус върху запис, анкети и партиди.',
      intro:
        'Търговците по EUDR често не създават собствена DDS, а записват номера на доставчика и следят партидите. Nentropy дава опростен интерфейс без производствени модули, които не ви трябват.',
      challenges: [
        'Трябва да записвате DDS номера, без да усложнявате процеса с излишни стъпки',
        'Стоките за препродажба без преработка изискват отделен етикетен поток',
        'Складът и снабдяването не споделят една таблица за статус',
        'При проверка липсва бърз отговор „кой доставчик какво е дал“',
      ],
      helps: [
        { title: 'Профил „Търговец“', desc: 'Опростен интерфейс — запис на DDS и кратки анкети към доставчици.' },
        { title: 'Продукти за препродажба', desc: 'Маркиране на стока без преработка и връзка към етикетиране.' },
        { title: 'Партиди', desc: 'DDS номер и срок на валидност на входящи лотове.' },
        { title: 'Доставчици', desc: 'Неограничен брой контрагенти в търговския план.' },
        { title: 'Съхранение на записи', desc: 'Логика за задържане около 2 години за търговска роля.' },
        { title: 'Интеграции', desc: 'API за синхронизация със склад или ERP.' },
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
      intro:
        'Traders often record supplier DDS numbers rather than creating their own. Nentropy offers a simplified workspace focused on surveys, batches, and resale.',
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
