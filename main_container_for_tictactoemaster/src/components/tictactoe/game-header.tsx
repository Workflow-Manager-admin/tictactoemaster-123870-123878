import { component$ } from "@builder.io/qwik";
import styles from "./game-header.module.css";

/**
 * PUBLIC_INTERFACE
 * Game header component for TicTacToeMaster.
 * Displays the game title, current player's turn, and game status.
 */
export default component$(({ currentPlayer, gameStatus }: { 
  currentPlayer: string;
  gameStatus: string; 
}) => {
  return (
    <div class={styles.gameHeader}>
      <h1 class={styles.title}>
        TicTacToe<span class={styles.master}>Master</span>
      </h1>
      
      <div class={styles.gameStatus}>
        {gameStatus === 'playing' && (
          <p class={styles.turnIndicator}>
            Player <span class={styles.playerMark}>{currentPlayer}</span>'s turn
          </p>
        )}
        
        {gameStatus === 'won' && (
          <p class={styles.winIndicator}>
            Player <span class={styles.playerMark}>{currentPlayer}</span> wins!
          </p>
        )}
        
        {gameStatus === 'draw' && (
          <p class={styles.drawIndicator}>Game ended in a draw!</p>
        )}
      </div>
    </div>
  );
});
