// Custom useState hook
function useState(initialState) {
    let state = initialState;
  
    const getState = () => state;
  
    const setState = (newState) => {
      state = newState;
      // Trigger re-render
      rerender();
    };
  
    return [getState(), setState];
  }
  
  // Custom useEffect hook
  function useEffect(callback, dependencies) {
    // Initially, run the effect
    callback();
  
    // For simplicity, we won't handle dependencies for now
  }
  
  function useTicTacToe() {
    const [boardState, setBoardState] = useState(Array(9).fill(''));
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [winner, setWinner] = useState(null);
  
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
  
    const handleCellClick = (index) => {
      if (!winner && boardState[index] === '') {
        const newBoardState = [...boardState];
        newBoardState[index] = currentPlayer;
        setBoardState(newBoardState);
        const newWinner = checkWinner();
        if (!newWinner) {
          setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
        }
        setWinner(newWinner);
      }
    };
  
    const restartGame = () => {
      setCurrentPlayer('X');
      setWinner(null);
      setBoardState(Array(9).fill(''));
    };
  
    return { boardState, currentPlayer, winner, handleCellClick, restartGame };
  }
  
  function TicTacToe() {
    const { boardState, currentPlayer, winner, handleCellClick, restartGame } = useTicTacToe();
  
    // Rendering logic here
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<TicTacToe />, document.getElementById('root'));
  });
  