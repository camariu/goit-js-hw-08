 
import { galleryItems } from "./gallery-items.js";
// import "simplelightbox/dist/simple-lightbox.min.css"
// import simpleLightbox from "simplelightbox";

const ulItemGalery = document.querySelector(".gallery");

function galleryCreate() {
  const galleryItem = galleryItems
    .map(
      ({ preview, description, original }) =>
        ` <li class = "gallery__item">
  <a class="gallery__link" href="${original}">
      <img class = "gallery__image"
      src = "${preview}"
      alt = "${description}">
</a></li>`
    )
    .join("");

  ulItemGalery.insertAdjacentHTML("beforeend", galleryItem);

    }

    galleryCreate()

// var lightbox = new SimpleLightbox('.gallery a', {captionsData:'alt' , captionDelay:250});
