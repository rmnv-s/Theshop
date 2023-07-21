import '../styles/index.scss';
import {
  cardData,
  cards,
  cartCount,
  cardProduct,
  totalCount,
  popup,
} from '../utils/constants.js';
import { openPopup } from '../components/popup.js';
import { openBasket, closeBasket } from '../components/basket.js';
import { calculateTotalPrice, updateTotalPrice } from '../components/price.js';
import { getCardsToPage } from '../components/cardToPage.js';
import { cardToBasket } from '../components/cardToBasket.js';

async function renderCards(item, container) {
  try {
    const loader = document.querySelector('.loader');
    loader.style.display = 'block';

    const newCard = await getCardsToPage(item);
    container.append(newCard);

    loader.style.display = 'none';
  } catch (error) {
    console.error('Ошибка отрисовки карточки:', error);
  }
}

// Карточки из коробки
cardData.forEach(async (item) => {
  await renderCards(item, cards);
});
