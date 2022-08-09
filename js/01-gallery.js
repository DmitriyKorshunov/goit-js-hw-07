import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// сщздать функцию для добавления разметки
{
  /* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>; */
}

function makeGalleryMarkup() {
  return galleryItems
    .map((param) => {
      return `<div class="gallery__item">
              <a class="gallery__link" href="large-image.jpg">
                <img
                  class="gallery__image"
                  src="small-image.jpg"
                  data-source="large-image.jpg"
                  alt="Image description"
                />
             </a>
           </div>`;
    })
    .join("");
}
console.log(makeGalleryMarkup(galleryItems));

//const linkMakeImgGalleryRows = images.map(makeImgGalleryMarkup).join(" ");

//gallerysEL.insertAdjacentHTML("beforeend", linkMakeImgGalleryRows);
