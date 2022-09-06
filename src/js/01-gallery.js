import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox'; // Описаний в документації
import 'simplelightbox/dist/simple-lightbox.min.css'; // Додатковий імпорт стилів
// Change code below this line

const gallery = document.querySelector('.gallery');
const listOfGallery = galleryItems
  .map(
    image =>
      `<a class="gallery__item" href="${image.original}">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}"/>
</a>`
  )
  .join('');
gallery.insertAdjacentHTML('beforeend', listOfGallery);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
