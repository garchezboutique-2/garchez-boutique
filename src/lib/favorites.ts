import { persist } from '@nanostores/persistent';
import { atom } from 'nanostores';

// Almacenamiento persistente para productos favoritos
export const favorites = persist(atom([]), { key: 'favorites' });

export const addToFavorites = (item) => {
  favorites.set([...favorites.get(), item]);
};

export const removeFromFavorites = (id) => {
  favorites.set(favorites.get().filter(item => item.id !== id));
};
