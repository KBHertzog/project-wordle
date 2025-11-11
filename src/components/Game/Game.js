import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import GuessHistory from "../GuessHistory/GuessHistory";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessHistory, setGuessHistory] = React.useState([]);

  return (
    <>
      <GuessHistory guesses={guessHistory} />
      <GuessInput
        onGuess={(guess) => {
          if (guessHistory.includes(guess)) {
            window.alert("You already guessed that word!");
            return;
          }
          setGuessHistory([...guessHistory, guess]);
        }}
      />
    </>
  );
}

export default Game;
