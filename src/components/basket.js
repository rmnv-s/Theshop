import { cart, cartInner, close } from '../utils/constants.js';

function openBasket(item) {
  item.classList.add('cart-inner__opened');
  item.classList.remove('cart-inner__close');
  close.classList.add('clossed');
  cart.style.cursor = 'default';
}

function closeBasket(item) {
  item.classList.remove('cart-inner__opened');
  item.classList.add('cart-inner__close');
  close.classList.remove('clossed');
  cart.style.cursor = 'pointer';
}

cart.addEventListener('click', () => {
  openBasket(cartInner);
});

close.addEventListener('click', () => {
  closeBasket(cartInner);
});
