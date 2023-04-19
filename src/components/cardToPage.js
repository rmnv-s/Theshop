import { cartArray, cartCount, cardProduct, popup } from '../utils/constants.js';
import { cardToBasket } from './cardToBasket.js';
import { openPopup } from './popup.js';
export function getCardsToPage(item) {
  const cardTemplate = document.querySelector('.card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  cardElement.querySelector('.card__heding').textContent = item.name;
  cardElement.querySelector('.card__price').textContent = `$ ${item.price}.00`;

  const cardPhoto = cardElement.querySelector('.card__img');
  cardPhoto.src = item.link;
  cardPhoto.alt = item.name;

  const cardBtn = cardElement.querySelector('.card__btn');
  cardBtn.addEventListener('click', () => {
    if (cartArray.some((i) => i.id === item.id)) {
      openPopup(popup, item.name);
    } else {
      cartCount.textContent++;
      cardProduct.append(cardToBasket(item));
    }
  });
  return cardElement;
}
