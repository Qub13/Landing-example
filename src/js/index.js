import './../styles/main.scss';
import { setImages } from './setImages.js';
import { handleAndStyleButtons } from './handleButtons';
import { handleScroll } from './handleScroll';


document.addEventListener('DOMContentLoaded', () => {
    setImages();
    handleAndStyleButtons();
    handleScroll();
});