import { persistentAtom } from '@nanostores/persistent';
import { atom } from 'nanostores';

// Almacenamiento persistente para el carrito de compras
export const cart = persistentAtom([]); 

export const addToCart = (item: any) => {
  cart.set([...cart.get(), item]);
};

export const removeFromCart = (id: string) => {
  cart.set(cart.get().filter(item => item.id !== id));
};

export const clearCart = () => {
  cart.set([]);
};
