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
  
    restartBtn.addEventListener('click', restartGame);
  
    render();
  });
  