let winnerDisplay = document.getElementById("winner")
const gameBoard = (() => {
    let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    const cell = document.getElementsByClassName("cell");
    const makeButtons = () => {
        for (i = 0; i < cell.length; i++) {
            cell[i].addEventListener("click", e => {
                const square = e.target;
                const squareNum = square.dataset.cell;
                if(board[squareNum] === " ") {
                    board[squareNum] = displayController.setPlayer().marker;
                    updateCells();
                    displayController.checkTie();
                    displayController.checkWinner();
                } 
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
        let startButton = document.getElementById("startButton");
        startButton.setAttribute("hidden", true);
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
            turnDisplay.textContent = "It's " + playerTwo.name + "'s Turn"
            return player;
        } else {
            player = playerTwo;
            turnDisplay.textContent = "It's " + playerOne.name + "'s Turn"
            return player;
        }
    }

    const checkTie = () => {
        if(count === 9) {
            winnerDisplay.textContent = "It's a tie!";
            winnerDisplay.removeAttribute("hidden");
        }
    }

    const checkWinner = () => {
        let winnerDisplay = document.getElementById("winner");
        if (gameBoard.board[0] === "X" && gameBoard.board[1] === "X" && gameBoard.board[2] === "X") {
            winnerDisplay.textContent = "Player One wins!";
            winnerDisplay.removeAttribute("hidden");
        } else if (gameBoard.board[3] === "X" && gameBoard.board[4] === "X" && gameBoard.board[5] === "X") {
            winnerDisplay.textContent = "Player One wins!";
            winnerDisplay.removeAttribute("hidden");
        } else if (gameBoard.board[6] === "X" && gameBoard.board[7] === "X" && gameBoard.board[8] === "X") {
            winnerDisplay.textContent = "Player One wins!";
            winnerDisplay.removeAttribute("hidden");
        } else if (gameBoard.board[0] === "X" && gameBoard.board[3] === "X" && gameBoard.board[6] === "X") {
            winnerDisplay.textContent = "Player One wins!";
            winnerDisplay.removeAttribute("hidden");
        } else if (gameBoard.board[1] === "X" && gameBoard.board[4] === "X" && gameBoard.board[7] === "X") {
            winnerDisplay.textContent = "Player One wins!";
            winnerDisplay.removeAttribute("hidden");
        } else if (gameBoard.board[2] === "X" && gameBoard.board[5] === "X" && gameBoard.board[8] === "X") {
            winnerDisplay.textContent = "Player One wins!";
            winnerDisplay.removeAttribute("hidden");
        } else if (gameBoard.board[0] === "X" && gameBoard.board[4] === "X" && gameBoard.board[8] === "X") {
            winnerDisplay.textContent = "Player One wins!";
            winnerDisplay.removeAttribute("hidden");
        } else if (gameBoard.board[2] === "X" && gameBoard.board[4] === "X" && gameBoard.board[6] === "X") {
            winnerDisplay.textContent = "Player One wins!";
            winnerDisplay.removeAttribute("hidden");
        }
        if (gameBoard.board[0] === "O" && gameBoard.board[1] === "O" && gameBoard.board[2] === "O") {
            winnerDisplay.textContent = "Player Two wins!";
            winnerDisplay.removeAttribute("hidden");
        } else if (gameBoard.board[3] === "O" && gameBoard.board[4] === "O" && gameBoard.board[5] === "O") {
            winnerDisplay.textContent = "Player Two wins!";
            winnerDisplay.removeAttribute("hidden");
        } else if (gameBoard.board[6] === "O" && gameBoard.board[7] === "O" && gameBoard.board[8] === "O") {
            winnerDisplay.textContent = "Player Two wins!";
            winnerDisplay.removeAttribute("hidden");
        } else if (gameBoard.board[0] === "O" && gameBoard.board[3] === "O" && gameBoard.board[6] === "O") {
            winnerDisplay.textContent = "Player Two wins!";
            winnerDisplay.removeAttribute("hidden");
        } else if (gameBoard.board[1] === "O" && gameBoard.board[4] === "O" && gameBoard.board[7] === "O") {
            winnerDisplay.textContent = "Player Two wins!";
            winnerDisplay.removeAttribute("hidden");
        } else if (gameBoard.board[2] === "O" && gameBoard.board[5] === "O" && gameBoard.board[8] === "O") {
            winnerDisplay.textContent = "Player Two wins!";
            winnerDisplay.removeAttribute("hidden");
        } else if (gameBoard.board[0] === "O" && gameBoard.board[4] === "O" && gameBoard.board[8] === "O") {
            winnerDisplay.textContent = "Player Two wins!";
            winnerDisplay.removeAttribute("hidden");
        } else if (gameBoard.board[2] === "O" && gameBoard.board[4] === "O" && gameBoard.board[6] === "O") {
            winnerDisplay.textContent = "Player Two wins!";
            winnerDisplay.removeAttribute("hidden");
        } 
    }


    return {
        clearBoard,
        showTurn,
        startGame,
        setPlayer,
        turnCounter,
        checkWinner,
        checkTie,
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