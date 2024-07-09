const createResetButton = () => {
    const button = document.createElement('button');
    button.setAttribute('id', 'restart-btn');
    button.textContent = 'Restart Game';
    return button;
};

export default createResetButton;



