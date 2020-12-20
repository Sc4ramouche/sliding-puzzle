import React from 'react';
import styles from './Piece.module.css';

export default function Piece({
  n,
  x,
  y,
  gap,
  backgroundURL,
  size,
  onClick,
  isSolved,
}) {
  const isShown = isSolved ? 1 : gap ? 0 : 1;
  return (
    <div
      onClick={onClick}
      className={`${styles.piece} ${styles.background}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundImage: `url(${backgroundURL})`,
        backgroundPositionX: `${y * -size}px`,
        backgroundPositionY: `${x * -size}px`,
        opacity: isShown,
      }}
    >
      {isSolved ? null : <span>{n}</span>}
    </div>
  );
}
