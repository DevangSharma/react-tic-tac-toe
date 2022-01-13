import React, { useState, useEffect } from "react";
import "../style/style.css";
import { builTable } from "../../common/buildTable";
import { checkForWin } from "../checkers/checkForWin";

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

    updateGameState(newGameState);
    togglePlayer(1 - player);
  };

  useEffect(() => {
    if (checkForWin(gameState)) {
      alert("You Won");
    }
  }, [gameState]);

  return (
    <div>
      <table className="board">{builTable(gameState, whenTilePressed)}</table>
    </div>
  );
}

export default Board;
