import React from "react";
import "./style.css";
function Tile({ id, gameState, whenTilePressed }) {
  return (
    <button
      className="tile"
      onClick={() => {
        whenTilePressed(id);
      }}
    >
      {id}
    </button>
  );
}

export default Tile;
