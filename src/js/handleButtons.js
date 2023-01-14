export const handleAndStyleButtons = () => {
    const active = 'select-button-active';
    const buttonsArray = document.querySelectorAll('.buttons-container .select-button');
    buttonsArray.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains(active)) return;
            buttonsArray.forEach(button => button.classList.remove(active));
            button.classList.add(active);
        });
    });
};
