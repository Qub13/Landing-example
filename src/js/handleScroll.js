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

    const entries = (entry) => {
        if (window.innerWidth > 944) {
            if (entry[0].isIntersecting) {
                console.log(entry);
                switch (entry[0].target.id) {
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
        }
    };
    const options = {
        threshold: 0.95,
    };
    const observer = new IntersectionObserver(entries, options);

    cards.forEach(card => observer.observe(card));
};