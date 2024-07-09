const dom = {
    statusDisplay: document.getElementById('game-status'),
    container: document.getElementById("board-container"),
    restartButton: document.getElementById('restart-btn'), 
    get cells() {
        return document.querySelectorAll('.cell');
    }
};

export default dom;



