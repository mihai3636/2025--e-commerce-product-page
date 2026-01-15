const thumbnailEl = document.querySelector(".cart-item > img");
const titleEl = document.querySelector(".cart-item > h2");
const pricePerItemEl = document.getElementById("cartPricePerItem");
const periceTotalEl = document.getElementById("cartPriceTotal");

const sectionCartListEl = document.getElementById("sectionCartList");

let onDeleteClicked = () => {};

export function initOnDeleteClicked(onClick) {
  onDeleteClicked = onClick;
}

export function render(items) {
  const cartListEl = document.querySelector(".cart-content ul");

  if (items.length === 0) {
    hideCartBadge();
    showEmptyCart();
    cartListEl.innerHTML = "";
    return;
  }

  const { title, thumbnail, quantity, priceItem } = items[0];
  const cartItemEl = createCartItem(items[0]);

  cartListEl.innerHTML = "";
  cartListEl.appendChild(cartItemEl);
  showCartBadge();
  hideEmptyCart();
}

function createCartItem({ title, thumbnail, quantity, priceItem }) {
  const template = document.getElementById("cart-item-template");
  const li = template.content.firstElementChild.cloneNode(true);

  const priceTotal = priceItem * quantity;

  li.querySelector("img").src = thumbnail;
  li.querySelector("img").alt = title;

  li.querySelector("h2").textContent = title;

  li.querySelector(".cart-price-per-item").textContent = `$${priceItem.toFixed(
    2
  )} x ${quantity}`;

  li.querySelector(".cart-price-total").textContent = `$${priceTotal.toFixed(
    2
  )}`;

  li.querySelector("button").addEventListener("click", () => {
    onDeleteClicked();
  });

  return li;
}

function hideCartBadge() {
  document.querySelector("header").classList.remove("cart-badge-visible");
}

function showCartBadge() {
  document.querySelector("header").classList.add("cart-badge-visible");
}

function showEmptyCart() {
  sectionCartListEl.classList.add("empty-cart--visible");
}

function hideEmptyCart() {
  sectionCartListEl.classList.remove("empty-cart--visible");
}
