import { component$, $ } from "@builder.io/qwik";
import type { PropFunction } from "@builder.io/qwik";
import styles from "./game-board.module.css";

/**
 * PUBLIC_INTERFACE
 * Game board component for TicTacToeMaster.
 * This component displays the 3x3 grid where players place their marks.
 * The board is interactive, allowing players to click on cells to place their marks.
 * @param board - Array representing the current state of the board
 * @param onCellClick - Function to handle cell clicks
 */
export default component$(({ 
  board, 
  onCellClick 
}: { 
  board: string[]; 
  onCellClick: PropFunction<(index: number) => void>; 
}) => {
  return (
    <div class={styles.gameBoard}>
      <div class={styles.boardGrid}>
        {board.map((cell, index) => (
          <div 
            key={index} 
            class={styles.cell}
            onClick$={$(() => onCellClick(index))}
          >
            {cell && <span class={styles.cellContent}>{cell}</span>}
          </div>
        ))}
      </div>
    </div>
  );
});
