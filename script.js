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

    const disableButtons = () => {
        for (i = 0; i < board.length; i++) {
            if (gameBoard.board[i] === " ") {
                gameBoard.board[i] = "_"
            }
        }
    }

    const clearCells = () => {
        for (i = 0; i < board.length; i++) {
            if (gameBoard.board[i] != " ") {
                gameBoard.board[i] = " "
            }
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
        disableButtons,
        clearCells,
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
        if (turnCounter() % 2 === 0 ) {
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
            turnDisplay.textContent = "It's a tie!";
            gameBoard.disableButtons();
            showReplaybutton();
        }
    }

    const showReplaybutton = () => {
        let replayButton = document.getElementById("replayButton");
        replayButton.removeAttribute("hidden");
    }

    const replayGame = () => {
        gameBoard.clearCells();
        gameBoard.updateCells();
        setPlayer();
        count = 0;
        replayButton.setAttribute("hidden", true);

    }

    const checkWinner = () => {
        if (gameBoard.board[0] === "X" && gameBoard.board[1] === "X" && gameBoard.board[2] === "X") {
            turnDisplay.textContent = "Player One wins!";
            gameBoard.disableButtons();
            showReplaybutton();
        } else if (gameBoard.board[3] === "X" && gameBoard.board[4] === "X" && gameBoard.board[5] === "X") {
            turnDisplay.textContent = "Player One wins!";
            gameBoard.disableButtons();
            showReplaybutton();
        } else if (gameBoard.board[6] === "X" && gameBoard.board[7] === "X" && gameBoard.board[8] === "X") {
            turnDisplay.textContent = "Player One wins!";
            gameBoard.disableButtons();
            showReplaybutton();
        } else if (gameBoard.board[0] === "X" && gameBoard.board[3] === "X" && gameBoard.board[6] === "X") {
            turnDisplay.textContent = "Player One wins!";
            gameBoard.disableButtons();
            showReplaybutton();
        } else if (gameBoard.board[1] === "X" && gameBoard.board[4] === "X" && gameBoard.board[7] === "X") {
            turnDisplay.textContent = "Player One wins!";
            gameBoard.disableButtons();
            showReplaybutton();
        } else if (gameBoard.board[2] === "X" && gameBoard.board[5] === "X" && gameBoard.board[8] === "X") {
            turnDisplay.textContent = "Player One wins!";
            gameBoard.disableButtons();
            showReplaybutton();
        } else if (gameBoard.board[0] === "X" && gameBoard.board[4] === "X" && gameBoard.board[8] === "X") {
            turnDisplay.textContent = "Player One wins!";
            gameBoard.disableButtons();
            showReplaybutton();
        } else if (gameBoard.board[2] === "X" && gameBoard.board[4] === "X" && gameBoard.board[6] === "X") {
            turnDisplay.textContent = "Player One wins!";
            gameBoard.disableButtons();
            showReplaybutton();
        }
        if (gameBoard.board[0] === "O" && gameBoard.board[1] === "O" && gameBoard.board[2] === "O") {
            turnDisplay.textContent = "Player Two wins!";
            gameBoard.disableButtons();
            showReplaybutton();
        } else if (gameBoard.board[3] === "O" && gameBoard.board[4] === "O" && gameBoard.board[5] === "O") {
            turnDisplay.textContent = "Player Two wins!";
            gameBoard.disableButtons();
            showReplaybutton();
        } else if (gameBoard.board[6] === "O" && gameBoard.board[7] === "O" && gameBoard.board[8] === "O") {
            turnDisplay.textContent = "Player Two wins!";
            gameBoard.disableButtons();
            showReplaybutton();
        } else if (gameBoard.board[0] === "O" && gameBoard.board[3] === "O" && gameBoard.board[6] === "O") {
            turnDisplay.textContent = "Player Two wins!";
            gameBoard.disableButtons();
            showReplaybutton();
        } else if (gameBoard.board[1] === "O" && gameBoard.board[4] === "O" && gameBoard.board[7] === "O") {
            turnDisplay.textContent = "Player Two wins!";
            gameBoard.disableButtons();
            showReplaybutton();
        } else if (gameBoard.board[2] === "O" && gameBoard.board[5] === "O" && gameBoard.board[8] === "O") {
            turnDisplay.textContent = "Player Two wins!";
            gameBoard.disableButtons();
            showReplaybutton();
        } else if (gameBoard.board[0] === "O" && gameBoard.board[4] === "O" && gameBoard.board[8] === "O") {
            turnDisplay.textContent = "Player Two wins!";
            gameBoard.disableButtons();
            showReplaybutton();
        } else if (gameBoard.board[2] === "O" && gameBoard.board[4] === "O" && gameBoard.board[6] === "O") {
            turnDisplay.textContent = "Player Two wins!";
            gameBoard.disableButtons();
            showReplaybutton();
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
        showReplaybutton,
        replayGame,
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