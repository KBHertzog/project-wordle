import React from "react";

function GuessInput({ onGuess, isGameOver }) {
  const [currentGuess, setCurrentGuess] = React.useState("");
  return (
    <form
      class="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        onGuess(currentGuess);
        setCurrentGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={currentGuess}
        onChange={(e) => setCurrentGuess(e.target.value?.toUpperCase() || "")}
        pattern="\w{5,5}"
        disabled={isGameOver}
      />
    </form>
  );
}

export default GuessInput;
