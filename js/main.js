console.log("hello world");

const btnMenuMobileEl = document.getElementById("btnMenuMobile");
const btnMenuCloseMobileEl = document.getElementById("btnMenuCloseMobile");
const mainEl = document.querySelector("main");

console.log(btnMenuMobileEl);
console.log(mainEl);
console.log(btnMenuCloseMobileEl);

btnMenuMobileEl.addEventListener("click", (ev) => {
  mainEl.classList.toggle("open-menu");
});

btnMenuCloseMobileEl.addEventListener("click", (ev) => {
  mainEl.classList.toggle("open-menu");
});
