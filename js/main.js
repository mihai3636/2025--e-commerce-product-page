console.log("hello world");

const btnMenuMobileEl = document.getElementById("btnMenuMobile");
const btnMenuCloseMobileEl = document.getElementById("btnMenuCloseMobile");
const mainEl = document.querySelector("main");

const btnCart = document.querySelector(".cart");
const headerEl = document.querySelector("header");

console.log(headerEl);

btnMenuMobileEl.addEventListener("click", (ev) => {
  mainEl.classList.toggle("open-menu");
});

btnMenuCloseMobileEl.addEventListener("click", (ev) => {
  mainEl.classList.toggle("open-menu");
});

btnCart.addEventListener("click", (ev) => {
  headerEl.classList.toggle("cart-visible");
});
