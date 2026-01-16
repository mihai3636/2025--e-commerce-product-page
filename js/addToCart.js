// Cart
const btnQuantitySubstract = document.getElementById("btnQuantitySubstract");
const btnQuantityAdd = document.getElementById("btnQuantityAdd");
const quantityTextEl = document.querySelector(".quantity > span");
const btnAddToCart = document.querySelector(".btn--add-to-cart");

export function render(quantity) {
  quantityTextEl.textContent = quantity;
}

export function initBtnQuantitySubstract(onClick) {
  btnQuantitySubstract.addEventListener("click", (ev) => {
    onClick();
  });
}

export function initBtnQuantityAdd(onClick) {
  btnQuantityAdd.addEventListener("click", (ev) => {
    onClick();
  });
}

export function initAddToCart(onClick) {
  btnAddToCart.addEventListener("click", (ev) => {
    onClick(ev);
  });
}
