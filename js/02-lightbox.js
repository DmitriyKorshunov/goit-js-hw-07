import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const linkGallery = document.querySelector(".gallery");
console.log(linkGallery);
const galleryMarkup = makeGalleryMarkup(galleryItems);

linkGallery.insertAdjacentHTML("beforeend", galleryMarkup);
linkGallery.addEventListener("click", makeClickImg);

function makeGalleryMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="large-image.jpg">
               <img class="gallery__image" src="${preview}" alt="${description}" />
               </a>`;
    })
    .join("");
}

let gallery = new SimpleLightbox(".gallery a");
console.log(gallery);
//gallery.on("show.simplelightbox", makeClickImg);

function makeClickImg(galleryItems) {
  galleryItems.preventDefault();
  if (galleryItems.target.nodeName !== "IMG") {
    return;
  }
}
