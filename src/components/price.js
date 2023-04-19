export function calculateTotalPrice(products) {
  return products.map((product) => product.price).reduce((sum, price) => sum + price, 0);
}

export function updateTotalPrice(items, totalCount) {
  let arrPrice = items
    .map((i) => i.price)
    .reduce((a, b) => {
      return a + b;
    }, 0);
  totalCount.textContent = arrPrice;
}
