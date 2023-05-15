export function calculateTotalPrice(products) {
  const totalPrice = products.reduce((sum, product) => {
    return sum + product.price * product.quantity;
  }, 0);
  // console.log(totalPrice);
  return totalPrice;
}

export function deleteCard(cartArray, prod, item, totalCount, cartCount) {
  const product = prod.closest('.product');
  product.classList.add('remove');
  setTimeout(() => {
    product.remove();
    // Удаляем товар из корзины
    const itemIndex = cartArray.findIndex((cartItem) => cartItem.id === item.id);
    if (itemIndex !== -1) {
      cartArray.splice(itemIndex, 1);
    }
    // console.log(itemIndex);
    // Пересчитываем общую сумму корзины
    const totalPrice = calculateTotalPrice(cartArray);
    totalCount.textContent = totalPrice;
    cartCount.textContent--;
  }, 1000);
}
