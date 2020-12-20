import React, { useState, useEffect, useRef } from 'react';

import generateBoard from './lib/board';
import shuffle2D from './lib/shuffle';
import generateImageURL from './lib/generateImageURL';
import checkIfSolved from './lib/checkIfSolved';

import Board from './components/Board';

import './App.css';

function App() {
  const [boardSize, setBoardSize] = useState(2);
  const [imageURL, setImageURL] = useState(null);
  const [board, setBoard] = useState(shuffle2D(generateBoard(boardSize)));
  const [pixels, setPixels] = useState(0);
  const [isSolved, setIsSolved] = useState(false);
  const [movesCount, setMovesCount] = useState(0);
  const boardRef = useRef(null);

  useEffect(() => {
    setPixels(boardRef.current.clientWidth);
  }, []);

  useEffect(() => {
    setImageURL(generateImageURL(pixels));
  }, [pixels]);

  useEffect(() => {
    setBoard(shuffle2D(generateBoard(boardSize)));
  }, [boardSize]);

  const handlePlayAgain = () => {
    setBoard(shuffle2D(generateBoard(boardSize)));
    setImageURL(generateImageURL(pixels));
    setIsSolved(false);
    setMovesCount(0);
  };

  const handleBoardSizeChange = (event) => {
    setBoardSize(event.target.value);
  };

  const swapPieces = (x1, y1, x2, y2) => {
    const copy = board.slice();
    const temp = copy[x1][y1];
    copy[x1][y1] = copy[x2][y2];
    copy[x2][y2] = temp;

    setMovesCount(movesCount + 1);
    setBoard(copy);

    if (checkIfSolved(copy)) {
      setIsSolved(true);
      alert('Nailed it! 🔥');
    }
  };

  return (
    <div className="App">
      <Board
        ref={boardRef}
        board={board}
        size={boardSize}
        imgURL={imageURL}
        onPieceClick={swapPieces}
        isSolved={isSolved}
      />
      <button onClick={handlePlayAgain}>Play again</button>
      <input
        type="number"
        value={boardSize}
        onChange={handleBoardSizeChange}
        min="3"
        max="9"
      ></input>
      <p>{`moves count: ${movesCount}`}</p>
    </div>
  );
}

export default App;
