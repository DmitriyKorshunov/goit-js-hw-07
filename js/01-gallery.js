import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

//ссылки на злементы
const linkGallery = document.querySelector(".gallery");
console.log(linkGallery);
const galleryMarkup = makeGalleryMarkup(galleryItems);
console.log(galleryMarkup);
linkGallery.insertAdjacentHTML("beforeend", galleryMarkup);

// сщздать функцию для добавления разметки

function makeGalleryMarkup() {
  return galleryItems
    .map(({ preview, description }) => {
      return `<div class="gallery__item">
              <a class="gallery__link" href="large-image.jpg">
                <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="large-image.jpg"
                  alt="${description}"
                />
             </a>
           </div>`;
    })
    .join("");
}
