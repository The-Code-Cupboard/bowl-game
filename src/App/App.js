import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from "../views/About/About";
import Game from "../views/Game/Game";
import Landing from "../views/Landing/Landing";
import Lobby from "../views/Lobby/Lobby";
import Summary from "../views/Summary/Summary";
import Header from "../common/Header";
import Footer from "../common/Footer";

import { getDataFromServer } from "../services/http_services";
import { setUserId } from "../services/helper_functions";

const App = () => {
  // replace with a function that checks cookies and sets accordingly
  const userId = setUserId();
  const [users, setUsers] = useState([]);
  const [words, setWords] = useState([]);

  useEffect(() => {
    getDataFromServer(setWords, setUsers);
  }, []);

  return (
    <Router>
      <div className="container">
        <Header />
        <Route exact path="/" render={() => <Landing userId={userId} />} />
        <Route exact path="/lobby" render={() => <Lobby words={words} setWords={setWords} userId={userId} />} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/summary" component={Summary} />
        <Route exact path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
