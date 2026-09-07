// Esquema de contenido estricto para productos
const productSchema = {
  title: "string",
  description: "string",
  price: "number",
  category: "string", // Debe coincidir con las categorías definidas
  image: "string", // URL de la imagen del producto
  stock: "number" // Cantidad en inventario
};

export default productSchema;
