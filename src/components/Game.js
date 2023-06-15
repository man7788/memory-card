/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import '../styles/game.css';
import uniqid from 'uniqid';
import Card from './Card';

const Game = (props) => {
  const [record, setRecord] = useState([]);

  const { names, addScore, resetScore, randomCards } = props;

  const addRecord = (card) => {
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

  const selectCard = (card) => {
    addRecord(card);
  };

  // Map names to list, return card without passing functions everytime
  const cards = names.map((card) => {
    return <Card key={uniqid()} name={card} selectCard={selectCard} />;
  });

  return <div class="game-div">{cards}</div>;
};

export default Game;
