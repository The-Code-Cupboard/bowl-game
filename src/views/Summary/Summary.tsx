import React from 'react';
import { Link } from 'react-router-dom';

const Summary = () => {
  return (
    <div className="summary">
      <h4>Summary Page</h4>
      <Link to="/">Home</Link>
      <br></br>
      <Link to="/game">Prev</Link>
    </div>
  );
};

export default Summary;
