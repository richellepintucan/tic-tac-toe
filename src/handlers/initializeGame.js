import dom from "../dom.js";
import createGameBoard from "../components/createGameBoard.js";
import createResetButton from "../components/createResetButton.js";
import processCellClick from "./processCellClick.js";
import resetGame from "./resetGame.js";

const initializeGame = () => {
    let gameState = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let gameActive = true;

    const gameBoard = createGameBoard(); 
    const button = createResetButton(); 
    dom.container.appendChild(gameBoard);
    dom.container.appendChild(button);

    const addCellClickListeners = () => {
        dom.cells.forEach(cell => cell.addEventListener('click', (event) => {
            const result = processCellClick(event, gameState, currentPlayer, gameActive); 
            gameActive = result.gameActive;
            currentPlayer = result.currentPlayer;
            if (gameActive) {
                dom.statusDisplay.innerHTML = `It's player ${currentPlayer}'s turn`;
            }
        }));
    };

    addCellClickListeners();

    button.addEventListener('click', () => {
        const restartResult = resetGame(gameState, currentPlayer, gameActive); 
        gameState = restartResult.gameState;
        currentPlayer = restartResult.currentPlayer;
        gameActive = restartResult.gameActive;
        dom.statusDisplay.innerHTML = `It's player ${currentPlayer}'s turn`;
        addCellClickListeners(); 
    });

    dom.statusDisplay.innerHTML = `It's player ${currentPlayer}'s turn`;
};

export default initializeGame;




