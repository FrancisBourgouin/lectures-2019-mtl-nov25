import React, { useState } from "react";
// import "./App.scss";

function App() {
  const [gameState, setGameState] = useState("initial");
  const [choices, setChoices] = useState({
    player1: null,
    player2: null
  });

  const storePlayerChoice = (event, choices, setChoices, gameState) => {
    switch (gameState) {
      case "player1":
        setChoices({ ...choices, player1: event.target.innerText });
        setGameState("player2");
        break;
      case "player2":
        setChoices({ ...choices, player2: event.target.innerText });
        setGameState("result");
        break;
      default:
        break;
    }
  };

  const announceResult = (playerSelection, compSelection) => {
    switch (playerSelection) {
      case "🗿":
        if (compSelection === "🌴") {
          return "Lost";
        } else if (compSelection === "🪓") {
          return "Won";
        } else {
          return "Tied";
        }
      case "🪓":
        if (compSelection === "🗿") {
          return "Lost";
        } else if (compSelection === "🌴") {
          return "Won";
        } else {
          return "Tied";
        }
      case "🌴":
        if (compSelection === "🪓") {
          return "Lost";
        } else if (compSelection === "🌴") {
          return "Won";
        } else {
          return "Tied";
        }
      default:
        return "Waiting";
    }
  };

  const emojiButtons = ["🌴", "🪓", "🗿"].map(emoji => (
    <button
      key={emoji}
      onClick={e => storePlayerChoice(e, choices, setChoices, gameState)}
    >
      {emoji}
    </button>
  ));

  return (
    <div className='App'>
      <h1>Welcome to Moai vs Axe vs Tree</h1>
      {gameState === "initial" && (
        <button onClick={() => setGameState("player1")}>Start game</button>
      )}
      {gameState === "player1" && <section>{emojiButtons}</section>}
      {gameState === "player2" && <section>{emojiButtons}</section>}
      {gameState === "result" &&
        announceResult(choices.player1, choices.player2)}
    </div>
  );
}

export default App;
