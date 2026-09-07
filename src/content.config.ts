import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.number().positive(),
    category: z.string(),
    image: z.string().url().optional(),
    stock: z.number().nonnegative(),
  }),
});

export const collections = {
  products,
};
