import React from "react";

const GameOver = ({ isDraw, winner, onReset }) => {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {isDraw ? <p>It's a draw</p> : <p>Winner: {winner}</p>}
      <p>
        <button onClick={onReset}>Rematch!</button>
      </p>
    </div>
  );
};

export default GameOver;
