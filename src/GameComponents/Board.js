import React, { useState } from "react";
import "./style.css";
import { builTable } from "../common/buildTable";

function Board() {
  const initialState = ["", "", "", "", "", "", "", "", ""];
  const signOf = ["X", "O"];
  const [gameState, updateGameState] = useState(initialState);
  const [player, togglePlayer] = useState(0);

  const whenTilePressed = (id) => {
    if (gameState[id] !== "") {
      return;
    }

    const newGameState = [...gameState];

    newGameState[id] = signOf[player];

    console.log(newGameState[id]);

    updateGameState(newGameState);
    togglePlayer(1 - player);
  };

  return (
    <div>
      <table className="board">{builTable(gameState, whenTilePressed)}</table>
    </div>
  );
}

export default Board;
