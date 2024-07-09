import dom from "../dom.js";

const placeMarker = (clickedCell, clickedCellIndex, gameState, currentPlayer) => {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
    clickedCell.style.color = currentPlayer === 'X' ? 'rgb(245, 65, 4)' : 'rgb(4, 247, 166)';
};

export default placeMarker;

