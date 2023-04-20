import { cartArray, totalCount, cartCount } from '../utils/constants.js';
import {
  calculateTotalPrice,
  updateTotalPrice,
  incrementNewTotalPrice,
  decrementTotalPrice,
} from './price.js';
export function cardToBasket(item) {
  const cardTemplateBasket = document.querySelector('.product-template').content;
  const cardElementBasket = cardTemplateBasket.querySelector('.product').cloneNode(true);

  cardElementBasket.querySelector('.card-product__heding').textContent = item.name;
  cardElementBasket.querySelector('.card-product__price').textContent = `$ ${item.price}.00`;

  const quantityСount = cardElementBasket.querySelector('.quantity__count-number');

  const quantityPlus = cardElementBasket.querySelector('.quantity__count-plus');
  const quantityMinus = cardElementBasket.querySelector('.quantity__count-minus');
  quantityPlus.addEventListener('click', () => {
    let currentValue = parseInt(quantityСount.value, 10);
    currentValue += 1;
    quantityСount.value = currentValue;
    item.quantity++;
    // пересчитываем тотал и обновляем его значение
    const currentTotal = parseInt(totalCount.textContent, 10);
    const newTotal = incrementNewTotalPrice(currentTotal, item.price);
    totalCount.textContent = newTotal;
    cartArray.push(item);
    console.log(cartArray);
  });
  quantityMinus.addEventListener('click', () => {
    let currentValue = parseInt(quantityСount.value, 10);
    if (currentValue > 1) {
      currentValue -= 1;
      quantityСount.value = currentValue;
      // вычитаем цену товара из текущего тотала и обновляем его значение
      const totalPrice = decrementTotalPrice(parseInt(totalCount.textContent, 10), item.price);
      totalCount.textContent = totalPrice;
      cartArray.pop();
      console.log(cartArray);
    }
  });

  const cardRemove = cardElementBasket.querySelector('.card-remove');
  cardRemove.addEventListener('click', (evt) => {
    evt.target.closest('.product').remove();

    // ПРИ УДАЛЕНИИ НЕ ПРАВИЛЬНО ПЕРЕСЧИТЫВАЕТ КАУНТ, КОГДА ОДНОГО ТОВАРА НЕСКОЛЬКО ШТУК
    cartArray.forEach((el, i) => {
      if (el.id === item.id) {
        cartArray.splice(i, 1);
      }
    });
    cartCount.textContent--;
    updateTotalPrice(cartArray, totalCount);
  });

  cartArray.push(item);
  const totalPrice = calculateTotalPrice(cartArray);
  totalCount.textContent = totalPrice;

  return cardElementBasket;
}
