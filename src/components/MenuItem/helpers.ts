export function formatPriceInReais(price: number) {
  return `R$ ${price.toFixed(2).replace(".", ",")}`;
}
