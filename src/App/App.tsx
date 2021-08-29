import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from '../views/About/About';
import Game from '../views/Game/Game';
import Landing from '../views/Landing/Landing';
import Lobby from '../views/Lobby/Lobby';
import Summary from '../views/Summary/Summary';
import Header from '../common/Header';
import Footer from '../common/Footer';

import { setUserId } from '../services/helper_functions';
import firebase from '../services/firebaseConfig';

interface userObjectType {
  key: string;
  username: string;
}

const App = () => {
  // replace with a function that checks cookies and sets accordingly
  const userId = setUserId();
  const [users, setUsers] = useState([]);
  const [words, setWords] = useState([]);

  useEffect(() => {
    // Retrieve users from Firebase and set to users.
    const dbRef = firebase.database().ref();
    dbRef.on('value', (snapshot) => {
      const myData = snapshot.val();
      // const newArray: Array<userObjectType> = [];
      const newArray: any = [];

      for (const dataKey in myData) {
        if (Object.prototype.hasOwnProperty.call(myData, dataKey)) {
          const userObject: userObjectType = {
            key: dataKey,
            username: myData[dataKey].username,
          };
          newArray.push(userObject);
        }
      }
      setUsers(newArray);
    });
    // getDataFromServer(setWords, setUsers);
    // getDataFromServer(setWords);
  }, []);

  return (
    <Router>
      <div className="container">
        <Header />
        <Route exact path="/" render={() => <Landing userId={userId} />} />
        <Route
          exact
          path="/lobby"
          render={() => <Lobby users={users} words={words} setWords={setWords} userId={userId} />}
        />
        <Route exact path="/game" component={Game} />
        <Route exact path="/summary" component={Summary} />
        <Route exact path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
