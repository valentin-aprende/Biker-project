export function isValidProduct(product) {
  return (
    product.nombre &&
    product.descripcion &&
    product.imagen
  );
}