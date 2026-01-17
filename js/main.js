import "./phoneNav.js";

import {
  render as renderLightBox,
  initPreviewAndNextBtns as lightboxInitPreviewAndNextBtns,
  initPhotoListEventListener as lightboxInitPhotoListEventListener,
} from "./lightbox.js";

import {
  render as renderCart,
  initOnDeleteClicked as initCartOnDeleteClicked,
  showCart,
} from "./cart.js";

import {
  initBtnPrevMobileListener,
  initBtnNextMobileListener,
  initListPhotoEventListener,
  render as renderPreviewImg,
} from "./preview.js";

import {
  initBtnQuantitySubstract,
  initBtnQuantityAdd,
  initAddToCart,
  render as renderAddToCartQuantity,
} from "./addToCart.js";

const product = {
  title: "Fall Limited Edition Sneakers",
  thumbnail: "./images/image-product-1-thumbnail.jpg",
  quantity: 1,
  priceItem: 125,
};

let quantity = 1;
let cartQuantity = 0;
let currentImgIndex = 0;

const images = [
  "../images/image-product-1.jpg",
  "../images/image-product-2.jpg",
  "../images/image-product-3.jpg",
  "../images/image-product-4.jpg",
];

render();

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

initBtnQuantitySubstract(() => {
  if (quantity <= 1) return;
  quantity -= 1;
  render();
});

initBtnQuantityAdd(() => {
  if (quantity >= 5) return;
  quantity += 1;
  render();
});

initAddToCart((ev) => {
  cartQuantity = quantity;
  showCart(ev);
  render();
});

function decrementPhotoIndex() {
  currentImgIndex = currentImgIndex - 1;
  if (currentImgIndex < 0) currentImgIndex = images.length - 1;
}

function incrementPhotoIndex() {
  currentImgIndex = (currentImgIndex + 1) % images.length;
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

  renderAddToCartQuantity(quantity);
  if (cartQuantity == 0) {
    renderCart([]);
  } else {
    renderCart([{ ...product, quantity: cartQuantity }]);
  }
}
