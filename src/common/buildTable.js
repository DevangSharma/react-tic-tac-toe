import Tile from "../GameComponents/Tile";

export function builTable(gameState, whenTilePressed) {
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
}
