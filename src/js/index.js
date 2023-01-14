import './../styles/main.scss';
import { setImages } from './setImages.js';
import { handleAndStyleButtons } from './handleButtons';

document.addEventListener('DOMContentLoaded', () => {
    setImages();
    handleAndStyleButtons();
});