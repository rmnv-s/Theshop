import { closePopupBtn, popupText, popup } from '../utils/constants.js';
export function openPopup(item, name) {
  item.classList.add('popup__opened');
  popupText.textContent = `Товар ${name} уже в корзине!`;
}

export function closePopup(item) {
  item.classList.remove('popup__opened');
}
closePopupBtn.addEventListener('click', () => {
  closePopup(popup);
});
