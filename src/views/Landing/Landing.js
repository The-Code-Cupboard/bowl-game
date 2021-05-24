import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import UserNameBox from "../../common/UserNameBox";
import { postUser } from "../../services/http_services";
import CreateGameModal from "./CreateGameModal";

const Landing = ({ userId }) => {
  const addUser = async (myUsername) => {
    await postUser(myUsername, userId);
  };

  return (
    <div className="landing">
      <h2>Landing Page</h2>
      <UserNameBox onAdd={addUser} />
      <Button variant="contained" color="secondary">
        <Link to="/lobby">Join Game</Link>
      </Button>
      <CreateGameModal></CreateGameModal>
    </div>
  );
};

export default Landing;
