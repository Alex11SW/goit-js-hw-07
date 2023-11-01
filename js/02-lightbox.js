import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const list = document.querySelector('.gallery');

function createGalleryItem({ original, preview, description }) {
    return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                />
            </a>
        </li>
   `;
}

const galleryMarkup = galleryItems.map(createGalleryItem).join("");
list.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    captionsData: 'alt',
});

lightbox.on('show.simplelightbox', (e) => {
    const caption = e.caption;
    const captionElement = document.querySelector('.sl-caption');

    if (captionElement) {
        captionElement.textContent = caption;
        setTimeout(() => {
            captionElement.style.opacity = 1;
        }, 250);
    }
});