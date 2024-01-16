import { z, defineCollection } from 'astro:content';

const bicikliCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  })
});

export const collections = {
  'bicikli': bicikliCollection,
};