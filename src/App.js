import React, { useState } from 'react';

import generateBoard from './lib/board';
import shuffle2D from './lib/shuffle';

import Board from './components/Board';

import './App.css';

function Puzzle() {
  const [boardSize, setBoardSize] = useState(4);
  const [board, setBoard] = useState(shuffle2D(generateBoard(boardSize)));

  const handlePlayAgain = () => {
    setBoard(shuffle2D(generateBoard(boardSize)));
  };

  return (
    <div className="App">
      <Board board={board} />
      <button onClick={handlePlayAgain}>Play again</button>
    </div>
  );
}

export default Puzzle;
