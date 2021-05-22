import { FaTimes } from "react-icons/fa";
import { fetchUsername } from "../services";
import { useState } from "react";

const Word = ({ word, onDelete }) => {
  const [username, setUsername] = useState("default");
  const getUsername = async () => {
    const user = await fetchUsername(word.userId);
    setUsername(user.username);
  };

  getUsername();

  return (
    <div className="word">
      <h3>
        {word.text} <FaTimes onClick={() => onDelete(word.id)} />
      </h3>
      <p>{username}</p>
    </div>
  );
};

export default Word;
