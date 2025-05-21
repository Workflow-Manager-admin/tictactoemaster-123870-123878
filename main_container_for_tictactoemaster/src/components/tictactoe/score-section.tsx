import { component$ } from "@builder.io/qwik";
import styles from "./score-section.module.css";

/**
 * PUBLIC_INTERFACE
 * Score section component for TicTacToeMaster.
 * Displays the game scores for both players and draws.
 * @param scoreX - Score for player X
 * @param scoreO - Score for player O
 * @param draws - Number of games that ended in a draw
 */
export default component$(({ 
  scoreX = 0, 
  scoreO = 0, 
  draws = 0 
}: { 
  scoreX: number; 
  scoreO: number; 
  draws: number; 
}) => {
  return (
    <div class={styles.scoreSection}>
      <div class={styles.scoreCard}>
        <div class={styles.playerName}>Player X</div>
        <div class={styles.playerScore}>{scoreX}</div>
      </div>
      
      <div class={styles.scoreCard}>
        <div class={styles.playerName}>Draws</div>
        <div class={styles.playerScore}>{draws}</div>
      </div>
      
      <div class={styles.scoreCard}>
        <div class={styles.playerName}>Player O</div>
        <div class={styles.playerScore}>{scoreO}</div>
      </div>
    </div>
  );
});
