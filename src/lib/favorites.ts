import { persistentAtom } from '@nanostores/persistent';

export type FavoriteItem = {
  id: string;
  title: string;
  price: number;
  image?: string;
};

export const favorites = persistentAtom<FavoriteItem[]>(
  'garchez-favorites',
  []
);

export const addToFavorites = (item: FavoriteItem): void => {
  if (!favorites.get().some((product) => product.id === item.id)) {
    favorites.set([...favorites.get(), item]);
  }
};

export const removeFromFavorites = (id: string): void => {
  favorites.set(
    favorites.get().filter((item) => item.id !== id)
  );
};

export const isFavorite = (id: string): boolean => {
  return favorites.get().some((item) => item.id === id);
};
