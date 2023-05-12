import m1Image from '../images/m-01.jpg';
import m2Image from '../images/m-02.jpg';
import m3Image from '../images/m-03.jpg';

export const cardData = [
  { id: 1, name: 'm – 01 digital', price: 4, link: m1Image, quantity: 1 },
  { id: 2, name: 'm – 02 digital', price: 3, link: m2Image, quantity: 1 },
  { id: 3, name: 'm – 03 digital', price: 8, link: m3Image, quantity: 1 },
  { id: 4, name: 'm – 04 digital', price: 2, link: m2Image, quantity: 1 },
  { id: 5, name: 'm – 05 digital', price: 7, link: m1Image, quantity: 1 },
  { id: 6, name: 'm – 06 digital', price: 6, link: m3Image, quantity: 1 },
];

/* CARDS */
export const cards = document.querySelector('.cards');
export const cartCount = document.querySelector('.cart-info__count');
export const cardProduct = document.querySelector('.card-product');

/* CARDS COUNT */
export const totalCount = document.querySelector('.total-count');
export const quantityСount = document.querySelector('.quantity__count-number');

/* CART */
export const cart = document.querySelector('.cart');
export const cartInner = document.querySelector('.cart-inner');
export const close = document.querySelector('.cart-info__close');

/* POPUP */
export const popup = document.querySelector('.popup');
export const closePopupBtn = document.querySelector('.button__close-popup');
export const popupText = document.querySelector('.popup__text');

/* CART ARRAY */
export let cartArray = [];
export let sum = 0;
