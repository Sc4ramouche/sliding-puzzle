export default function checkWin(board) {
  return board.every((row, x) =>
    row.every((piece, y) => piece.x === x && piece.y === y)
  );
}
