import React, { useContext } from "react";
import { gameContext } from "./HomePage";

function Reset() {
  const {
    updateGameState,
    initialState,
    setGameOver,
    togglePlayer,
    updateHeaderMessage,
  } = useContext(gameContext);

  const resetGame = () => {
    updateGameState(initialState);
    updateHeaderMessage("Turn of X");
    togglePlayer(0);
    setGameOver(false);
  };

  return (
    <div>
      <button className="btn" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
}

export default Reset;
