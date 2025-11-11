import React from "react";

function GameStateBanner({ hasWon, answer }) {
  return (
    <div className={`${hasWon ? "happy" : "sad"} banner`}>
      {hasWon ? (
        <p>
          <strong>Congratulations!</strong> Got it in {' '}
          <strong>3 guesses</strong>.
        </p>
      ) : (
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      )}
    </div>
  );
}

export default GameStateBanner;
