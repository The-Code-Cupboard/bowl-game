import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Words from "./components/Words";
import AddWord from "./components/AddWord";
import Footer from "./components/Footer";
import About from "./components/About";
import UserNameBox from "./components/UserNameBox";
import {
  fetchWords,
  postWord,
  deleteWord,
  fetchUsers,
  postUser,
  deleteUser,
  setCookie,
  getCookie,
  eraseCookie,
} from "./services";
import { nanoid } from "nanoid";

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

  const addUser = async (myUser) => {
    await postUser(myUser, userId);
    // getUsers();
  };

  // currently deletes user by nanoid
  const removeUser = async () => {
    await deleteUser(userId);
  };

  useEffect(() => {
    getWords();
    // getUsers();
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
                onDelete={removeUser}
                userId={userId}
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
