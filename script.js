const gameBoard = (() => {
    let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    const cell = document.getElementsByClassName("cell");
    const makeButtons = () => {
        for (i = 0; i < cell.length; i++) {
            cell[i].addEventListener("click", e => {
                const square = e.target;
                const squareNum = square.dataset.cell;
                board[squareNum] = displayController.setPlayer().marker;
                updateCells();
            });
        }
    }

    const updateCells = () => {
        for (i = 0; i < cell.length; i++) {
            cell[i].textContent = board[i];
        }
    }

    return {
        board,
        makeButtons,
        updateCells,
    };
})();

const displayController = (() => {
    let cell = document.getElementsByClassName("cell");
    const clearBoard = () => {
        for (i = 0; i < cell.length; i++) {
            cell[i].textContent = " "
        }
    }
    let turnDisplay = document.getElementById("turn");
    const showTurn = () => {
        turnDisplay.removeAttribute("hidden");
    }

    const startGame = () => {
        showTurn();
        gameBoard.makeButtons();
        gameBoard.updateCells();
    }

    let count = 0
    const turnCounter = () => {
        return count++;
    }

    const setPlayer = () => {
        if (turnCounter() % 2 === 0) {
            player = playerOne;
            turnDisplay.textContent = "It's " + playerTwo.name + "'s Move"
            return player;
        } else {
            player = playerTwo;
            turnDisplay.textContent = "It's " + playerOne.name + "'s Move"
            return player;
        }
    }

    return {
        clearBoard,
        showTurn,
        startGame,
        setPlayer,
        turnCounter,
        count,
    }

})();


const playerFactory = (name, marker) => {

    return {
        name, 
        marker,
    };
}

const playerOne = playerFactory("Player One", "X");
const playerTwo = playerFactory("Player Two", "O");