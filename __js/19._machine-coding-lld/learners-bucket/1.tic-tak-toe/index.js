// Array to track the board
const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
];

// Options available
const options = document.querySelectorAll("[name='player-option']");

// Board
const boxes = document.querySelectorAll(".box");

// Result area
const result = document.querySelector(".result");

// Players option
let ai = "0";
let human = "X";


// Scores for different outcomes
const scores = {
    X: 10,
    0: -10,
    tie: 0,
};

// Check if three values are equal and not empty
const equals = (a, b, c) => {
    return a == b && b == c && a != "";
};

// Check if there's a winner or a draw
const checkWinner = () => {
    let winner;

    // Horizontal
    for (let i = 0; i < 3; i++) {
        if (equals(board[i][0], board[i][1], board[i][2])) {
            winner = board[i][0];
        }
    }

    // Vertical
    for (let i = 0; i < 3; i++) {
        if (equals(board[0][i], board[1][i], board[2][i])) {
            winner = board[0][i];
        }
    }

    // Diagonal
    if (equals(board[0][0], board[1][1], board[2][2])) {
        winner = board[0][0];
    }
    if (equals(board[2][0], board[1][1], board[0][2])) {
        winner = board[2][0];
    }

    // Check for a tie
    let openSpots = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] == "") {
                openSpots++;
            }
        }
    }
    if (winner == null && openSpots == 0) {
        return "tie";
    } else {
        return winner;
    }
};

// Minimax function to find the best move
const minimax = (board, depth, isMaximizing) => {
    // Check the winner and return the score
    let result = checkWinner();
    if (result != undefined) {
        return scores[result];
    }

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] == "") {
                    board[i][j] = ai;
                    let score = minimax(board, depth + 1, false)
                    board[i][j] = ""
                    bestScore = Math.max(score, bestScore)
                }
            }
        }
        return bestScore
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] == "") {
                    board[i][j] = human;
                    let score = minimax(board, depth + 1, true)
                    board[i][j] = ""
                    bestScore = Math.min(score, bestScore)
                }
            }
        }
        return bestScore
    }
};



// Update player options
const updateSelector = (value) => {
    if (value === "1") {
        human = "X"
        ai = "0"
    } else {
        human = "0"
        ai = "X"
    }
    scores[human] = -10
    scores[ai] = 10
}

// Initialize player options
let start = options[0].value
updateSelector(start)

// Event listener for player options
options.forEach(opt => {
    opt.addEventListener("change", (evt) => {
        const { value } = evt.target
        updateSelector(value)
    })
})

// Bot move
const bestMove = () => {
    let bestScore = -Infinity;
    let move;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] == "") {
                board[i][j] = ai;
                let score = minimax(board, 0, false);
                // console.log(score);
                board[i][j] = "";
                if (score > bestScore) {
                    bestScore = score;
                    move = { i, j };
                }
            }
        }
    }
    return move;
};

// Event listener for clicking on boxes
boxes.forEach((box) => {
    const span = box.children[0].children[0];
    box.addEventListener("click", () => {
        const dataRow = box.getAttribute("data-row");
        const dataColumn = box.getAttribute("data-column");
        if (board[dataRow][dataColumn] === "") {
            span.innerHTML = human;
            board[dataRow][dataColumn] = human;

            // If there are available moves, let the AI make its move
            const botMove = bestMove();
            if (botMove) {
                board[botMove.i][botMove.j] = ai;
                const botPlace = document.querySelector(
                    `[data-row='${botMove.i}'][data-column='${botMove.j}'] span`
                );
                botPlace.innerHTML = ai;
            }

            const outcome = checkWinner();
            if (outcome) {
                if (outcome === "tie") {
                    result.innerHTML = outcome;
                } else {
                    result.innerHTML = `${outcome} wins`;
                }
            }
        }
    });
});
