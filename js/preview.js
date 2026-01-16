const btnPrevMobile = document.getElementById("btnPrevMobile");
const btnNextMobile = document.getElementById("btnNextMobile");
const previewImgEl = document.querySelector(".content .preview-img img");
const listPhotoEl = document.querySelector(".preview > .list-photo");

let handlePhotoListImgClick = () => {};

export function initListPhotoEventListener(onClick) {
  listPhotoEl.addEventListener("click", (ev) => {
    const img = ev.target.closest("img");
    if (!img) return;

    let index = img.dataset.index;
    onClick(index);
  });
}

export function initBtnPrevMobileListener(onClick) {
  btnPrevMobile.addEventListener("click", (ev) => {
    onClick();
  });
}

export function initBtnNextMobileListener(onClick) {
  btnNextMobile.addEventListener("click", (ev) => {
    onClick();
  });
}

export function render({ imgSrc, currentImgIndex }) {
  updatePreviewImgUi(imgSrc);
  updatePreviewImgList(currentImgIndex);
}

function updatePreviewImgUi(imgSrc) {
  previewImgEl.src = imgSrc;
}

function updatePreviewImgList(currentImgIndex) {
  listPhotoEl.querySelectorAll("li").forEach((li) => {
    li.classList.remove("selected");

    if (li.querySelector(`img[data-index="${currentImgIndex}"]`)) {
      li.classList.add("selected");
    }
  });
}
