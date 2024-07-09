import dom from "../dom.js";

const switchPlayer = (currentPlayer) => {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    dom.statusDisplay.innerHTML = `It's player ${currentPlayer}'s turn`;
    return currentPlayer;
};

export default switchPlayer;



