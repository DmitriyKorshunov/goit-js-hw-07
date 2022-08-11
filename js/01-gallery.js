import { galleryItems } from "./gallery-items.js";
// Change code below this line

//console.log(galleryItems);

//ссылки на злементы
const linkGallery = document.querySelector(".gallery");
console.log(linkGallery);
const galleryMarkup = makeGalleryMarkup(galleryItems);
//console.log(galleryMarkup);

linkGallery.insertAdjacentHTML("beforeend", galleryMarkup);
linkGallery.addEventListener("click", (galleryItems) => {
  galleryItems.preventDefault();

  const oneGalleryItem = galleryItems.target;
  console.log(oneGalleryItem);

  console.log(oneGalleryItem.src);
  console.log(galleryItems.original);
  //oneGalleryItem.src = `${galleryItems.src.original}`;
  //   const instance = basicLightbox.create(`
  //     <img src="${original}" width="800" height="600">
  // `);

  //   instance.show();
});

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
