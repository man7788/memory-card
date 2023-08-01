/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import '../styles/game.css';
import Card from './Card';

const Game = (props) => {
  const [record, setRecord] = useState([]);

  const { pokemon, addScore, resetScore, randomCards } = props;

  const selectCard = (card) => {
    if (!record.includes(card)) {
      const newRecord = record.map((item) => item);

      newRecord.push(card);
      setRecord(newRecord);

      addScore();
      randomCards();
    } else {
      resetScore();
      setRecord([]);
    }
  };

  const cards = pokemon.map((mon) => {
    return (
      <Card
        key={mon.key}
        name={mon.name}
        img={mon.img}
        selectCard={selectCard}
      />
    );
  });

  return <div className="game-div">{cards}</div>;
};

export default Game;
