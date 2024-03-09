import React, { useState } from "react";

function Square( { value, onSquareClick }) {
  return (
    <button 
    className="square"
    /* 
    each Square is to update Board's state
    using onClick={props} 

    Now, connect 'onSquareClick' prop 
    to Board() Parent component
    as a function handleClick
    */
    onClick={onSquareClick}
    /* styling each sqaure */
    style={{
      borderRadius:10,
      color: 'red',
      marginLeft: 2,
      marginBottom: 2,
    }}
    >
      {value}
    </button>
  );
}

function Board( { xIsNext, squares, handlePlay }) {

  function handleClick(i) {
    /*
    Check to see if the square already has a X or an O
    If Square is already filled, return; to break handleClick()
    before it tries to update the board state
    */
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    /*
    handleClick function creates
    a copy of 'squares' array (nextSquares) with JS slice() method
    Then, handleClick updates 'nextSquares' array to + 'X' 
    to 1st ( [0]index ) square
    */
    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    handlePlay(nextSquares);
  }
    /* nextSquares[i] = "X"; */

    /* 
    Calling 'setSquares' func lets React know 
    the state of the component has changed.
    This will trigger a re-render of components that
    use 'squares' state (Board) & its child components
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
    */
  
    /*
    To let the players know when the game is over
    you can display text such as "Winner:X" or "Winner:O"
    To do that you'll add a 'status' section to Board component.
    The status will display the winner if the game is over &&
    if the game is ongoing you'll display which player's turn is next
    */
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
         {/* To connect from Square upon onSquareClick using handleClick()
        ! Notice the new ' () => ' syntax here
        () => handleClick(0) is an arrow function
        which is a shorter way to define functions
        When the square is clicked
        the code after => will run, calling handleClick(0)  */}
        <Square value={squares[0]} onSquareClick={ () => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={ () => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={ () => handleClick(2)} />
      </div>

      <div className="board-row">
        <Square value={squares[3]} onSquareClick={ () => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={ () => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={ () => handleClick(5)} />
      </div>

      <div className="board-row">
        <Square value={squares[6]} onSquareClick={ () => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={ () => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={ () => handleClick(8)} />
      </div>
    </div>
    );
  }

export default function Game() {
 
  // Each time a player moves, xIsNext (boolean) will be flipped
  // to determine which player goes next &&
  // the game's state will be saved
  // You'll update Board's handleClick func to flip the value of xIsNext

  // Lifting state of each 'Square()' component
  // to the parent component 'Board()'
  // Thus, Board() parent component declares a state variable 'square'
  // defaults to an array of 9 nulls corresponding to the 9 squares
  const [history, setHistory] = useState([Array(9).fill(null)]);

   // It's time to + 'O' too to the game
  // You'll set the 1st move as 'X' by default
  // Let's keep track of this by adding another piece of state
  // to Board component
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    // Here [...history, nextSquares] creates a new array 
    // contains all the items in 'history', followed by 'nextSquares'
    // ...history spread syntax = "enum all items in history"

    // e.g. if history is [[null, null, null]], ["X", null, null] &&
    // nextSquares is ["X", null, "O"] then
    // new [...history, nextSquares] array will be 
    // [ [null, null, null]], ["X",null, null], ["X", null, "O"] ]
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(move) {
    setCurrentMove(move);
  }

  const moves = history.map((step, move) => {
    const desc = move ? "Go to move#" + move : "Go to game strat";
    // let description;

    // if (move > 0) {
    //   description = 'Go to move #' + move;
    // } else {
    //   description = 'Go to game start';
    // }

  return (
    <li key={move}>
      <button onClick={() => jumpTo(move)}>{desc}</button>
    </li>
  );
});

  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
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

  for (let i=0; i < lines.length; i++) {
    const [a,  b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}