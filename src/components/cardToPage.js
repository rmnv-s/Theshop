import {
  cartArray,
  cartCount,
  cardProduct,
  popup,
} from '../utils/constants.js';
import { cardToBasket } from './cardToBasket.js';
import { openPopup } from './popup.js';

export async function getCardsToPage(item) {
  const cardTemplate = document.querySelector('.card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  cardElement.querySelector('.card__heding').textContent = item.name;
  cardElement.querySelector('.card__price').textContent = `$ ${item.price}.00`;

  const cardPhoto = cardElement.querySelector('.card__img');

  // Создаем объект Image для предварительной загрузки изображения
  const imgPreloader = new Image();

  // Оборачиваем загрузку изображения в Promise, чтобы использовать await
  await new Promise((resolve, reject) => {
    // Устанавливаем обработчик события onload для изображения
    imgPreloader.onload = () => {
      // Когда изображение полностью загрузилось, устанавливаем его как src для элемента на карточке
      cardPhoto.src = item.link;
      cardPhoto.alt = item.name;
      // Разрешаем промис после загрузки изображения
      resolve();
    };

    // Обработка ошибок, если изображение не загрузится
    imgPreloader.onerror = () => {
      reject(new Error('Ошибка загрузки изображения'));
    };

    // Устанавливаем src для объекта Image, чтобы начать загрузку изображения
    imgPreloader.src = item.link;
  });

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
