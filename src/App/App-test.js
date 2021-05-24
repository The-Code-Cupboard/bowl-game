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
  console.log(userId);
  const [users, setUsers] = useState([
    {
      id: "default-user-id",
      username: "default-username",
    },
  ]);
  const [words, setWords] = useState([
    {
      id: "default-word-id",
      text: "default-text",
      userId: "default-user-id",
    },
    {
      id: "default-word-id-2",
      text: "default-text-2",
      userId: "default-user-id",
    },
  ]);

  useEffect(() => {
    getDataFromServer(setWords, setUsers);
  }, []);

  return (
    <Router>
      <div className="container">
        <Header />
        <Route exact path="/" render={() => <Landing userId={userId} />} />
        <Route exact path="/lobby" render={() => <Lobby words={words} />} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/summary" component={Summary} />
        <Route exact path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
