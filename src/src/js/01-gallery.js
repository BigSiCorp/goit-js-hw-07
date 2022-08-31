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

  let closerUnblockerByClick = false;
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="1200">`,
    {
      onClose: () => closerUnblockerByClick,
    }
  );
  instance.show();

  document.addEventListener("keydown", modalWindowCloser);

  function modalWindowCloser(event) {
    if (event.code !== "Escape") {
      return;
    }
    closerUnblockerByClick = true;
    instance.close();
    document.removeEventListener("keydown", modalWindowCloser);
  }
}
