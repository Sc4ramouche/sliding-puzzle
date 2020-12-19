import React, { useState, useEffect, useRef } from 'react';

import Piece from '../Piece';
import styles from './Board.module.css';

export default function Board({ board }) {
  const [boardSize, setBoardSize] = useState(0);
  const [imageURL, setImageURL] = useState(0);
  const boardRef = useRef(null);

  useEffect(() => {
    setBoardSize(boardRef.current.clientWidth);
  }, []);

  useEffect(() => {
    setImageURL(`https://picsum.photos/id/2/${boardSize}`);
  }, [board, boardSize]);

  return (
    <div ref={boardRef} className={styles.board}>
      {board.map((row) => (
        <div className={styles.row}>
          {row.map((piece) => (
            <Piece backgroundURL={imageURL} {...piece} />
          ))}
        </div>
      ))}
    </div>
  );
}
