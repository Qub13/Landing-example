const scrollOptions = { behavior: 'smooth', block: 'center', inline: 'center' };
const svgBackground = document.querySelectorAll('.card-background path');


export const handleAndStyleButtons = () => {
    const buttonActiveClass = 'select-button-active';
    const buttons = document.querySelectorAll('.buttons-container .select-button');

    const cardActive = 'card-active';
    const cards = document.querySelectorAll('.card');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains(buttonActiveClass)) return;
            buttons.forEach(button => button.classList.remove(buttonActiveClass));
            button.classList.add(buttonActiveClass);
            switch (button.id) {
                case 'coach-button':

                    cards.forEach(card => card.classList.remove(cardActive));
                    document.querySelector('#coach-card').classList.add(cardActive);

                    if (window.innerWidth >= 944) document.querySelector('#coach-card').scrollIntoView(scrollOptions);
                    svgBackground.forEach(svg => svg.setAttribute('fill', '#408BFC'));
                    break;
                case 'app-button':

                    cards.forEach(card => card.classList.remove(cardActive));
                    document.querySelector('#app-card').classList.add(cardActive);

                    if (window.innerWidth >= 944) document.querySelector('#app-card').scrollIntoView(scrollOptions);
                    svgBackground.forEach(svg => svg.setAttribute('fill', '#4F6258'));
                    break;
                case 'medication-button':

                    cards.forEach(card => card.classList.remove(cardActive));
                    document.querySelector('#medication-card').classList.add(cardActive);

                    if (window.innerWidth >= 944) document.querySelector('#medication-card').scrollIntoView(scrollOptions);
                    svgBackground.forEach(svg => svg.setAttribute('fill', '#F9D270'));
                    break;
                case 'community-button':

                    cards.forEach(card => card.classList.remove(cardActive));
                    document.querySelector('#community-card').classList.add(cardActive);

                    if (window.innerWidth >= 944) document.querySelector('#community-card').scrollIntoView(scrollOptions);
                    svgBackground.forEach(svg => svg.setAttribute('fill', '#CF6D58'));
                    break;
                default:

                    cards.forEach(card => card.classList.remove(cardActive));
                    document.querySelector('#doctor-card').classList.add(cardActive);

                    if (window.innerWidth >= 944) document.querySelector('#doctor-card').scrollIntoView(scrollOptions);
                    svgBackground.forEach(svg => svg.setAttribute('fill', '#5A58CF'));
            }
        });
    });
};
