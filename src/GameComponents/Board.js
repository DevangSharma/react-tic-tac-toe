import React, { useState } from "react";
import Tile from "./Tile";
import "./style.css";

function Board() {
  const initialState = ["", "", "", "", "", "", "", "", ""];
  const [gameState, updateGameState] = useState(initialState);

  const builTable = () => {
    const rows = [];

    for (let row = 0; row < 3; row++) {
      const columns = [];

      for (let column = 0; column < 3; column++) {
        columns.push(
          <td key={column}>
            <Tile
              id={row * 3 + column}
              gameState={gameState}
              whenTilePressed={whenTilePressed}
            />
          </td>
        );
      }

      rows.push(<tr key={row}>{columns}</tr>);
    }

    return <tbody>{rows}</tbody>;
  };

  const whenTilePressed = (id) => {
    if (gameState[id] !== "") {
      return;
    }

    console.log(id);
    const newGameState = [...gameState];

    newGameState[id] = "X";

    updateGameState(newGameState);
  };

  return (
    <div>
      <table className="board">{builTable()}</table>
    </div>
  );
}

export default Board;
