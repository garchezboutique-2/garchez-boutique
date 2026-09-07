export type Category = {
  slug: string;
  name: string;
  gender: 'dama' | 'caballero' | 'ambos';
  description: string;
};

export const categories: Category[] = [
  { slug: 'ropa-dama', name: 'Ropa de Dama', gender: 'dama', description: 'Vestidos, blusas, pantalones y más.' },
  { slug: 'ropa-caballero', name: 'Ropa de Caballero', gender: 'caballero', description: 'Camisas, pantalones y camisetas.' },
  { slug: 'calzado', name: 'Calzado', gender: 'ambos', description: 'Zapatos, tenis y sandalias.' },
  { slug: 'bolsos', name: 'Bolsos', gender: 'dama', description: 'Bolsos, carteras y mochilas.' },
  { slug: 'accesorios', name: 'Accesorios', gender: 'ambos', description: 'Gorras, cintos, lentes y relojes.' },
  { slug: 'joyeria', name: 'Joyería', gender: 'ambos', description: 'Cadenas, aretes, anillos y pulseras.' },
  { slug: 'ofertas', name: 'Ofertas', gender: 'ambos', description: 'Precios especiales por tiempo limitado.' }
];

export const categorySlugs: string[] = categories.map((c) => c.slug);

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function categoryName(slug: string): string {
  return getCategory(slug)?.name ?? slug;
}

export default categories;
