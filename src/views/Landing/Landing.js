import { Link } from "react-router-dom";
import UserNameBox from "../../common/UserNameBox";
import { postUser } from "../../services/http_services";

const Landing = ({ userId }) => {
  const addUser = async (myUsername) => {
    await postUser(myUsername, userId);
  };

  return (
    <div className="landing">
      <h4>Landing Page</h4>
      <UserNameBox onAdd={addUser} />
      <Link to="/lobby">Next</Link>
    </div>
  );
};

export default Landing;
