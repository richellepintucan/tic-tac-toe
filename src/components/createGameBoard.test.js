/**
 * @jest-environment jsdom
 */

import createGameBoard from './createGameBoard';

describe('createGameBoard', () => {
    let gameBoardContainer;

    beforeEach(() => {
        gameBoardContainer = createGameBoard();
    });

    test('should create a game board container', () => {
        expect(gameBoardContainer).toBeInstanceOf(HTMLDivElement);
        expect(gameBoardContainer.classList.contains('game-board')).toBe(true);
    });

    test('should create 9 cells inside the game board container', () => {
        const cells = gameBoardContainer.getElementsByClassName('cell');
        expect(cells.length).toBe(9);
    });

    test('each cell should have a data-index attribute from 0 to 8', () => {
        const cells = gameBoardContainer.getElementsByClassName('cell');
        Array.from(cells).forEach((cell, index) => {
            expect(cell.getAttribute('data-index')).toBe(index.toString());
        });
    });
});
