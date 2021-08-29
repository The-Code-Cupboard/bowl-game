import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import UserNameBox from './components/UserNameBox';
// import { postUser } from '../../services/http_services';
import CreateGameModal from './components/CreateGameModal';

import firebase from '../../services/firebaseConfig';

const Landing = ({ userId }: { userId: string }) => {
  const addUser = async (myUsername: string) => {
    console.log(myUsername, userId);
    // await postUser(myUsername, userId);
    const dbRef = firebase.database().ref();
    dbRef.push(myUsername);
  };

  return (
    <div className="landing">
      <h2>A Guessing Word Game</h2>
      <p>To start, enter a username below, and join or create a new game.</p>
      <UserNameBox onAdd={addUser} />
      <div className="buttons-centered">
        <Link to="/lobby">
          <Button variant="contained" color="secondary">
            Join Game
          </Button>
        </Link>
        <CreateGameModal />
      </div>
    </div>
  );
};

export default Landing;
