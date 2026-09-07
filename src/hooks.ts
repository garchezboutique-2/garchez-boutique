import type { APIContext } from 'astro';
import { toastStore } from './lib/toast';

export function onRequest({ request }: APIContext) {
  // Middleware para manejar las notificaciones de toast
  const url = new URL(request.url);
  if (url.pathname === '/api/toasts') {
    const message = url.searchParams.get('message');
    if (message) {
      toastStore.set([...toastStore.get(), { message, id: Date.now() }]);
    }
  }
}
