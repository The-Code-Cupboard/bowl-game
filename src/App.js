import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Words from "./components/Words";
import AddWord from "./components/AddWord";
import Footer from "./components/Footer";
import About from "./components/About";
import UserNameBox from "./components/UserNameBox";
import { fetchWords, postWord, deleteWord, fetchUsers, postUser } from "./services";

const App = () => {
  const [showAddWord, setShowAddWord] = useState(false);
  const [words, setWords] = useState([]);
  const [users, setUsers] = useState([]);

  //Word Operations...
  const getWords = async () => {
    const wordsFromServer = await fetchWords();
    setWords(wordsFromServer);
  };

  const addWord = async (myWord) => {
    await postWord(myWord);
    getWords();
  };

  const removeWord = async (id) => {
    await deleteWord(id);
    getWords();
  };

  //User Operations...
  const getUsers = async () => {
    const usersFromServer = await fetchUsers();
    setUsers(usersFromServer);
  }

  const addUser = async(myUsername) => {
    await postUser(myUsername);
    getUsers();
  }



  useEffect(() => {
    getWords();
    getUsers();
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
              <UserNameBox onAdd={addUser}/>
              {showAddWord && <AddWord onAdd={addWord} />}
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
