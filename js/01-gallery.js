import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector('.gallery');


function createGalleryItem({ original, preview, description }) {
    return `
        <li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
   `;
}

const galleryMarkup = galleryItems.map(createGalleryItem).join("");
list.insertAdjacentHTML('beforeend', galleryMarkup);4
list.addEventListener("click", handClick);

function handClick(event) {
//event.preventDefault();
   // console.log(event.target);
    const currentProduct = event.target.closest('.gallery__item');
    if (currentProduct) {
    const img = currentProduct.querySelector('.gallery__image');
  
    const largeImageUrl = img.dataset.source;
  
    window.open(largeImageUrl, '_blank');
  }
}

НР