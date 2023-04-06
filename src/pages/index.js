import '../styles/index.scss';
import { cardData, cards } from '../utils/constants.js';

const cartInfo = document.querySelector('.cart-info');
const content = document.querySelector('.content');
const close = document.querySelector('.cart-info__close');

cartInfo.addEventListener('click', () => {
  content.classList.add('content__opened');
  content.classList.remove('content__close');
});

close.addEventListener('click', () => {
  content.classList.remove('content__opened');
  content.classList.add('content__close');
});

function getCard(item) {
  const cardTemplate = document.querySelector('.card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  cardElement.querySelector('.card__heding').textContent = item.name;

  const cardPhoto = cardElement.querySelector('.card__img');
  cardPhoto.src = item.link;
  cardPhoto.alt = item.name;
  return cardElement;
}

// функция добавления карточку на страницу
function addCard(item, container) {
  const newCard = getCard(item);
  container.append(newCard);
}

// Карточки из коробки
cardData.forEach(function (item) {
  addCard(item, cards);
});
