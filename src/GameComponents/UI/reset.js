import React, { useContext } from "react";
import { gameContext } from "./HomePage";

function Reset() {
  const { updateGameState, initialState, setGameOver } =
    useContext(gameContext);

  const resetGame = () => {
    updateGameState(initialState);
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
