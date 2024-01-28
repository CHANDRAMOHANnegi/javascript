class TicTacToe {
  constructor() {
    this.board = document.getElementById("board");
    this.message = document.getElementById("message");
    this.restartBtn = document.getElementById("restartBtn");
    this.currentPlayer = "X";
    this.boardState = ["", "", "", "", "", "", "", "", ""];
    this.winner = null;
    this.init();
  }

  init() {
    this.render();
    this.board.addEventListener("click", (event) =>
      this.handleCellClick(event)
    );
    this.restartBtn.addEventListener("click", () => this.restartGame());
  }

  render() {
    [...document.querySelectorAll('.cell')].forEach((cell, i) => {
      cell.innerText = this.boardState[i];
    });
    this.message.textContent = this.winner
      ? `Winner: ${this.winner}`
      : `Current player: ${this.currentPlayer}`;
  }

  handleCellClick(event) {
    // console.log(event);
    // console.log(this);
    /**
     * 
     * this is awesome,
     * we get to know the cell clicked using event.target
     * 
     * then we can find index of that in children of board
     * 
     * */ 
    const cellIndex = Array.from(this.board.children).indexOf(event.target);
    if (!this.winner && this.boardState[cellIndex] === "") {
      this.boardState[cellIndex] = this.currentPlayer;
      this.winner = this.checkWinner();
      if (!this.winner) {
        this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
      }
      this.render();
    }
  }

  checkWinner() {
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
        this.boardState[a] &&
        this.boardState[a] === this.boardState[b] &&
        this.boardState[a] === this.boardState[c]
      ) {
        return this.boardState[a];
      }
    }
    if (this.boardState.every((cell) => cell !== "")) {
      return "Draw";
    }
    return null;
  }

  restartGame() {
    this.currentPlayer = "X";
    this.winner = null;
    this.boardState = ["", "", "", "", "", "", "", "", ""];
    this.render();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new TicTacToe();
});
