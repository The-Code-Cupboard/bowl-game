import React from 'react';
import { Link } from 'react-router-dom';

const Game = () => {
  return (
    <div className="game">
      <h4>Game Page</h4>
      <Link to="/summary">Next</Link>
      <br></br>
      <Link to="/lobby">Prev</Link>
    </div>
  );
};

export default Game;
