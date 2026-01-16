const previewImgEl = document.querySelector(".preview-img img");
const lightBoxPreviewImgEl = document.querySelector(
  ".lightbox-preview-img img"
);
const btnPrev = document.querySelector(".lightbox-preview-img .btn--previous");
const btnNext = document.querySelector(".lightbox-preview-img .btn--next");

const listPhotoEl = document.querySelector(".lightbox .list-photo");
const closeBtn = document.querySelector(".lightbox-content > button");

const isDesktopQuery = window.matchMedia("(min-width: 50rem)");

export function render({ currentPhotoSrc, currentPhotoIndex }) {
  renderPreviewImgUi(currentPhotoSrc);
  renderPreviewImgList(currentPhotoIndex);
}

export function initPreviewAndNextBtns(onPrevClicked, onNextClicked) {
  btnPrev.addEventListener("click", (ev) => {
    onPrevClicked();
  });
  btnNext.addEventListener("click", (ev) => {
    onNextClicked();
  });
}

export function initPhotoListEventListener(onListItemClicked) {
  listPhotoEl.addEventListener("click", (ev) => {
    const img = ev.target.closest("img");
    if (!img) return;

    onListItemClicked(img.dataset.index);
  });
}

previewImgEl.addEventListener("click", (ev) => {
  if (!isDesktopQuery.matches) return;
  document.querySelector("main").classList.toggle("open-lightbox");
});

closeBtn.addEventListener("click", (ev) => {
  document.querySelector("main").classList.toggle("open-lightbox");
});

function renderPreviewImgUi(currentPhotoSrc) {
  lightBoxPreviewImgEl.src = currentPhotoSrc;
}

function renderPreviewImgList(currentPhotoIndex) {
  listPhotoEl.querySelectorAll("li").forEach((li) => {
    li.classList.remove("selected");
    if (li.querySelector(`[data-index="${currentPhotoIndex}"]`)) {
      li.classList.add("selected");
    }
  });
}
