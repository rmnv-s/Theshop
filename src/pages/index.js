import '../styles/index.scss';
import { cardData, cards, cartCount, cardProduct, totalCount, popup } from '../utils/constants.js';
import { openPopup } from '../components/popup.js';
import { openBasket, closeBasket } from '../components/basket.js';
import { calculateTotalPrice, updateTotalPrice } from '../components/price.js';
import { getCardsToPage } from '../components/cardToPage.js';
import { cardToBasket } from '../components/cardToBasket.js';

// функция добавления карточку на страницу
function renderCards(item, container) {
  const newCard = getCardsToPage(item);
  container.append(newCard);
}
// Карточки из коробки
cardData.forEach((item) => {
  renderCards(item, cards);
});
