import Tile from "../GameComponents/UI/Tile";
import { indexOf } from "./findIndex";

export function builTable(gameState, whenTilePressed) {
  const rows = [];

  for (let row = 0; row < 3; row++) {
    const columns = [];

    for (let column = 0; column < 3; column++) {
      columns.push(
        <td key={column}>
          <Tile
            id={indexOf(row, column)}
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
