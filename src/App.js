import { useState } from "react";
import "./App.css";
import Square from "./components/Square";

function App() {

  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (squares[index] !== null || winner !== null) {
      return;
    }
    const newSquares = [...squares];
    if(xIsNext) {
      newSquares[index] = "X";
      setNext(!xIsNext);
    } else {
      newSquares[index] = "O";
      setNext(!xIsNext);
    }
    
    setSquares(newSquares);
    checkWinner(newSquares);
  }

  const checkWinner = (newSquares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (newSquares[a] && newSquares[a] === newSquares[b] && newSquares[a] === newSquares[c]) {
        setWinner(newSquares[a]);
      }
    }
    return null;
  }

  const newGame = () => {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setNext(true);
  }

  return (
    <div className="App">
      <div className="newGame"><button onClick={newGame}>New Game</button></div>
      <div className="status">{winner ? "Winner: " + winner : "Next player: " + (xIsNext ? "X" : "O")}</div>
      <div className="row">
        <Square value={squares[0]} click={() => handleClick(0)}/>
        <Square value={squares[1]} click={() => handleClick(1)}/>
        <Square value={squares[2]} click={() => handleClick(2)}/>
      </div>
      <div className="row">
        <Square value={squares[3]} click={() => handleClick(3)}/>
        <Square value={squares[4]} click={() => handleClick(4)}/>
        <Square value={squares[5]} click={() => handleClick(5)}/>
      </div>
      <div className="row">
        <Square value={squares[6]} click={() => handleClick(6)}/>
        <Square value={squares[7]} click={() => handleClick(7)}/>
        <Square value={squares[8]} click={() => handleClick(8)}/>
      </div>
    </div>
  );
}

export default App;
