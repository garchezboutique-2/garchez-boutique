// Funciones para manejar medios en la aplicación
export const defaultImage: string = '/placeholder.svg'; // Imagen por defecto si no hay

export const getImageUrl = (image?: string): string => {
  return image || defaultImage;
};
