import { cartArray, totalCount, cartCount } from '../utils/constants.js';
import { calculateTotalPrice, deleteCard } from './price.js';
let sum = 0;
export function cardToBasket(item) {
  const cardTemplateBasket = document.querySelector('.product-template').content;
  const cardElementBasket = cardTemplateBasket.querySelector('.product').cloneNode(true);

  cardElementBasket.querySelector('.card-product__heding').textContent = item.name;
  cardElementBasket.querySelector('.card-product__price').textContent = `$ ${item.price}.00`;

  const quantityCount = cardElementBasket.querySelector('.quantity__count-number');
  const quantityPlus = cardElementBasket.querySelector('.quantity__count-plus');
  const quantityMinus = cardElementBasket.querySelector('.quantity__count-minus');

  quantityCount.addEventListener('input', () => {
    const inputValue = quantityCount.value.trim();
    const currentValue = inputValue === '' ? 0 : Number.parseInt(inputValue, 10);
    //

    if (inputValue !== '' && currentValue !== 0) {
      const currentTotal = parseInt(totalCount.textContent, 10);
      const newTotal = currentTotal - item.price * item.quantity + item.price * currentValue;
      totalCount.textContent = newTotal;
      item.quantity = currentValue;
    } else {
      if (inputValue === '') {
        console.log('Input is empty');
        // Handle empty input case
      } else {
        console.log('delete this');
        // deleteCard(cartArray);
      }
    }

    console.log(currentValue);
  });

  quantityPlus.addEventListener('click', () => {
    quantityCount.value++;
    item.quantity += 1;
    const currentTotal = Number.parseInt(totalCount.textContent, 10);

    const newTotal = currentTotal + item.price;
    totalCount.textContent = newTotal;
  });

  quantityMinus.addEventListener('click', () => {
    const currentValue = Number.parseInt(quantityCount.value, 10);
    if (currentValue <= 1) {
      quantityCount.value--;
      quantityMinus.disabled = true;
      const product = quantityMinus.closest('.product');
      product.classList.add('remove');
      setTimeout(() => {
        product.remove();

        // Удаляем товар из корзины
        // deleteCard(cartArray);
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
      item.quantity -= 1;

      // Обновляем сумму визуально
      const currentTotal = Number.parseInt(totalCount.textContent, 10);
      // const newTotal = currentTotal - item.price;
      totalCount.textContent = currentTotal - item.price;
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

    cartArray.forEach((el, i) => {
      if (el.id === item.id) {
        cartArray.splice(i, 1);
      }
    });

    cartCount.textContent--;
    item.quantity = 1;
  });

  cartArray.push(item);
  totalCount.textContent = calculateTotalPrice(cartArray);

  return cardElementBasket;
}
