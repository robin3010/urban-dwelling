import items from './db.js'
import { formatPrice } from './helpers.js'

const CURRENCY = '₽'

const itemsList = Array.from({ length: 8 }, (_, i) => items[i % items.length])

const $searchContent = document.querySelector('.search-content')

const getItemLayout = (item) => {
  const { id, title, price, discount } = item

  const discountPriceLayout = !discount
    ? ''
    : `
    <div class="item-price_discount">
      <span class="item-price__value">${formatPrice(discount)}</span>
      <span class="item-price__currency"> ${CURRENCY}</span>
    </div>
    <div class="item-promo-badge"><span class="item-promo-badge__text">Акция</span></div>
  `

  return `
    <div class="item-card">
      <img class="item-img" src="./assets/images/${id}.png"></img>
      <span class="item-title">${title}</span>
      <div class="item-price">
        ${discountPriceLayout}
        <div class="${discount ? ' item-price_outline' : ''}">
          <span class="item-price__value">${formatPrice(price)}</span>
          <span class="item-price__currency"> ${CURRENCY}</span>
        </div>
      </div>
      <button class="item-details" type="button">Подробнее</button>
    </div>
        `
}

$searchContent.insertAdjacentHTML(
  'afterbegin',
  itemsList.map((item) => getItemLayout(item)).join(''),
)
