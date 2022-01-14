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
    updateHeaderMessage,
  } = useContext(gameContext);

  const whenTilePressed = async (id) => {
    if (isGameOver || gameState[id] !== "") {
      return;
    }

    const newGameState = [...gameState];

    newGameState[id] = signOf[player];

    await togglePlayer(1 - player);
    updateHeaderMessage(`Turn of ${signOf[1 - player]}`);
    updateGameState(newGameState);
  };

  useEffect(async () => {
    if (checkForWin(gameState)) {
      setGameOver(true);
      togglePlayer(1 - player);
      updateHeaderMessage(`"${signOf[1 - player]}" won this match`);
    } else if (!gameState.includes("")) {
      setGameOver(true);
      togglePlayer(2);
      updateHeaderMessage("Its a Tie");
    }
  }, [gameState]);

  return (
    <div>
      <table className="board">{builTable(gameState, whenTilePressed)}</table>
    </div>
  );
}

export default Board;
