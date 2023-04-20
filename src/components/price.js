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

// export function updateTotalPrice(cartArray, totalCount) {
//   const totalPrice = cartArray.reduce((acc, item) => {
//     return acc + item.price * item.quantity;
//   }, 0);
//   totalCount.textContent = totalPrice;
//   // totalCount.textContent = isNaN(totalPrice) ? 0 : totalPrice;
// }

export function incrementNewTotalPrice(currentTotal, itemPrice) {
  const newTotal = currentTotal + itemPrice;
  return newTotal;
}

export function decrementTotalPrice(currentTotal, itemPrice) {
  return currentTotal - itemPrice;
}
