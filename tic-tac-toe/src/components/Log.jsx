import React from "react";

const Log = ({ turns }) => {
  return (
    <ol id="log">
      {turns.map((el) => {
        const {
          player,
          square: { row, col },
        } = el;
        return (
          <li key={`${row}, ${col}`}>
            {player} slected {`${row}, ${col}`}
          </li>
        );
      })}
    </ol>
  );
};

export default Log;
