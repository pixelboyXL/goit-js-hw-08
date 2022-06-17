// Додай бібліотеку SimpleLightbox як залежність проекту, використовуючи npm (посилання на CDN з твоєї минулої роботи більше не потрібне).

// Використовуй свій JavaScript код з попередньої домашньої роботи, але виконай рефакторинг з урахуванням того, що бібліотека була встановлена через npm (синтаксис import/export).

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

const images = galleryItems
    .map((image) => `<a class="gallery__item" href="${image.original}">
        <img class="gallery__image" src="${image.preview}" alt="${image.description}"/>
        </a>`)
    .join("");

gallery.insertAdjacentHTML("afterbegin", images);

const lightbox = new SimpleLightbox(".gallery a", {
  overlayOpacity: 0.5,
  captionsData: "alt",
  captionDelay: 250,
});