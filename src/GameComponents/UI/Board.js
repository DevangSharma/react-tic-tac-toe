import React, { useEffect, useContext } from "react";
import "../style/style.css";
import { builTable } from "../../common/buildTable";
import { checkForWin } from "../checkers/checkForWin";
import { gameContext } from "./HomePage";

function Board() {
  const { gameState, updateGameState, player, togglePlayer, signOf } =
    useContext(gameContext);

  const whenTilePressed = (id) => {
    if (gameState[id] !== "") {
      return;
    }

    const newGameState = [...gameState];

    newGameState[id] = signOf[player];

    togglePlayer(1 - player);
    updateGameState(newGameState);
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
