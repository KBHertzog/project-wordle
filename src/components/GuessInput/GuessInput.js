import React from "react";

const alphabet = [..."QWERTYUIOPASDFGHJKLZXCVBNM"];

function GuessInput({ onGuess, isGameOver, answer }) {
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
      <div className="letter-buttons-wrapper">
        {alphabet.map((letter) => {
          const letterInAnswer = answer.includes(letter);
          return (
            <button
              key={letter}
              className="letter-button"
              type="button"
              onClick={() => {
                if (currentGuess.length < 5) {
                  setCurrentGuess(currentGuess + letter);
                  if (currentGuess.length + 1 === 5) {
                    onGuess(currentGuess + letter);
                    setCurrentGuess("");
                  }
                }
              }}
              disabled={isGameOver}
            >
              {letter}
            </button>
          );
        })}
      </div>
    </form>
  );
}

export default GuessInput;
