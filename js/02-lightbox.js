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
      return `<li><a class="gallery__item" href="${original}">
               <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
               </a></li>`;
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
