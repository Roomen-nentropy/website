import type { Lang } from './types';
import { langPath } from './ui';

export function getSolutionNav(lang: Lang) {
  const labels = lang === 'bg'
    ? {
        eudr: 'EUDR',
        ppwr: 'Регламент 2025/40',
        food: 'Хранително-вкусова индустрия',
        supply: 'Вериги на доставки',
        manufacturing: 'Производства и заводи',
        trade: 'Търговия и складова дейност',
      }
    : {
        eudr: 'EUDR',
        ppwr: 'Regulation 2025/40',
        food: 'Food industry',
        supply: 'Supply chain management',
        manufacturing: 'Manufacturing & plants',
        trade: 'Trade & warehousing',
      };

  return [
    { label: labels.eudr, href: langPath(lang, '/solutions/eudr') },
    { label: labels.ppwr, href: langPath(lang, '/solutions/ppwr') },
    { label: labels.food, href: langPath(lang, '/solutions/food-industry') },
    { label: labels.supply, href: langPath(lang, '/solutions/supply-chain') },
    { label: labels.manufacturing, href: langPath(lang, '/solutions/manufacturing') },
    { label: labels.trade, href: langPath(lang, '/solutions/trade-warehousing') },
  ];
}
