import '../styles/index.scss';
import { cardData, cards, cartCount, cardProduct } from '../utils/constants.js';

const cartInfo = document.querySelector('.cart-info');
const cartInner = document.querySelector('.cart-inner');
const close = document.querySelector('.cart-info__close');

cartInfo.addEventListener('click', () => {
	cartInner.classList.add('cart-inner__opened');
	cartInner.classList.remove('cart-inner__close');
});

close.addEventListener('click', () => {
	cartInner.classList.remove('cart-inner__opened');
	cartInner.classList.add('cart-inner__close');
});

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
		cartCount.textContent++;
		handleCardBtnAdd(cardBtn);
		cardProduct.append(cardToBasket(item));
	});

	return cardElement;
}

// функция добавления карточку на страницу
function addCard(item, container) {
	const newCard = getCard(item);
	container.append(newCard);
}
// Карточки из коробки
cardData.forEach(function(item) {
	addCard(item, cards);
});

let arr = [];
function cardToBasket(item) {
	const cardTemplateBasket = document.querySelector('.product-template').content;
	const cardElementBasket = cardTemplateBasket.querySelector('.product').cloneNode(true);

	cardElementBasket.querySelector('.card-product__heding').textContent = item.name;
	cardElementBasket.querySelector('.card-product__price').textContent = `$ ${item.price}.00`;

	const cardRemove = cardElementBasket.querySelector('.card-remove');
	cardRemove.addEventListener('click', evt => {
		evt.target.closest('.product').remove();
		arr.forEach((el, i) => {
			if (el.id === item.id) arr.splice(i, 1);
		});
		console.log(arr);
	});

	if (arr.find(i => i.id === item.id)) {
		alert('product added');
	} else {
		arr.push(item);
		console.log(arr);
	}

	// arr.push(cardElementBasket);
	return cardElementBasket;
}

function handleCardBtnAdd(item) {
	item.disabled = true;
	item.textContent = 'product in cart';
}
