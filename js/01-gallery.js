import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const linkGallery = document.querySelector(".gallery");
const galleryMarkup = makeGalleryMarkup(galleryItems);

linkGallery.insertAdjacentHTML("beforeend", galleryMarkup);
linkGallery.addEventListener("click", makeClickImg);

//разметка галереи
function makeGalleryMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
              <a class="gallery__link" href="large-image.jpg">
                <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
                />
             </a>
           </div>`;
    })
    .join("");
}

// открытие модального окна и показ большого изображения
function makeClickImg(galleryItems) {
  galleryItems.preventDefault();
  if (galleryItems.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
      <img src="${galleryItems.target.dataset.source}" width="800" height="600">
  `);

  instance.show();
}

// закрытие модального окна кнопкой escape
document.addEventListener("keydown", (evt) => {
  const pushEscape = evt.code === "Escape";

  const onModalWindow = document.querySelector(".basicLightbox");
  if (!onModalWindow) {
    return;
  }
  if (pushEscape) {
    onModalWindow.remove();
  }
});
