import React from "react";

import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import Guess from "../Guess";

function GuessHistory({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
        const result = checkGuess(guesses[index], answer) ?? [];
        return <Guess key={index} value={result} />;
      })}
    </div>
  );
}

export default GuessHistory;
