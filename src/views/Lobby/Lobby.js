import { Link } from "react-router-dom";
import AddWord from "./components/AddWord";
import Words from "./components/Words";

import {
  deleteWord,
  postWord,
  getDataFromServer,
} from "../../services/http_services";

const removeWord = async (id) => {
  await deleteWord(id);
};

const Lobby = ({ words, setWords, userId }) => {
  const addWord = async (myWord) => {
    await postWord(myWord, userId);
    getDataFromServer(setWords);
  };

  return (
    <div className="lobby">
      <h4>Lobby Page</h4>
      <AddWord onAdd={addWord} userId={userId} />
      <>
        <Words words={words} onDelete={removeWord} />
      </>
      <Link to="/game">Next</Link>
      <br></br>
      <Link to="/">Prev</Link>
    </div>
  );
};

export default Lobby;
