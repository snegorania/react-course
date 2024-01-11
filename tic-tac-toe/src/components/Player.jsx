import React, { useState } from "react";

const Player = ({ name, symbol, isActive, onPlayerChange }) => {
  const [userName, setUserName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = () => {
    setIsEditing((prev) => !prev);
    if(isEditing) {
        onPlayerChange(userName, symbol);
    }
  };

  const handleChange = ({ target: { value } }) => {
    setUserName(value);
  };

  let playerName = <span className="player-name">{userName}</span>;

  if (isEditing) {
    playerName = (
      <input type="text" required value={userName} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
};

export default Player;
