export function calculateTotalPrice(products) {
  const totalPrice = products.reduce((sum, product) => {
    return sum + product.price * product.quantity;
  }, 0);
  // console.log(totalPrice);
  return totalPrice;
}

export function deleteCard(cartArray) {
  const itemIndex = cartArray.findIndex((cartItem) => cartItem.id === cartArray.id);
  if (itemIndex !== -1) {
    cartArray.splice(itemIndex, 1);
  }
}
