import { galleryItems } from "./gallery-items.js";
// Change code below this line

//console.log(galleryItems);

//ссылки на злементы
const linkGallery = document.querySelector(".gallery");
console.log(linkGallery);
const galleryMarkup = makeGalleryMarkup(galleryItems);
//console.log(galleryMarkup);

linkGallery.insertAdjacentHTML("beforeend", galleryMarkup);
linkGallery.addEventListener("click", onClickHandler);

function onClickHandler(galleryItems) {
  galleryItems.preventDefault();
  if (galleryItems.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
      <img src="${galleryItems.target.dataset.source}" width="800" height="600">
  `);

  instance.show();
}

// сщздать функцию для добавления разметки

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
