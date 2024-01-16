import { z, defineCollection } from 'astro:content';

const bicyclesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    price: z.number(),
  })
});

export const collections = {
  'bicycles': bicyclesCollection,
};