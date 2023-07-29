import React, { useState } from 'react';
import '../styles/card.css';

const Card = (props) => {
  const { name, selectCard } = props;

  const select = (e) => {
    selectCard(e.target.textContent);
  };

  return (
    <div className="card" onClick={select}>
      {name}
    </div>
  );
};

export default Card;
