import React, { useState, useEffect } from 'react';

import generateBoard from './lib/board';
import shuffle2D from './lib/shuffle';

import Board from './components/Board';

import './App.css';

function App() {
  const [boardSize, setBoardSize] = useState(4);
  const [board, setBoard] = useState(shuffle2D(generateBoard(boardSize)));

  useEffect(() => setBoard(shuffle2D(generateBoard(boardSize))), [boardSize]);

  const handlePlayAgain = () => {
    setBoard(shuffle2D(generateBoard(boardSize)));
  };

  const handleBoardSizeChange = (event) => {
    setBoardSize(event.target.value);
  };

  return (
    <div className="App">
      <Board board={board} size={boardSize} />
      <button onClick={handlePlayAgain}>Play again</button>
      <input
        type="number"
        value={boardSize}
        onChange={handleBoardSizeChange}
        min="3"
        max="9"
      ></input>
    </div>
  );
}

export default App;
