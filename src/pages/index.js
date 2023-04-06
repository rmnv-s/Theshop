import '../styles/index.scss';
import { cardData } from '../utils/constants.js';

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

console.log(cardData[0].img);
