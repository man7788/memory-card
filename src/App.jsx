/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import Game from './components/Game';

function App() {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [pokemon, setPokemon] = useState([]);
  const pokeIndex = [1, 4, 7, 16, 52, 54];

  useEffect(() => {
    const pokeData = [];

    const fetchData = async () => {
      for (const index of pokeIndex) {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${index}`
        );
        const data = await response.json();

        const newObj = {};

        newObj.name = data.name;
        newObj.img = data.sprites.front_default;
        newObj.key = uniqid();

        pokeData.push(newObj);
      }
    };

    const random = async () => {
      return randomCards(pokeData);
    };

    const recordData = async () => {
      await fetchData();
      setPokemon(await random());
    };

    recordData();
  }, []);

  useEffect(() => {
    if (score > best) {
      setBest(score);
    }
  }, [score]);

  const addScore = () => {
    setScore(score + 1);
  };

  const resetScore = () => {
    setScore(0);
    randomCards();
  };

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  const randomCards = (cards = pokemon) => {
    const draw = [];
    const newList = [];

    // Draw a random number list, make new names list with draw's sequence
    while (draw.length < cards.length) {
      const num = getRandomInt(0, Number(cards.length));
      if (!draw.includes(num)) {
        draw.push(num);
        newList.push(cards[num]);
      }
    }

    setPokemon(newList);
    return newList;
  };

  return (
    <div>
      <div className="info-div">
        <div className="title">Memory Card</div>
        <div className="score">Current Score: {score}</div>
        <div className="score">Best Score: {best}</div>
      </div>
      <div>
        <Game
          pokemon={pokemon}
          addScore={addScore}
          resetScore={resetScore}
          randomCards={randomCards}
        />
      </div>
    </div>
  );
}

export default App;
