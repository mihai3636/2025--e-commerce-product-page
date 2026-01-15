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

// Photo Preview
const btnPrevMobile = document.getElementById("btnPrevMobile");
const btnNextMobile = document.getElementById("btnNextMobile");
const previewImgEl = document.querySelector(".content .preview-img img");
const listPhotoEl = document.querySelector(".preview > .list-photo");

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

listPhotoEl.addEventListener("click", (ev) => {
  const img = ev.target.closest("img");
  if (!img) return;

  currentImgIndex = img.dataset.index;
  render();
});

btnPrevMobile.addEventListener("click", (ev) => {
  decrementPhotoIndex();
  render();
});

btnNextMobile.addEventListener("click", (ev) => {
  incrementPhotoIndex();
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

function updatePreviewImgUi() {
  previewImgEl.src = images[currentImgIndex];
}

function updatePreviewImgList() {
  listPhotoEl.querySelectorAll("li").forEach((li) => {
    li.classList.remove("selected");

    if (li.querySelector(`img[data-index="${currentImgIndex}"]`)) {
      li.classList.add("selected");
    }
  });
}

function render() {
  updatePreviewImgUi();
  updatePreviewImgList();

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
