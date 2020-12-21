import React from 'react';
import styles from './Piece.module.css';

export function Piece({
  n,
  x,
  y,
  gap,
  backgroundURL,
  size,
  onClick,
  isSolved,
}) {
  const isShown = isSolved || !gap;

  return (
    <div
      onClick={isSolved ? null : onClick}
      className={styles.piece}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundImage: `url(${backgroundURL})`,
        backgroundPositionX: `${y * -size}px`,
        backgroundPositionY: `${x * -size}px`,
        opacity: isShown ? 1 : 0,
      }}
    >
      {isSolved ? null : <span className={styles.label}>{n}</span>}
    </div>
  );
}
