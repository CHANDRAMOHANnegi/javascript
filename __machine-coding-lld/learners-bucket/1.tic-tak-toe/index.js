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
const result = document.querySelectorAll(".result");

// Players option
let ai = "0";
let human = "X";

boxes.forEach((box) => {
    // Get the grand child span
    const span = box.children[0].children[0];
    // console.log(span);
    box.addEventListener("click", () => {
        // Get which grid is clicked
        const dataRow = box.getAttribute("data-row");
        const dataColumn = box.getAttribute("data-column");
        // console.log(dataColumn, dataRow);

        // If the Grid is not marked
        if (board[dataRow][dataColumn] === "") {
            // Player move
            span.innerHTML = human;
            board[dataRow][dataColumn] = human;
        }
    });
});

const scores = {
    X: 10,
    0: -10,
    tie: 0,
};


// Bot move
const bestMove = () => {
    // AI to mae its turn
    let bestScore = -Infinity;
    let move;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] == "") {
                board[i][j] = ai;
                let score = minimax(board, 0, false);
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

// Calculate where next move should take place
const minimax = (board, depth, isMaximizing) => {
    // Check the winner and return the score
    let result = checkWinner();
    if (result !== null) {
        return scores[result];
    }

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                // Is the spot available
                if (board[i][j] == "") {
                    board[i][j] = ai;
                    let;
                }
            }
        }
    }
};

const equals = (a, b, c) => {
    return a == b && b == c && a != "";
};

const checkWinner = () => {
    let winner;

    // horizontal
    for (let i = 0; i < 3; i++) {
        if (equals(board[i][0], board[i][1], board[1], [2])) {
            winner = board[i][0];
        }
    }

    // vertical
    for (let i = 0; i < 3; i++) {
        if (equals(board[0][i], board[1][i], board[2], [i])) {
            winner = board[0][i];
        }
    }

    // Diagonal

    if (equals(board[0][0], board[1][1], board[2], [2])) {
        winner = board[0][0];
    }
    if (equals(board[2][0], board[1][1], board[0], [2])) {
        winner = board[2][0];
    }

    // Are still moves left
    let openSpots = 0;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] == "") {
                openSpots++;
            }
        }
    }

    // return winner
    if (winner == null && openSpots == 0) {
        return "tie";
    } else {
        return winner;
    }
};


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


let start = options[0].value
updateSelector(start)

options.forEach(opt => {
    opt.addEventListener("change", () => {
        const { value } = opt.target
        updateSelector(value)
    })
})