import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import UserNameBox from "./components/UserNameBox";
import { postUser } from "../../services/http_services";
import CreateGameModal from "./components/CreateGameModal";

const Landing = ({ userId }) => {
  const addUser = async (myUsername) => {
    console.log(myUsername, userId);
    await postUser(myUsername, userId);
  };

  return (
    <div className="landing">
      <h2>A Guessing Word Game</h2>
      <p>To start, enter a username below, and join or create a new game.</p>
      <UserNameBox onAdd={addUser} />
      <br></br>
      <div className="buttons centered">
        <Link to="/lobby">
          <Button variant="contained" color="secondary">
            Join Game
          </Button>
        </Link>
        <br></br>
        <br></br>
        <CreateGameModal />
      </div>
    </div>
  );
};

export default Landing;
