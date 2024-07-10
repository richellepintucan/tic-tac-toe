/**
 * @jest-environment jsdom
 */

import createResetButton from './createResetButton';

describe('createResetButton', () => {
    let button;

    beforeEach(() => {
        button = createResetButton();
    });

    test('should create a button element', () => {
        expect(button).toBeInstanceOf(HTMLButtonElement);
    });

    test('should have the correct id attribute', () => {
        expect(button.getAttribute('id')).toBe('restart-btn');
    });

    test('should have the correct text content', () => {
        expect(button.textContent).toBe('Restart Game');
    });
});
