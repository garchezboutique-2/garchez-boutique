// Funciones para manejar medios en la aplicación
export const defaultImage = '/placeholder.svg'; // Imagen por defecto si no hay

export const getImageUrl = (image) => {
  return image || defaultImage;
};
