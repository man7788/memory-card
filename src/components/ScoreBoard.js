import React, { useState } from 'react';
import BestScore from './BestScore';
import CurrentScore from './CurrentScore';

const ScoreBoard = () => {
  return (
    <div>
      <BestScore />
      <CurrentScore />
    </div>
  );
};

export default ScoreBoard;
