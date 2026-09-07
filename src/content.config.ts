import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
  loader: glob({
    pattern: '**/*.json',
    base: './src/content/products',
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.number().nonnegative(),
    category: z.string(),
    image: z.string().optional(),
    stock: z.number().nonnegative().default(0),
  }),
});

export const collections = {
  products,
};
