import { component$, useSignal } from "@builder.io/qwik";
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
  // Game state will be managed here
  const currentPlayer = useSignal('X');
  const gameStatus = useSignal('playing'); // 'playing', 'won', 'draw'
  
  return (
    <div class={styles.tictactoeContainer}>
      <div class={styles.gameWrapper}>
        <GameHeader 
          currentPlayer={currentPlayer.value} 
          gameStatus={gameStatus.value} 
        />
        
        <GameBoard />
        
        <ScoreSection />
        
        <div class={styles.controls}>
          <button class="button-dark">New Game</button>
          <button>Reset Score</button>
        </div>
      </div>
    </div>
  );
});
