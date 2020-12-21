import React, { useCallback, forwardRef } from 'react';

import { Piece } from '../Piece';
import styles from './Board.module.css';

function BoardComponent({ board, size, imgURL, onPieceClick, isSolved }, ref) {
  const generateHandler = useCallback(
    (i, j) => {
      // top
      if (board[i - 1] && board[i - 1][j].gap) {
        return () => onPieceClick(i, j, i - 1, j);
      }
      // right
      if (board[i][j + 1] && board[i][j + 1].gap) {
        return () => onPieceClick(i, j, i, j + 1);
      }
      // bottom
      if (board[i + 1] && board[i + 1][j].gap) {
        return () => onPieceClick(i, j, i + 1, j);
      }
      // left
      if (board[i][j - 1] && board[i][j - 1].gap) {
        return () => onPieceClick(i, j, i, j - 1);
      }

      return () => {};
    },
    [board, onPieceClick]
  );

  const boardWidth = ref.current?.clientWidth;

  return (
    <div ref={ref} className={styles.board}>
      {board.map((row, i) => (
        <div
          className={styles.row}
          key={row.reduce((acc, item) => (acc += item.id), '')}
        >
          {row.map((piece, j) => (
            <Piece
              key={piece.id}
              onClick={generateHandler(i, j)}
              backgroundURL={imgURL}
              size={boardWidth / size}
              isSolved={isSolved}
              {...piece}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export const Board = forwardRef(BoardComponent);
