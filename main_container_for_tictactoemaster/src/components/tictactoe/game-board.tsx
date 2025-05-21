import { component$ } from "@builder.io/qwik";
import styles from "./game-board.module.css";

/**
 * PUBLIC_INTERFACE
 * Game board component for TicTacToeMaster.
 * This component displays the 3x3 grid where players place their marks.
 * Currently a placeholder that will be expanded with actual functionality.
 */
export default component$(() => {
  return (
    <div class={styles.gameBoard}>
      <div class={styles.boardGrid}>
        {/* Placeholder cells for the 3x3 grid */}
        {Array(9).fill(null).map((_, index) => (
          <div key={index} class={styles.cell}>
            <span class={styles.cellContent}>{index % 2 === 0 ? 'X' : 'O'}</span>
          </div>
        ))}
      </div>
    </div>
  );
});
