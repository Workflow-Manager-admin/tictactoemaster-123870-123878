import { component$ } from "@builder.io/qwik";
import styles from "./score-section.module.css";

/**
 * PUBLIC_INTERFACE
 * Score section component for TicTacToeMaster.
 * Displays the game scores for both players.
 */
export default component$(() => {
  return (
    <div class={styles.scoreSection}>
      <div class={styles.scoreCard}>
        <div class={styles.playerName}>Player X</div>
        <div class={styles.playerScore}>0</div>
      </div>
      
      <div class={styles.scoreCard}>
        <div class={styles.playerName}>Draws</div>
        <div class={styles.playerScore}>0</div>
      </div>
      
      <div class={styles.scoreCard}>
        <div class={styles.playerName}>Player O</div>
        <div class={styles.playerScore}>0</div>
      </div>
    </div>
  );
});
