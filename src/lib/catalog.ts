import { atom } from 'nanostores';

// Almacenamiento para el catálogo de productos
export const catalog = atom([]);

export const setCatalog = (products) => {
  catalog.set(products);
};
