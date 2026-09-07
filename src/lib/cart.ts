import { persistentAtom } from '@nanostores/persistent';

export type CartItem = {
  id: string;
  title: string;
  price: number;
  image?: string;
  quantity?: number;
};

export const cart = persistentAtom<CartItem[]>(
  'garchez-cart',
  []
);

export const addToCart = (item: CartItem): void => {
  const items = cart.get();
  const existing = items.find((product) => product.id === item.id);

  if (existing) {
    cart.set(
      items.map((product) =>
        product.id === item.id
          ? { ...product, quantity: (product.quantity ?? 1) + 1 }
          : product
      )
    );
    return;
  }

  cart.set([...items, { ...item, quantity: 1 }]);
};

export const removeFromCart = (id: string): void => {
  cart.set(cart.get().filter((item) => item.id !== id));
};

export const clearCart = (): void => {
  cart.set([]);
};
