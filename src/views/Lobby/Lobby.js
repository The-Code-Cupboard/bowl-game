import { Link } from "react-router-dom";
import AddWord from "../../common/AddWord";
import Words from "../../common/Words";

import { deleteWord } from "../../services/http_services";

const removeWord = async (id) => {
  await deleteWord(id);
};

const Lobby = ({ words }) => {
  return (
    <div className="lobby">
      <h4>Lobby Page</h4>
      <AddWord />
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
