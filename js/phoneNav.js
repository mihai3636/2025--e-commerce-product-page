const btnMenuMobileEl = document.getElementById("btnMenuMobile");
const btnMenuCloseMobileEl = document.getElementById("btnMenuCloseMobile");
const mainEl = document.querySelector("main");

btnMenuMobileEl.addEventListener("click", (ev) => {
  mainEl.classList.toggle("open-menu");
});

btnMenuCloseMobileEl.addEventListener("click", (ev) => {
  mainEl.classList.toggle("open-menu");
});
