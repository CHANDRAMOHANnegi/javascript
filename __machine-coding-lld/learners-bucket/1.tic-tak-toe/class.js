class TicTacToe {
  constructor() {
    this.board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    this.options = document.querySelectorAll("[name='player-option']");
    this.boxes = document.querySelectorAll(".box");
    this.result = document.querySelector(".result");
    this.ai = "0";
    this.human = "X";
    this.scores = {
      X: 10,
      0: -10,
      tie: 0,
    };
    this.setup();
  }

  equals(a, b, c) {
    return a == b && b == c && a != "";
  }

  checkWinner() {
    let winner;
    for (let i = 0; i < 3; i++) {
      if (this.equals(this.board[i][0], this.board[i][1], this.board[i][2])) {
        winner = this.board[i][0];
      }
    }
    for (let i = 0; i < 3; i++) {
      if (this.equals(this.board[0][i], this.board[1][i], this.board[2][i])) {
        winner = this.board[0][i];
      }
    }
    if (this.equals(this.board[0][0], this.board[1][1], this.board[2][2])) {
      winner = this.board[0][0];
    }
    if (this.equals(this.board[2][0], this.board[1][1], this.board[0][2])) {
      winner = this.board[2][0];
    }
    let openSpots = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.board[i][j] == "") {
          openSpots++;
        }
      }
    }
    if (winner == null && openSpots == 0) {
      return "tie";
    } else {
      return winner;
    }
  }

  minimax(board, depth, isMaximizing) {
    let result = this.checkWinner();
    if (result != undefined) {
      return this.scores[result];
    }
    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[i][j] == "") {
            board[i][j] = this.ai;
            let score = this.minimax(board, depth + 1, false);
            board[i][j] = "";
            bestScore = Math.max(score, bestScore);
          }
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[i][j] == "") {
            board[i][j] = this.human;
            let score = this.minimax(board, depth + 1, true);
            board[i][j] = "";
            bestScore = Math.min(score, bestScore);
          }
        }
      }
      return bestScore;
    }
  }

  updateSelector(value) {
    if (value === "1") {
      this.human = "X";
      this.ai = "0";
    } else {
      this.human = "0";
      this.ai = "X";
    }
    this.scores[this.human] = -10;
    this.scores[this.ai] = 10;
  }

  setup() {
    let self = this;
    let start = this.options[0].value;
    this.updateSelector(start);

    this.options.forEach((opt) => {
      opt.addEventListener("change", (evt) => {
        const { value } = evt.target;
        self.updateSelector(value);
      });
    });

    this.boxes.forEach((box) => {
      const span = box.children[0].children[0];

      box.addEventListener("click", () => {
        const dataRow = box.getAttribute("data-row");
        const dataColumn = box.getAttribute("data-column");
        if (self.board[dataRow][dataColumn] === "") {
          span.innerHTML = self.human;
          self.board[dataRow][dataColumn] = self.human;

          const botMove = self.bestMove();
          if (botMove) {
            self.board[botMove.i][botMove.j] = self.ai;
            const botPlace = document.querySelector(
              `[data-row='${botMove.i}'][data-column='${botMove.j}'] span`
            );
            botPlace.innerHTML = self.ai;
          }

          const outcome = self.checkWinner();
          if (outcome) {
            if (outcome === "tie") {
              self.result.innerHTML = outcome;
            } else {
              self.result.innerHTML = `${outcome} wins`;
            }
          }
        }
      });
    });
  }

  bestMove() {
    let bestScore = -Infinity;
    let move;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.board[i][j] == "") {
          this.board[i][j] = this.ai;
          let score = this.minimax(this.board, 0, false);
          this.board[i][j] = "";
          if (score > bestScore) {
            bestScore = score;
            move = { i, j };
          }
        }
      }
    }
    return move;
  }
}

// Create an instance of the TicTacToe class
const game = new TicTacToe();
