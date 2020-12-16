import './App.css';

const SIZE = 3;

const board = [];

for (let i = 0; i < SIZE; i++) {
  const row = [];
  for (let j = 0; j < SIZE; j++) {
    row.push({ x: i, y: j });
  }
  board.push(row);
}
console.log(board);

function App() {
  return (
    <div className="App">
      <div style={{ width: '300px', height: '300px', backgroundColor: 'blue' }}>
        <div className="row">
          <div
            className="piece background"
            style={{ backgroundPositionX: '0%' }}
          ></div>
          <div
            className="piece background"
            style={{ backgroundPositionX: '50%' }}
          ></div>
          <div
            className="piece background"
            style={{ backgroundPositionX: '100%' }}
          ></div>
        </div>

        <div className="row">
          <div
            className="piece background"
            style={{ backgroundPositionX: '0%', backgroundPositionY: '50%' }}
          ></div>
          <div
            className="piece background"
            style={{ backgroundPositionX: '50%', backgroundPositionY: '50%' }}
          ></div>
          <div
            className="piece background"
            style={{ backgroundPositionX: '100%', backgroundPositionY: '50%' }}
          ></div>
        </div>

        <div className="row">
          <div
            className="piece background"
            style={{ backgroundPositionX: '0%', backgroundPositionY: '100%' }}
          ></div>
          <div
            className="piece background"
            style={{ backgroundPositionX: '50%', backgroundPositionY: '100%' }}
          ></div>
          <div
            className="piece background"
            style={{ backgroundPositionX: '100%', backgroundPositionY: '100%' }}
          ></div>
        </div>

        {/* <img src="https://picsum.photos/300" /> */}
      </div>
    </div>
  );
}

export default App;
