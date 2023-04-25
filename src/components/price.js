export function calculateTotalPrice(products) {
  const totalPrice = products.reduce((sum, product) => {
    return sum + product.price * product.quantity;
  }, 0);
  return totalPrice;
}

export function updateTotalPrice(items) {
  items
    .map((i) => i.price)
    .reduce((a, b) => {
      return a + b;
    }, 0);
}

export function incrementNewTotalPrice(currentTotal, itemPrice) {
  const newTotal = currentTotal + itemPrice;
  return newTotal;
}

export function decrementTotalPrice(currentTotal, itemPrice) {
  return currentTotal - itemPrice;
}
