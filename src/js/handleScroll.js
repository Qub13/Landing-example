import { isclickEventActive } from './handleButtons';

export const handleScroll = () => {

    const svgBackground = document.querySelectorAll('.card-background path');
    const cards = document.querySelectorAll('.card');
    const cardActive = 'card-active';

    const buttons = document.querySelectorAll('.select-button');
    const buttonActiveClass = 'select-button-active';

    const toggleButtonsStyle = (buttonId) => {
        buttons.forEach(button => {
            if (button.id === buttonId) {
                button.classList.add(buttonActiveClass);
            } else button.classList.remove(buttonActiveClass);
        });
    };

    $(window).scroll(function() {
        if (!isclickEventActive && window.innerWidth > 944) cards.forEach(card => {
            const cardTop = $(`#${card.id}`).offset().top,
                cardHeight = $(`#${card.id}`).outerHeight(),
                windowHeight = $(window).height(),
                windowScrollTop = $(this).scrollTop();
            if (windowScrollTop > (cardTop + cardHeight - windowHeight) && (cardTop > windowScrollTop) && (windowScrollTop + windowHeight > cardTop + cardHeight)) {
                switch (card.id) {
                    case 'coach-card':

                        cards.forEach(card => card.classList.remove(cardActive));
                        document.querySelector('#coach-card').classList.add(cardActive);

                        svgBackground.forEach(svg => svg.setAttribute('fill', '#408BFC'));
                        toggleButtonsStyle('coach-button');
                        break;
                    case 'app-card':

                        cards.forEach(card => card.classList.remove(cardActive));
                        document.querySelector('#app-card').classList.add(cardActive);

                        svgBackground.forEach(svg => svg.setAttribute('fill', '#4F6258'));
                        toggleButtonsStyle('app-button');

                        break;
                    case 'medication-card':

                        cards.forEach(card => card.classList.remove(cardActive));
                        document.querySelector('#medication-card').classList.add(cardActive);

                        svgBackground.forEach(svg => svg.setAttribute('fill', '#F9D270'));
                        toggleButtonsStyle('medication-button');

                        break;
                    case 'community-card':

                        cards.forEach(card => card.classList.remove(cardActive));
                        document.querySelector('#community-card').classList.add(cardActive);

                        svgBackground.forEach(svg => svg.setAttribute('fill', '#CF6D58'));
                        toggleButtonsStyle('community-button');

                        break;
                    default:

                        cards.forEach(card => card.classList.remove(cardActive));
                        document.querySelector('#doctor-card').classList.add(cardActive);

                        svgBackground.forEach(svg => svg.setAttribute('fill', '#5A58CF'));
                        toggleButtonsStyle('doctor-button');
                }
            }
        });
    });
};

