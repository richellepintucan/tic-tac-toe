import placeMarker from "./placeMarker.js";
import checkGameResult from "./checkGameResult.js";
import switchPlayer from "./switchPlayer.js";
import dom from "../dom.js";

const processCellClick = (event, gameState, currentPlayer, gameActive) => {
    const clickedCell = event.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

    if (gameState[clickedCellIndex] || !gameActive) return { gameActive, currentPlayer };

    placeMarker(clickedCell, clickedCellIndex, gameState, currentPlayer);
    gameActive = checkGameResult(gameState, currentPlayer, gameActive);

    if (gameActive) {
        currentPlayer = switchPlayer(currentPlayer);
    }

    return { gameActive, currentPlayer };
};

export default processCellClick;






