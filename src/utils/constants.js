import m1Image from '../images/m-01.jpg';
import m2Image from '../images/m-02.jpg';
import m3Image from '../images/m-03.jpg';
import m4Image from '../images/m-01.jpg';
import m5Image from '../images/m-02.jpg';
import m6Image from '../images/m-03.jpg';

export const cardData = [
  { id: 1, name: 'm – 01 digital', price: 4, link: m1Image },
  { id: 2, name: 'm – 02 digital', price: 3, link: m2Image },
  { id: 3, name: 'm – 03 digital', price: 8, link: m3Image },
  { id: 4, name: 'm – 04 digital', price: 2, link: m4Image },
  { id: 5, name: 'm – 05 digital', price: 5, link: m5Image },
  { id: 6, name: 'm – 06 digital', price: 6, link: m6Image },
];

export const cards = document.querySelector('.cards');
export const cartCount = document.querySelector('.cart-info__count');
export const cardProduct = document.querySelector('.card-product');

export const totalCount = document.querySelector('.total-count');
export const quantityСount = document.querySelector('.quantity__count-number');
