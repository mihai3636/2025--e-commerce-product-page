console.log("hello world");

const btnMenuMobileEl = document.getElementById("btnMenuMobile");
const btnMenuCloseMobileEl = document.getElementById("btnMenuCloseMobile");
const mainEl = document.querySelector("main");

const btnCart = document.querySelector(".cart");
const cartContentEl = document.querySelector(".cart-content");
const headerEl = document.querySelector("header");

btnMenuMobileEl.addEventListener("click", (ev) => {
  mainEl.classList.toggle("open-menu");
});

btnMenuCloseMobileEl.addEventListener("click", (ev) => {
  mainEl.classList.toggle("open-menu");
});

btnCart.addEventListener("click", (ev) => {
  console.log("Clicked");
  ev.stopPropagation();
  headerEl.classList.toggle("cart-visible");
});

cartContentEl.addEventListener("click", (ev) => {
  ev.stopPropagation();
});

document.addEventListener("click", () => {
  headerEl.classList.remove("cart-visible");
});
