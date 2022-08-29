import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const containerForGallery = document.querySelector(".gallery");
const galleryItemsMarkup = galleryItems.reduce(
  (acc, { preview, original, description }) => {
    return (
      acc +
      `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    );
  },
  ""
);

containerForGallery.insertAdjacentHTML("afterbegin", galleryItemsMarkup);

containerForGallery.addEventListener("click", originalImgOpener);

function originalImgOpener(event) {
  event.preventDefault();
  console.dir(event.target.dataset.source);
  if (event.target.nodeName !== "IMG") {
    return;
  }
  let instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="1200">`,
    {
      onClose: () => true,
    }
  );
  instance.show();
  document.addEventListener("keydown", modalWindowCloser);

  function modalWindowCloser(event) {
    console.log(event.code);
    if (event.code !== "Escape") {
      return;
    }
    instance.close();
  }
}

const modalWindow = document.querySelector(".basicLightbox");
