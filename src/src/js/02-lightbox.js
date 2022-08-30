import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const containerForGallery = document.querySelector(".gallery");
const galleryItemsMarkup = galleryItems.reduce(
  (acc, { preview, original, description }) => {
    return (
      acc +
      `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" /></a></li>`
    );
  },
  ""
);

containerForGallery.insertAdjacentHTML("afterbegin", galleryItemsMarkup);

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
gallery.on();
