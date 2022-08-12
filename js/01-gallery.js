import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const linkGallery = document.querySelector(".gallery");
const galleryMarkup = makeGalleryMarkup(galleryItems);

linkGallery.insertAdjacentHTML("beforeend", galleryMarkup);
linkGallery.addEventListener("click", makeClickImg);

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
