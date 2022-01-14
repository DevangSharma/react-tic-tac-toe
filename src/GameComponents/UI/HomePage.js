import React, { useState } from "react";
import Board from "./Board";
import "../style/style.css";
import Reset from "./reset";
import Header from "./header";

export const gameContext = React.createContext();

function HomePage() {
  const initialState = ["", "", "", "", "", "", "", "", ""];
  const signOf = ["X", "O"];
  const [gameState, updateGameState] = useState(initialState);
  const [player, togglePlayer] = useState(0);
  const [isGameOver, setGameOver] = useState(false);

  return (
    <div className="home">
      <gameContext.Provider
        value={{
          gameState: gameState,
          updateGameState: updateGameState,
          player: player,
          togglePlayer: togglePlayer,
          signOf: signOf,
          initialState: initialState,
          isGameOver: isGameOver,
          setGameOver: setGameOver,
        }}
      >
        <Header />
        <Board />
        <Reset />
      </gameContext.Provider>
    </div>
  );
}

export default HomePage;
