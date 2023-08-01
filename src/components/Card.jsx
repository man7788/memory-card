import React from 'react';
import '../styles/card.css';

const Card = (props) => {
  const { name, img, selectCard } = props;

  const select = (e) => {
    selectCard(e.target.alt);
  };

  return (
    <div className="card" onClick={select}>
      <img src={img} alt={name} />
    </div>
  );
};

export default Card;
