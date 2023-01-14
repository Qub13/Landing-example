import doctorEmoji from './../images/doctor-emoji.png';
import sneakerEmoji from './../images/sneaker-emoji.png';
import appEmoji from './../images/app-emoji.png';
import medicationEmoji from './../images/medication-emoji.png';
import communityEmoji from './../images/community-emoji.png';
import doctorCardImg from './../images/doctor-card-img.svg';

export const setImages = () => {
    document.querySelector('#doctor-img').src = doctorEmoji;
    document.querySelector('#coach-img').src = sneakerEmoji;
    document.querySelector('#app-img').src = appEmoji;
    document.querySelector('#medication-img').src = medicationEmoji;
    document.querySelector('#community-img').src = communityEmoji;
    document.querySelector('#doctor-card-img').src = doctorCardImg;
};
