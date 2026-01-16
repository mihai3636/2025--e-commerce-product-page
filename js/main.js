import "./phoneNav.js";

import {
  render as renderLightBox,
  initPreviewAndNextBtns as lightboxInitPreviewAndNextBtns,
  initPhotoListEventListener as lightboxInitPhotoListEventListener,
} from "./lightbox.js";

import {
  render as renderCart,
  initOnDeleteClicked as initCartOnDeleteClicked,
} from "./cart.js";

import {
  initBtnPrevMobileListener,
  initBtnNextMobileListener,
  initListPhotoEventListener,
  render as renderPreviewImg,
} from "./preview.js";

// Lightbox
const lightboxEl = document.querySelector(".lightbox");

// Cart
const btnQuantitySubstract = document.getElementById("btnQuantitySubstract");
const btnQuantityAdd = document.getElementById("btnQuantityAdd");
const quantityTextEl = document.querySelector(".quantity > span");
const btnAddToCart = document.querySelector(".btn--add-to-cart");

let quantity = 1;
let cartQuantity = 0;

const images = [
  "../images/image-product-1.jpg",
  "../images/image-product-2.jpg",
  "../images/image-product-3.jpg",
  "../images/image-product-4.jpg",
];

const product = {
  title: "Fall Limited Edition Sneakers",
  thumbnail: "./images/image-product-1-thumbnail.jpg",
  quantity: 1,
  priceItem: 125,
};

let currentImgIndex = 0;

render();

btnAddToCart.addEventListener("click", (ev) => {
  cartQuantity = quantity;
  render();
  showCart(ev);
});

initBtnNextMobileListener(() => {
  incrementPhotoIndex();
  render();
});

initBtnPrevMobileListener(() => {
  decrementPhotoIndex();
  render();
});

initListPhotoEventListener((index) => {
  currentImgIndex = index;
  render();
});

initCartOnDeleteClicked(() => {
  cartQuantity = 0;
  render();
});

lightboxInitPreviewAndNextBtns(
  () => {
    decrementPhotoIndex();
    render();
  },
  () => {
    incrementPhotoIndex();
    render();
  }
);

lightboxInitPhotoListEventListener((index) => {
  currentImgIndex = index;
  render();
});

btnQuantitySubstract.addEventListener("click", (ev) => {
  if (quantity <= 1) return;
  quantity -= 1;
  render();
});

btnQuantityAdd.addEventListener("click", (ev) => {
  if (quantity >= 5) return;
  quantity += 1;
  render();
});

function showCart(clickEvent) {
  clickEvent.stopPropagation();
  headerEl.classList.add("cart-visible");
}

function decrementPhotoIndex() {
  currentImgIndex = currentImgIndex - 1;
  if (currentImgIndex < 0) currentImgIndex = images.length - 1;
}

function incrementPhotoIndex() {
  currentImgIndex = (currentImgIndex + 1) % images.length;
}

function updateQuantityUi() {
  quantityTextEl.textContent = quantity;
}

function render() {
  renderPreviewImg({
    imgSrc: images[currentImgIndex],
    currentImgIndex: currentImgIndex,
  });

  renderLightBox({
    currentPhotoSrc: images[currentImgIndex],
    currentPhotoIndex: currentImgIndex,
  });

  updateQuantityUi();
  if (cartQuantity == 0) {
    renderCart([]);
  } else {
    renderCart([{ ...product, quantity: cartQuantity }]);
  }
}
