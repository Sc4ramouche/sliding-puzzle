import React, { useState, useEffect, useRef } from 'react';
import styles from './Piece.module.css';

export default function Piece({ n, x, y, gap, backgroundURL }) {
  const [size, setSize] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setSize(ref.current.clientWidth);
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.piece} ${styles.background}`}
      style={{
        backgroundImage: `url(${backgroundURL})`,
        backgroundPositionX: `${y * -size}px`,
        backgroundPositionY: `${x * -size}px`,
      }}
    >
      <span>{n}</span>
      <span>{size}</span>
    </div>
  );
}
