import React from 'react';
import styles from './Piece.module.css';

export default function Piece({ n, x, y, gap, backgroundURL, size }) {
  return (
    <div
      className={`${styles.piece} ${styles.background}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundImage: `url(${backgroundURL})`,
        backgroundPositionX: `${y * -size}px`,
        backgroundPositionY: `${x * -size}px`,
        opacity: gap ? 0 : 1,
      }}
    />
  );
}
