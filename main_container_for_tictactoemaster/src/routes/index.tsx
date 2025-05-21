import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import TicTacToeContainer from "../components/tictactoe/tictactoe-container";

export default component$(() => {
  return (
    <TicTacToeContainer />
  );
});

export const head: DocumentHead = {
  title: "TicTacToeMaster",
  meta: [
    {
      name: "description",
      content: "Play Tic Tac Toe online with TicTacToeMaster",
    },
  ],
};
