import {
  render as renderLightBox,
  initPreviewAndNextBtns as lightboxInitPreviewAndNextBtns,
  initPhotoListEventListener as lightboxInitPhotoListEventListener,
} from "./lightbox.js";

console.log("hello world");

const btnMenuMobileEl = document.getElementById("btnMenuMobile");
const btnMenuCloseMobileEl = document.getElementById("btnMenuCloseMobile");
const mainEl = document.querySelector("main");

// Cart
const btnCart = document.querySelector(".cart");
const cartContentEl = document.querySelector(".cart-content");
const headerEl = document.querySelector("header");

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

let quantity = 0;

const images = [
  "../images/image-product-1.jpg",
  "../images/image-product-2.jpg",
  "../images/image-product-3.jpg",
  "../images/image-product-4.jpg",
];

let currentImgIndex = 0;

render();

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
  if (quantity <= 0) return;
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

btnMenuMobileEl.addEventListener("click", (ev) => {
  mainEl.classList.toggle("open-menu");
});

btnMenuCloseMobileEl.addEventListener("click", (ev) => {
  mainEl.classList.toggle("open-menu");
});

btnCart.addEventListener("click", (ev) => {
  ev.stopPropagation();
  headerEl.classList.toggle("cart-visible");
});

cartContentEl.addEventListener("click", (ev) => {
  ev.stopPropagation();
});

document.addEventListener("click", () => {
  headerEl.classList.remove("cart-visible");
});

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

  // Should this be concerned of rendering the lightbox?
  // Well without calling from here you don't really know what state to pass to that lightbox
  // maybe render it only if it's visible, idk
  renderLightBox({
    currentPhotoSrc: images[currentImgIndex],
    currentPhotoIndex: currentImgIndex,
  });

  updateQuantityUi();
}
