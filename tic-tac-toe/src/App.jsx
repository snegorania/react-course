import React, { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { setActivePlayer, checkForWinner, culcGameBoard } from "./utils/utils";
import GameOver from "./components/GameOver";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });

  let activePlayer = setActivePlayer(gameTurns);
  let gameBoard = culcGameBoard(gameTurns);
  let winner = checkForWinner(players, gameBoard);

  const handleSelectSquare = (row, col) => {
    setGameTurns((prev) => {
      let currentPlayer = setActivePlayer(prev);
      return [{ square: { row, col }, player: currentPlayer }, ...prev];
    });
  };

  const handleReset = () => {
    setGameTurns([]);
  };

  const handlePlayerChange = (name, symbol) => {
    setPlayers((prev) => {
      return {
        ...prev,
        [symbol]: name,
      };
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={players["X"]}
            symbol="X"
            isActive={activePlayer === "X"}
            onPlayerChange={handlePlayerChange}
          />
          <Player
            name={players["O"]}
            symbol="O"
            isActive={activePlayer === "O"}
            onPlayerChange={handlePlayerChange}
          />
        </ol>
        {(winner || gameTurns.length >= 9) && (
          <GameOver
            winner={winner}
            isDraw={!winner && gameTurns.length >= 9}
            onReset={handleReset}
          />
        )}
        <GameBoard onSelect={handleSelectSquare} gameBoard={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
