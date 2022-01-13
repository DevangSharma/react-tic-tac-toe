import React from "react";
import "../style/style.css";
function Tile({ id, gameState, whenTilePressed }) {
  return (
    <button
      className="tile"
      onClick={() => {
        whenTilePressed(id);
      }}
    >
      {gameState[id]}
    </button>
  );
}

export default Tile;
