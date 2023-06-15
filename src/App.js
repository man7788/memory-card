/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import React, { useState, useEffect } from 'react';
import Game from './components/Game';

function App() {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [names, setNames] = useState(['AAA', 'BBB', 'CCC', 'DDD', 'EEE']);

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
    randomCards();
  };

  // Generate an integer length - 1, no duplication
  // New list, push orginal list[integer]
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  const randomCards = () => {
    const draw = [];
    const newList = [];

    while (draw.length < names.length) {
      const num = getRandomInt(0, Number(names.length));
      if (!draw.includes(num)) {
        draw.push(num);
        newList.push(names[num]);
      }
    }

    setNames(newList);
  };

  return (
    <div>
      <div>Current Score: {score}</div>
      <div>Best Score: {best}</div>
      <Game
        names={names}
        addScore={addScore}
        resetScore={resetScore}
        randomCards={randomCards}
      />
    </div>
  );
}

export default App;
