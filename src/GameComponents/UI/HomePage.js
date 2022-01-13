import React from "react";
import Board from "./Board";
import "../style/style.css";

function HomePage() {
  return (
    <div className="home">
      <h1>Welcome to Tic - Tac - Toe</h1>
      <h1>Turn of X</h1>
      <Board />
      <button className="btn">Reset Game</button>
    </div>
  );
}

export default HomePage;
