import { Piece } from './piece';

export function generateBoard(size) {
  const board = new Array(size);
  let n = 1;

  for (let i = 0; i < size; i++) {
    const row = new Array(size);

    for (let j = 0; j < size; j++) {
      row[j] = new Piece(n, i, j, n === size * size);
      n++;
    }

    board[i] = row;
  }

  return board;
}
