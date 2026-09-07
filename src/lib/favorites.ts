import { persistentAtom } from '@nanostores/persistent';
import { atom } from 'nanostores';

// Almacenamiento persistente para productos favoritos
export const favorites = persistentAtom([]);

export const addToFavorites = (item: any) => {
  favorites.set([...favorites.get(), item]);
};

export const removeFromFavorites = (id: string) => {
  favorites.set(favorites.get().filter(item => item.id !== id));
};
