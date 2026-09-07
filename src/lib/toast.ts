import { atom } from 'nanostores';

// Almacenamiento para notificaciones (toasts)
export const toastStore = atom([]);

export const addToast = (message: string) => {
  toastStore.set([...toastStore.get(), { message, id: Date.now() }]);
};

export const removeToast = (id: number) => {
  toastStore.set(toastStore.get().filter(toast => toast.id !== id));
};
