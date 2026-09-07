import { persist } from '@nanostores/persistent';
import { atom } from 'nanostores';

// Almacenamiento persistente para el carrito de compras
export const cart = persist(atom([]), { key: 'cart' });

export const addToCart = (item) => {
  cart.set([...cart.get(), item]);
};

export const removeFromCart = (id) => {
  cart.set(cart.get().filter(item => item.id !== id));
};

export const clearCart = () => {
  cart.set([]);
};
