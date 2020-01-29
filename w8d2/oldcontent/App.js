import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


const createGrid = (amount) => {
  const output = []
  for (let i = 0; i < amount; i++) {
    output.push(null)
  }
  return output
}


function App() {
  const [player1, setPlayer1] = useState('')
  const [player2, setPlayer2] = useState('')
  const [gameStatus, setGameStatus] = useState('waiting')
  // const [grid, setGrid] = useState([null, null, null, null, null, null, null, null, null])
  const [grid, setGrid] = useState(createGrid(9))
  const [turn, setTurn] = useState(1)

  const startGame = () => {
    if (player1 && player2) {
      setGameStatus('running')
    }
  }

  const matchStatus = (grid) => {
    const listOfWinningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

    for (const solution of listOfWinningCombinations) {
      const [tile, tile2, tile3] = solution
      if (grid[tile] !== null && grid[tile] === grid[tile2] && grid[tile2] === grid[tile3]) {
        return { gameStatus: 'finished', wonBy: (turn % 2) ? player1 : player2 }
      }
    }

    return null
  }

  const playerAction = (value, index) => {
    if (!value) {

      setTurn(prev => ++prev)
      let newValue = (turn % 2) ? 'x' : 'o';
      // if (!turn % 2) {
      //   newValue = 'x'
      // }
      // else {
      //   newValue = 'o'
      // }
      setGrid(prev => {
        const output = [...prev]
        output[index] = newValue

        return output
      })

    }
  }


  const gridOfButtons = grid.map((value, index) => <button value={value} onClick={event => playerAction(event.target.value, index)}>{value}</button>)

  useEffect(() => {
    if (matchStatus(grid)) {
      setGameStatus('finished')
    }
    if (turn > 9) {
      setGameStatus('finished-draw')
    }
  }, [grid])
  return (
    <div className="App">
      <h1>Basic Tic Tac Toe with Cypress testing!</h1>
      {gameStatus === 'waiting' &&
        <header>
          <input type="text" id="player1_input" placeholder="Player 1 name" value={player1} onChange={event => setPlayer1(event.target.value)}></input>
          <input type="text" id="player2_input" placeholder="Player 2 name" value={player2} onChange={event => setPlayer2(event.target.value)}></input>
          <button id="start" onClick={startGame}>START</button>
        </header>
      }
      {gameStatus === 'running' &&
        <section>
          <h2>{(turn % 2) ? player1 : player2}</h2>
          <div id="grid">
            {gridOfButtons}
          </div>
        </section>
      }
      {gameStatus === 'finished' &&
        <h1>{!(turn % 2) ? player1 : player2} won !</h1>

      }
      {gameStatus === 'finished-draw' &&
        <section>
          <h1>{player1} and {player2} won !</h1>
          <h2>Because the friendship made during the game was the prize all along</h2>
        </section>

      }
    </div>
  );
}

export default App;
