const createGameBoard = () => {
    const gameBoardContainer = document.createElement('div');
    gameBoardContainer.classList.add('game-board');

    for (let i = 0; i < 9; i++) {
        const gameCell = document.createElement('div');
        gameCell.classList.add('cell');
        gameCell.setAttribute('data-index', i.toString());
        gameBoardContainer.appendChild(gameCell);
    }

    return gameBoardContainer;
};

export default createGameBoard;



