// Funciones de formato para mostrar precios y otros datos
export const formatPrice = (price) => {
  return new Intl.NumberFormat('es-NI', {
    style: 'currency',
    currency: 'NIO'
  }).format(price);
};
