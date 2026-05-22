import type { ContactPerson, Lang } from './types';

export const contacts: Record<Lang, ContactPerson[]> = {
  bg: [
    {
      name: 'Rumen Lozanov',
      role: 'Съосновател · EUDR и Регламент 2025/40',
      email: 'rumen@joinnentropy.com',
      phone: '+359 88 000 0000',
      focus: 'rumen',
    },
    {
      name: 'Konstantin Markov',
      role: 'Съосновател · Продукт и партньорства',
      email: 'konstantin@joinnentropy.com',
      focus: 'general',
    },
    {
      name: 'Екип Nentropy',
      role: 'Общи запитвания',
      email: 'hello@joinnentropy.com',
      focus: 'general',
    },
  ],
  en: [
    {
      name: 'Rumen Lozanov',
      role: 'Co-founder · EUDR & Regulation 2025/40',
      email: 'rumen@joinnentropy.com',
      phone: '+359 88 000 0000',
      focus: 'rumen',
    },
    {
      name: 'Konstantin Markov',
      role: 'Co-founder · Product & partnerships',
      email: 'konstantin@joinnentropy.com',
      focus: 'general',
    },
    {
      name: 'Nentropy Team',
      role: 'General inquiries',
      email: 'hello@joinnentropy.com',
      focus: 'general',
    },
  ],
};
