import './App.css';
import React, { useState } from 'react';
import Game from './components/Game';
import ScoreBoard from './components/ScoreBoard';

function App() {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  return (
    <div>
      <ScoreBoard />
      <Game />
    </div>
  );
}

export default App;
// 1. ScoreBoard
// // a. Current Score
// // b. Best Score

// 2. Display Cards

// 3. Random Cards Function

// App -> ScoreBoard -> Current Score
//                   -> Best Score
//     -> Game       -> Cards
