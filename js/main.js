// import "./lightbox.js";
import {
  render as renderLightBox,
  initPreviewAndNextBtns,
  initPhotoListEventListener,
} from "./lightbox.js";

console.log("hello world");

const btnMenuMobileEl = document.getElementById("btnMenuMobile");
const btnMenuCloseMobileEl = document.getElementById("btnMenuCloseMobile");
const mainEl = document.querySelector("main");

const btnCart = document.querySelector(".cart");
const cartContentEl = document.querySelector(".cart-content");
const headerEl = document.querySelector("header");

const btnPrevMobile = document.getElementById("btnPrevMobile");
const btnNextMobile = document.getElementById("btnNextMobile");
const previewImgEl = document.querySelector(".content .preview-img img");
const listPhotoEl = document.querySelector(".preview > .list-photo");

const lightboxEl = document.querySelector(".lightbox");

const images = [
  "../images/image-product-1.jpg",
  "../images/image-product-2.jpg",
  "../images/image-product-3.jpg",
  "../images/image-product-4.jpg",
];

let currentImgIndex = 0;

initPreviewAndNextBtns(
  () => {
    decrementPhotoIndex();
    render();
  },
  () => {
    incrementPhotoIndex();
    render();
  }
);

initPhotoListEventListener((index) => {
  currentImgIndex = index;
  render();
});

render();

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
}

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

function decrementPhotoIndex() {
  currentImgIndex = currentImgIndex - 1;
  if (currentImgIndex < 0) currentImgIndex = images.length - 1;
}

function incrementPhotoIndex() {
  currentImgIndex = (currentImgIndex + 1) % images.length;
}

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
