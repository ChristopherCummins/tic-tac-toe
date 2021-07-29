const gameBoard = (() => {
    let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    const cell = document.getElementsByClassName("cell");
    const makeButtons = () => {
        for (i = 0; i < cell.length; i++) {
            cell[i].addEventListener("click", e => {
                const square = e.target;
                const squareNum = square.dataset.cell;
                board[squareNum] = "X";
                fillCells();
            });
        }
    }
    const markCell = () => {
        console.log("Hello");
    }

    const fillCells = () => {
        for (i = 0; i < cell.length; i++) {
            cell[i].textContent = board[i];
        }
    }

    return {
        board,
        makeButtons,
        markCell,
        fillCells,
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
        gameBoard.fillCells();
    }

    const setPlayer = () => {
        player = playerOne;
    }

    return {
        clearBoard,
        showTurn,
        startGame,
        setPlayer,
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