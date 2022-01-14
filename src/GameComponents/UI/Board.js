import React, { useEffect, useContext } from "react";
import "../style/style.css";
import { builTable } from "../../common/buildTable";
import { checkForWin } from "../checkers/checkForWin";
import { gameContext } from "./HomePage";

function Board() {
  const {
    gameState,
    updateGameState,
    player,
    togglePlayer,
    signOf,
    isGameOver,
    setGameOver,
  } = useContext(gameContext);

  const whenTilePressed = (id) => {
    if (isGameOver || gameState[id] !== "") {
      return;
    }

    const newGameState = [...gameState];

    newGameState[id] = signOf[player];

    togglePlayer(1 - player);
    updateGameState(newGameState);
  };

  useEffect(() => {
    if (checkForWin(gameState)) {
      setGameOver(true);
      alert("You Won");
    } else if (!gameState.includes("")) {
      setGameOver(true);
      alert("Its a tie");
    }
  }, [gameState]);

  return (
    <div>
      <table className="board">{builTable(gameState, whenTilePressed)}</table>
    </div>
  );
}

export default Board;
