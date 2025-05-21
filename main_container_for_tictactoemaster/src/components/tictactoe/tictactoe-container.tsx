import { component$, useSignal, $, useStore } from "@builder.io/qwik";
import styles from "./tictactoe-container.module.css";
import GameBoard from "./game-board";
import GameHeader from "./game-header";
import ScoreSection from "./score-section";

/**
 * PUBLIC_INTERFACE
 * Main container component for the TicTacToeMaster game.
 * This component serves as the primary application wrapper, setting up the overall layout
 * and organizing the child components that make up the game.
 */
export default component$(() => {
  // Game state management
  const currentPlayer = useSignal('X');
  const gameStatus = useSignal('playing'); // 'playing', 'won', 'draw'
  
  // Board state (3x3 grid represented as array of 9 cells)
  const board = useStore<string[]>(Array(9).fill(''));
  
  // Score tracking
  const scores = useStore({
    X: 0,
    O: 0,
    draws: 0
  });
  
  // Handle cell click
  const handleCellClick = $((index: number) => {
    // Ignore clicks if cell is already filled or game is over
    if (board[index] !== '' || gameStatus.value !== 'playing') {
      return;
    }
    
    // Update the board with current player's mark
    board[index] = currentPlayer.value;
    
    // Check for winner
    // We need to include this logic directly here to avoid scoping issues
    let hasWon = false;
    
    // Winning patterns (rows, columns, diagonals)
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6]            // diagonals
    ];
    
    // Check each winning pattern
    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (
        board[a] !== '' && 
        board[a] === board[b] && 
        board[a] === board[c]
      ) {
        hasWon = true;
        break;
      }
    }
    
    if (hasWon) {
      gameStatus.value = 'won';
      // Increment score for the winner
      if (currentPlayer.value === 'X') {
        scores.X++;
      } else {
        scores.O++;
      }
      return;
    }
    
    // Check for draw
    if (board.every(cell => cell !== '')) {
      gameStatus.value = 'draw';
      scores.draws++;
      return;
    }
    
    // Switch to the other player
    currentPlayer.value = currentPlayer.value === 'X' ? 'O' : 'X';
  });
  
  // Start a new game
  const startNewGame = $(() => {
    // Clear the board
    for (let i = 0; i < board.length; i++) {
      board[i] = '';
    }
    // Reset game status
    gameStatus.value = 'playing';
    // Set X as the starting player
    currentPlayer.value = 'X';
  });
  
  // Reset all scores
  const resetScores = $(() => {
    scores.X = 0;
    scores.O = 0;
    scores.draws = 0;
    startNewGame();
  });
  
  return (
    <div class={styles.tictactoeContainer}>
      <div class={styles.gameWrapper}>
        <GameHeader 
          currentPlayer={currentPlayer.value} 
          gameStatus={gameStatus.value} 
        />
        
        <GameBoard 
          board={board} 
          onCellClick={handleCellClick} 
        />
        
        <ScoreSection 
          scoreX={scores.X}
          scoreO={scores.O}
          draws={scores.draws}
        />
        
        <div class={styles.controls}>
          <button class="button-dark" onClick$={startNewGame}>New Game</button>
          <button onClick$={resetScores}>Reset Score</button>
        </div>
      </div>
    </div>
  );
});
