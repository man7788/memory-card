import React, { useState } from 'react';

const Card = (props) => {
  const { name, selectCard } = props;

  const select = (e) => {
    selectCard(e.target.textContent);
  };

  return <div onClick={select}>{name}</div>;
};

export default Card;
