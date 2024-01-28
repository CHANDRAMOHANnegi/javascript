document.addEventListener("DOMContentLoaded", () => {
  const board = document.getElementById("board")//?.[0];
  const message = document.getElementById("message");
  const restartBtn = document.getElementById("restartBtn");
  const cells = document.getElementsByClassName("cell");

  const state = {
    currentPlayer: "X",
    winner: null,
    boardState: Array.from({ length: 9 }).fill(""),
  };

  [...cells].forEach((cell, idx) => {
    cell.addEventListener("click", () => handleCellClick(idx));
  });

  const render = () => {
    console.log("render", state);
    [...cells].forEach((cell, i) => {
      cell.innerText = state.boardState[i];
    });
    message.innerText = "result " + state.winner;
  };

  const handleCellClick = (idx) => {
    console.log("idx", idx);
    if (!state.winner && state.boardState[idx] === "") {
      state.boardState[idx] = state.currentPlayer;
      state.winner = checkWinner();
      if (!state.winner) {
        state.currentPlayer = state.currentPlayer === "X" ? "0" : "X";
      }
    }
    render();
  };

  const checkWinner = () => {
    const boardState = state.boardState
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columns
      [0, 4, 8],
      [2, 4, 6], // diagonals
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        boardState[a] &&
        boardState[a] == boardState[b] &&
        boardState[a] == boardState[c]
      ) {
        return boardState[a];
      }
    }

    if (boardState.every((cell) => cell !== "")) {
      return "draw";
    }

    return null;
  };

  const restartGame = () => {
    state.boardState = Array.from({ length: 9 }).fill("");
    state.currentPlayer = ""; //Array.from({ length: 9 }).fill("")
    state.winner = null; //Array.from({ length: 9 }).fill("")
    render()
  };

  restartBtn.addEventListener("click", restartGame);
  render();
});
