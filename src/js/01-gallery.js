// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const divGallery = document.querySelector('.gallery');

function creatGallery(galleryItems) {
    return galleryItems
        .map((item) => 
           `<div class="gallery__item">
  <a class="gallery__item" 
  href="${item.original}">
  <img class="gallery__image" 
  src="${item.preview}" 
  alt="${item.description}" />
</a>
</div>`).join('');
    
}

const addGallery = creatGallery(galleryItems);
divGallery.innerHTML = addGallery;

const SimpleLightbox = require('simplelightbox')
    new SimpleLightbox('.gallery__item a', {captionsData: "alt"});



// console.log(galleryItems);
