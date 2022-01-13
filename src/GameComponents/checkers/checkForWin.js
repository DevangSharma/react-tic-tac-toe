import { indexOf } from "../../common/findIndex";

export function checkForWin(gameState) {
  for (let row = 0; row < 3; row++) {
    if (checkForWinRow(gameState, row)) {
      return true;
    }
  }

  for (let column = 0; column < 3; column++) {
    if (checkForWinColumn(gameState, column)) {
      return true;
    }
  }

  if (
    checkForWinPrincipalDiagonal(gameState) ||
    checkForWinNonPrincipalDiagonal(gameState)
  ) {
    return true;
  }

  return false;
}

function checkForWinRow(gameState, row) {
  if (
    gameState[indexOf(row, 0)] === gameState[indexOf(row, 1)] &&
    gameState[indexOf(row, 0)] === gameState[indexOf(row, 2)] &&
    gameState[indexOf(row, 0)] !== ""
  ) {
    return true;
  }

  return false;
}

function checkForWinColumn(gameState, column) {
  if (
    gameState[indexOf(0, column)] === gameState[indexOf(1, column)] &&
    gameState[indexOf(0, column)] === gameState[indexOf(2, column)] &&
    gameState[indexOf(0, column)] !== ""
  ) {
    return true;
  }

  return false;
}

function checkForWinPrincipalDiagonal(gameState) {
  if (
    gameState[indexOf(0, 0)] === gameState[indexOf(1, 1)] &&
    gameState[indexOf(0, 0)] === gameState[indexOf(2, 2)] &&
    gameState[indexOf(0, 0)] !== ""
  ) {
    return true;
  }

  return false;
}

function checkForWinNonPrincipalDiagonal(gameState) {
  if (
    gameState[indexOf(2, 0)] === gameState[indexOf(1, 1)] &&
    gameState[indexOf(2, 0)] === gameState[indexOf(0, 2)] &&
    gameState[indexOf(2, 0)] !== ""
  ) {
    return true;
  }

  return false;
}
