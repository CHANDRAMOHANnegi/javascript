document.addEventListener('DOMContentLoaded', () => {
  const board = document.getElementById('board');
  const message = document.getElementById('message');
  const restartBtn = document.getElementById('restartBtn');

  let currentPlayer = 'X';
  let boardState = ['', '', '', '', '', '', '', '', ''];
  let winner = null;

  const render = () => {
    board.innerHTML = '';
    boardState.forEach((cell, index) => {
      const cellDiv = document.createElement('div');
      cellDiv.classList.add('cell');
      cellDiv.textContent = cell;
      cellDiv.addEventListener('click', () => handleCellClick(index));
      board.appendChild(cellDiv);
    });
    message.textContent = winner ? `Winner: ${winner}` : `Current player: ${currentPlayer}`;
    if (!winner && currentPlayer === 'O') {
      setTimeout(makeBotMove, 500); // Make bot move after a short delay
    }
  };

  const handleCellClick = (index) => {
    if (!winner && boardState[index] === '') {
      boardState[index] = currentPlayer;
      winner = checkWinner();
      if (!winner) {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
      render();
    }
  };

  const checkWinner = () => {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
        return boardState[a];
      }
    }
    if (boardState.every(cell => cell !== '')) {
      return 'Draw';
    }
    return null;
  };

  const restartGame = () => {
    currentPlayer = 'X';
    winner = null;
    boardState = ['', '', '', '', '', '', '', '', ''];
    render();
  };

  const makeBotMove = () => {
    const bestMove = getBestMove();
    boardState[bestMove.index] = currentPlayer;
    winner = checkWinner();
    if (!winner) {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
    render();
  };

  const getBestMove = () => {
    // Minimax algorithm to determine the best move
    let bestScore = -Infinity;
    let bestMove;
    for (let i = 0; i < boardState.length; i++) {
      if (boardState[i] === '') {
        boardState[i] = currentPlayer;
        let score = minimax(boardState, 0, false);
        boardState[i] = '';
        if (score > bestScore) {
          bestScore = score;
          bestMove = { index: i };
        }
      }
    }
    return bestMove;
  };

  const scores = {
    X: 1,
    O: -1,
    Draw: 0
  };

  const minimax = (board, depth, isMaximizing) => {
    let result = checkWinner();
    if (result !== null) {
      return scores[result];
    } 

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === '') {
          board[i] = 'X';
          let score = minimax(board, depth + 1, false);
          board[i] = '';
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === '') {
          board[i] = 'O';
          let score = minimax(board, depth + 1, true);
          board[i] = '';
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  };

  restartBtn.addEventListener('click', restartGame);

  render();
});
