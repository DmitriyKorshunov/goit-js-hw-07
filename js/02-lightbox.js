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
              <a class="gallery__item" href="large-image.jpg">
               <img class="gallery__image" src="${preview}" alt="${description}" />
               </a>
           </div>`;
    })
    .join("");
}
