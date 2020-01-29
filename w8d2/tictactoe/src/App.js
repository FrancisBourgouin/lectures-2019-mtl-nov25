import React, { useState, useEffect } from "react";
import "./App.css";
import { matchStatus } from "./helpers";

const createGrid = tiles => {
  const output = [];
  for (let tile = 0; tile < tiles; tile++) {
    output.push(null);
  }
  return output;
};

function App() {
  const [player1Name, setplayer1Name] = useState("");
  const [player2Name, setplayer2Name] = useState("");
  const [gameStatus, setGameStatus] = useState("initial");
  // initial -> running -> result
  const [grid, setGrid] = useState(createGrid(9));
  const [turn, setTurn] = useState(0);

  // [null, null, ........]
  // [x, null, .......]
  // [x, o, ........]

  useEffect(() => {
    const result = matchStatus(grid, turn, player1Name, player2Name);
    if (result) {
      console.log(result);
      setGameStatus("finished");
    } else {
      console.log("not done yet");
    }
  }, [grid]);
  const start = () => {
    if (player1Name && player2Name) {
      setGameStatus("running");
    }
  };

  const buttonClick = id => {
    const newGrid = [...grid];
    if (newGrid[id] === null) {
      newGrid[id] = turn % 2 ? "o" : "x";
      setTurn(turn + 1);
      setGrid(newGrid);
    }
  };

  const buttonGrid = grid.map((tile, index) => (
    <button
      key={index}
      id={index}
      onClick={event => buttonClick(event.target.id)}
    >
      {tile}
    </button>
  ));
  return (
    <div className='App'>
      <h1>Basic Tic Tac Toe with Cypress testing!</h1>
      {gameStatus === "initial" && (
        <header>
          <input
            type='text'
            id='player1_input'
            placeholder='Player 1 name'
            value={player1Name}
            onChange={event => setplayer1Name(event.target.value)}
          ></input>
          <input
            type='text'
            id='player2_input'
            placeholder='Player 2 name'
            value={player2Name}
            onChange={event => setplayer2Name(event.target.value)}
          ></input>
          <button id='start' onClick={start}>
            START
          </button>
        </header>
      )}
      <div id='grid'>{gameStatus === "running" && buttonGrid}</div>
      {gameStatus === "finished" && (
        <p id='result'>{turn % 2 ? player1Name : player2Name} won !</p>
      )}
    </div>
  );
}

export default App;
