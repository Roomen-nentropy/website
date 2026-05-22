import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().optional(),
    tags: z.array(z.string()).default([]),
    locale: z.enum(['bg', 'en']),
    pdf: z.string().optional(),
    coverImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    location: z.string().optional(),
    status: z.enum(['upcoming', 'past']),
    locale: z.enum(['bg', 'en']),
    registrationUrl: z.string().url().optional(),
    heroImage: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    videos: z
      .array(
        z.object({
          url: z.string().url(),
          title: z.string(),
        })
      )
      .default([]),
    downloads: z
      .array(
        z.object({
          label: z.string(),
          file: z.string(),
        })
      )
      .default([]),
    draft: z.boolean().default(false),
  }),
});

const docs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    order: z.number().default(0),
    section: z.string().default('integrations'),
  }),
});

export const collections = { blog, events, docs };
