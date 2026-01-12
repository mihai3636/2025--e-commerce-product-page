console.log("hello world");

const btnMenuMobileEl = document.getElementById("btnMenuMobile");
const btnMenuCloseMobileEl = document.getElementById("btnMenuCloseMobile");
const mainEl = document.querySelector("main");

const btnCart = document.querySelector(".cart");
const cartContentEl = document.querySelector(".cart-content");
const headerEl = document.querySelector("header");

const btnPrevMobile = document.getElementById("btnPrevMobile");
const btnNextMobile = document.getElementById("btnNextMobile");
const previewImgEl = document.querySelector(".preview-img img");

const images = [
  "../images/image-product-1.jpg",
  "../images/image-product-2.jpg",
  "../images/image-product-3.jpg",
  "../images/image-product-4.jpg",
];

let currentImgIndex = 0;

render();

function updatePreviewImgUi() {
  previewImgEl.src = images[currentImgIndex];
}

function render() {
  updatePreviewImgUi();
}

btnPrevMobile.addEventListener("click", (ev) => {
  console.log("Prev clicked");
  currentImgIndex = currentImgIndex - 1;
  if (currentImgIndex < 0) currentImgIndex = images.length - 1;

  render();
});

btnNextMobile.addEventListener("click", (ev) => {
  console.log("Next clicked");

  currentImgIndex = (currentImgIndex + 1) % images.length;
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
