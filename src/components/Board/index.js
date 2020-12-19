import React, { useState, useEffect, useRef, useMemo } from 'react';

import Piece from '../Piece';
import generateImageURL from '../../lib/generateImageURL';
import styles from './Board.module.css';

export default function Board({ board, size }) {
  const [boardSize, setBoardSize] = useState(0);
  const [imageURL, setImageURL] = useState(null);
  const boardRef = useRef(null);

  useEffect(() => {
    setBoardSize(boardRef.current.clientWidth);
  }, []);

  useEffect(() => {
    setImageURL(generateImageURL(boardSize));
  }, [board, boardSize]);

  return (
    <div ref={boardRef} className={styles.board}>
      {board.map((row) => (
        <div className={styles.row}>
          {row.map((piece) => (
            <Piece
              backgroundURL={imageURL}
              size={boardSize / size}
              {...piece}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
