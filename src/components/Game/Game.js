import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import GuessHistory from "../GuessHistory/GuessHistory";
import GameStateBanner from "../GameStateBanner/GameStateBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessHistory, setGuessHistory] = React.useState([]);

  const hasWon = guessHistory.includes(answer);
  const isGameOver = guessHistory.length >= 6 || hasWon;
  return (
    <>
      {isGameOver && <GameStateBanner hasWon={hasWon} answer={answer}/>}
      <GuessHistory guesses={guessHistory} answer={answer} />
      <GuessInput
        onGuess={(guess) => {
          if (guessHistory.includes(guess)) {
            window.alert("You already guessed that word!");
            return;
          }
          setGuessHistory([...guessHistory, guess]);
        }}
        isGameOver={isGameOver}
      />
    </>
  );
}

export default Game;
