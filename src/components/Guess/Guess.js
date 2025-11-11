import React from "react";

function Guess({ value }) {
  return (
    <p className="guess">
      <span className="cell">{value[0] ?? ''}</span>
      <span className="cell">{value[1] ?? ''}</span>
      <span className="cell">{value[2] ?? ''}</span>
      <span className="cell">{value[3] ?? ''}</span>
      <span className="cell">{value[4] ?? ''}</span>
    </p>
  );
}

export default Guess;
