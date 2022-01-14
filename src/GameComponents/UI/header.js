import React, { useContext } from "react";
import { gameContext } from "./HomePage";

function Header() {
  const { player, signOf, headerMessage } = useContext(gameContext);

  return (
    <div className="header">
      <h1>Welcome to Tic - Tac - Toe</h1>
      <h1 className={`player-${signOf[player]}`}>{headerMessage}</h1>
    </div>
  );
}

export default Header;
