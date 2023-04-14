import '../styles/index.scss';
import {
  cardData,
  cards,
  cartCount,
  cardProduct,
  totalCount,
  quantityСount,
} from '../utils/constants.js';
const popup = document.querySelector('.popup');
const closePopupBtn = document.querySelector('.button__close-popup');
const popupText = document.querySelector('.popup__text');
const cart = document.querySelector('.cart');
const cartInner = document.querySelector('.cart-inner');
const close = document.querySelector('.cart-info__close');
// const clossedBasket = document.querySelector('.clossed')

cart.addEventListener('click', () => {
  cartInner.classList.add('cart-inner__opened');
  cartInner.classList.remove('cart-inner__close');
  close.classList.add('clossed');
});

close.addEventListener('click', () => {
  cartInner.classList.remove('cart-inner__opened');
  cartInner.classList.add('cart-inner__close');
  close.classList.remove('clossed');
});

function openPopup(item, name) {
  item.classList.add('popup__opened');
  popupText.textContent = `Товар ${name} уже в корзине!`;
}

function closePopup(item) {
  item.classList.remove('popup__opened');
}
closePopupBtn.addEventListener('click', () => {
  closePopup(popup);
});
let arr = [];

function getCard(item) {
  const cardTemplate = document.querySelector('.card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  cardElement.querySelector('.card__heding').textContent = item.name;
  cardElement.querySelector('.card__price').textContent = `$ ${item.price}.00`;

  const cardPhoto = cardElement.querySelector('.card__img');
  cardPhoto.src = item.link;
  cardPhoto.alt = item.name;

  const cardBtn = cardElement.querySelector('.card__btn');
  cardBtn.addEventListener('click', () => {
    if (arr.some((i) => i.id === item.id)) {
      console.log('уже там');
      openPopup(popup, item.name);
    } else {
      cartCount.textContent++;
      cardProduct.append(cardToBasket(item));
    }
  });

  return cardElement;
}

// функция добавления карточку на страницу
function renderCards(item, container) {
  const newCard = getCard(item);
  container.append(newCard);
}
// Карточки из коробки
cardData.forEach((item) => {
  renderCards(item, cards);
});

function cardToBasket(item) {
  const cardTemplateBasket = document.querySelector('.product-template').content;
  const cardElementBasket = cardTemplateBasket.querySelector('.product').cloneNode(true);

  cardElementBasket.querySelector('.card-product__heding').textContent = item.name;
  cardElementBasket.querySelector('.card-product__price').textContent = `$ ${item.price}.00`;

  const quantityСount = cardElementBasket.querySelector('.quantity__count-number');

  const quantityPlus = cardElementBasket.querySelector('.quantity__count-plus');
  const quantityMinus = cardElementBasket.querySelector('.quantity__count-minus');
  quantityPlus.addEventListener('click', () => {
    let currentValue = parseInt(quantityСount.value);
    currentValue += 1;
    quantityСount.value = currentValue;
  });
  quantityMinus.addEventListener('click', () => {
    let currentValue = parseInt(quantityСount.value);
    if (currentValue > 1) {
      currentValue -= 1;
      quantityСount.value = currentValue;
    }
  });

  const cardRemove = cardElementBasket.querySelector('.card-remove');
  cardRemove.addEventListener('click', (evt) => {
    evt.target.closest('.product').remove();
    arr.forEach((el, i) => {
      if (el.id === item.id) {
        arr.splice(i, 1);
      }
    });
    cartCount.textContent--;
    updateTotalPrice(arr, totalCount);
    console.log(arr);
  });

  arr.push(item);
  const totalPrice = calculateTotalPrice(arr);

  totalCount.textContent = totalPrice;

  return cardElementBasket;
}

function handleCardBtnAdd(item) {
  item.disabled = true;
  item.textContent = 'product in cart';
  item.style.cursor = 'default';
}

function handleCardBtnRemove(item) {
  item.disabled = false;
  item.style.cursor = 'pointer';
}

function calculateTotalPrice(products) {
  return products.map((product) => product.price).reduce((sum, price) => sum + price, 0);
}

function updateTotalPrice(items, totalCount) {
  let arrPrice = items
    .map((i) => i.price)
    .reduce((a, b) => {
      return a + b;
    }, 0);
  totalCount.textContent = arrPrice;
}
