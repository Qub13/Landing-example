import doctorEmoji from './../images/doctor-emoji.png';
import sneakerEmoji from './../images/sneaker-emoji.png';
import appEmoji from './../images/app-emoji.png';
import medicationEmoji from './../images/medication-emoji.png';
import communityEmoji from './../images/community-emoji.png';
import doctorCardImg from './../images/doctor-card-img.svg';
import coachCardImg from './../images/coach-card-img.svg';
import appCardImg from './../images/app-card-img.svg';
import medicationCardImg from './../images/medication-card-img.svg';
import communityCardImg from './../images/community-card-img.svg';
import medicationCellLink from './../images/info-icon.svg';

export const setImages = () => {
    document.querySelector('#doctor-img').src = doctorEmoji;
    document.querySelector('#coach-img').src = sneakerEmoji;
    document.querySelector('#app-img').src = appEmoji;
    document.querySelector('#medication-img').src = medicationEmoji;
    document.querySelector('#community-img').src = communityEmoji;
    document.querySelector('#doctor-card-img').src = doctorCardImg;
    document.querySelector('#coach-card-img').src = coachCardImg;
    document.querySelector('#coach-card-img').src = coachCardImg;
    document.querySelector('#app-card-img').src = appCardImg;
    document.querySelector('#medication-card-img').src = medicationCardImg;
    document.querySelector('#community-card-img').src = communityCardImg;
    document.querySelectorAll('.medication-cell-img').forEach(el => el.src = medicationCellLink);
};
