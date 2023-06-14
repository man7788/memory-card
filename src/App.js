/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import React, { useState, useEffect } from 'react';
import Game from './components/Game';

function App() {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);

  const addScore = () => {
    setScore(score + 1);
  };

  useEffect(() => {
    if (score > best) {
      setBest(score);
    }
  }, [score]);

  const resetScore = () => {
    setScore(0);
  };

  const names = ['AAA', 'BBB', 'CCC'];

  return (
    <div>
      <div>{score}</div>
      <div>{best}</div>
      <Game names={names} addScore={addScore} resetScore={resetScore} />
    </div>
  );
}

export default App;
