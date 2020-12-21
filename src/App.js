import React, { useState, useEffect, useRef } from 'react';

import { useWindowSize } from './lib/hooks';
import { generateBoard, checkIfSolved } from './lib/game';
import { shuffle2D, generateImageURL } from './lib/util';

import { Board } from './components/';

import './App.css';

function App() {
  const [boardSize, setBoardSize] = useState(3);
  const [imageURL, setImageURL] = useState(null);
  const [board, setBoard] = useState(shuffle2D(generateBoard(boardSize)));
  const [pixels, setPixels] = useState(0);
  const [isSolved, setIsSolved] = useState(false);
  const [movesCount, setMovesCount] = useState(0);
  const boardRef = useRef(null);
  const [windowSize] = useWindowSize();

  useEffect(() => {
    setPixels(boardRef.current.clientWidth);
  }, [windowSize]);

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

      <div className="controls">
        <p>{`Moves: ${movesCount}`}</p>

        <div className="board-size">
          <span className="board-size__label">Board size:</span>
          <input
            className="board-size__input"
            type="number"
            value={boardSize}
            onChange={handleBoardSizeChange}
            min="3"
            max="9"
          ></input>
        </div>

        <button onClick={handlePlayAgain} className="play-again">
          Play again
        </button>
      </div>
    </div>
  );
}

export default App;
