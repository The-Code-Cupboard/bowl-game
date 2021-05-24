import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { nanoid } from "nanoid";

import Header from "../common/Header";
import Words from "../common/Words";
import AddWord from "../common/AddWord";
import Footer from "../common/Footer";
import About from "../views/About/About";
import UserNameBox from "../common/UserNameBox";
import {
  fetchWords,
  postWord,
  deleteWord,
  fetchUsers,
  postUser,
  updateUser,
  deleteUser,
  setCookie,
  getCookie,
  eraseCookie,
  fetchUsername,
} from "../services/http_services";

const App = () => {
  const [showAddWord, setShowAddWord] = useState(false);
  const [words, setWords] = useState([]);
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState();

  // Word Operations...
  const getWords = async () => {
    const wordsFromServer = await fetchWords();
    setWords(wordsFromServer);
  };

  const addWord = async (myWord) => {
    await postWord(myWord, userId);
    getWords();
  };

  const removeWord = async (id) => {
    await deleteWord(id);
    getWords();
  };

  // User Operations...
  const setUserIdCookie = () => {
    let cookieName = "userId";
    if (getCookie(cookieName) === null) {
      setCookie(cookieName, nanoid(), 1);
    }
  };

  const getUserIdFromCookie = () => {
    let cookieName = "userId";
    if (getCookie(cookieName) !== null) {
      setUserId(getCookie(cookieName));
    } else {
      setUserIdCookie();
      getUserIdFromCookie();
    }
  };

  const getUsers = async () => {
    const usersFromServer = await fetchUsers();
    setUsers(usersFromServer);
  };

  // Add or Update User
  const addUser = async (myUsername) => {
    await postUser(myUsername, userId);
  };

  // currently deletes user by nanoid
  const removeUser = async () => {
    await deleteUser(userId);
  };

  useEffect(() => {
    getWords();
    getUsers();
    getUserIdFromCookie();
    console.log(document.cookie);
  }, []);

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddWord(!showAddWord)}
          showAdd={showAddWord}
        />

        <Route
          path="/"
          exact
          render={(props) => (
            <>
              <UserNameBox
                onAdd={addUser}
                onModify={removeUser} //deprecated
                userId={userId} //deprecated
              />
              {showAddWord && <AddWord onAdd={addWord} userId={userId} />}
              {words.length > 0 ? (
                <Words words={words} onDelete={removeWord} />
              ) : (
                "No words to show... yet!! :)"
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;