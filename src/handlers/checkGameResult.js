import dom from "../dom.js";

const checkGameResult = (gameState, currentPlayer, gameActive) => {
    const winningConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    const roundWon = winningConditions.some(condition => {
        const [a, b, c] = condition.map(index => gameState[index]);
        return a && a === b && a === c;
    });

    if (roundWon) {
        dom.statusDisplay.innerHTML = `Player ${currentPlayer} is the winner!`;
        gameActive = false;
    } else if (!gameState.includes('')) {
        dom.statusDisplay.innerHTML = `The match concluded in a tie!`;
        gameActive = false;
    } else {
        dom.statusDisplay.innerHTML = `It's ${currentPlayer}'s turn`;
    }

    return gameActive;
};

export default checkGameResult;


