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

  const quantityCount = cardElementBasket.querySelector('.quantity__count-number');

  const quantityPlus = cardElementBasket.querySelector('.quantity__count-plus');
  const quantityMinus = cardElementBasket.querySelector('.quantity__count-minus');

  // console.log(quantityCount.value);
  quantityPlus.addEventListener('click', () => {
    // let currentValue = Number.parseInt(quantityCount.value, 10);
    quantityCount.value++;
    // Увеличиваем количество товара в объекте корзины
    item.quantity += 1;
    const currentTotal = Number.parseInt(totalCount.textContent, 10);

    // Пересчитываем сумму только для измененного товара
    const itemTotal = item.price * item.quantity;
    console.log(itemTotal);

    // Обновляем сумму визуально
    const newTotal = currentTotal + item.price;
    totalCount.textContent = newTotal;
  });

  quantityMinus.addEventListener('click', () => {
    const currentValue = Number.parseInt(quantityCount.value, 10);

    if (currentValue < 1) {
      quantityMinus.disabled = true;
      const product = quantityMinus.closest('.product');
      product.classList.add('remove');
      setTimeout(() => {
        product.remove();

        // Удаляем товар из корзины
        const itemIndex = cartArray.findIndex((cartItem) => cartItem.id === item.id);
        if (itemIndex !== -1) {
          cartArray.splice(itemIndex, 1);
        }
        // Пересчитываем общую сумму корзины
        const totalPrice = calculateTotalPrice(cartArray);
        totalCount.textContent = totalPrice;
        cartCount.textContent--;
      }, 1000);
    } else {
      quantityCount.value--;

      // Уменьшаем количество товара в объекте корзины
      item.quantity -= 1;

      // Пересчитываем сумму только для измененного товара
      const itemTotal = item.price * item.quantity;

      // Обновляем сумму визуально
      const currentTotal = Number.parseInt(totalCount.textContent, 10);
      const newTotal = currentTotal - item.price;
      totalCount.textContent = newTotal;
    }
  });

  const cardRemove = cardElementBasket.querySelector('.card-remove');
  cardRemove.addEventListener('click', (evt) => {
    const inputValue = Number.parseInt(quantityCount.value, 10);

    evt.target.closest('.product').remove();

    let a = inputValue * item.price;
    let price = Number.parseInt(totalCount.textContent, 10);
    sum = price - a;
    totalCount.textContent = sum;
    console.log('Сумма товара при удалении:', sum);

    cartArray.forEach((el, i) => {
      if (el.id === item.id) {
        cartArray.splice(i, 1);
      }
    });

    cartCount.textContent--;
    item.quantity = 1;
  });

  cartArray.push(item);
  const totalPrice = calculateTotalPrice(cartArray, totalPrice);
  console.log('Переменная sum при добавлении', sum);
  totalCount.textContent = totalPrice;
  console.log('Тотал при добавлении карточки', totalPrice);

  return cardElementBasket;
}
