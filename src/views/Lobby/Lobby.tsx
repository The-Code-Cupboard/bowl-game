import { Link } from 'react-router-dom';
import AddWord from './components/AddWord';
import Words from './components/Words';

import { deleteWord, postWord, getDataFromServer } from '../../services/http_services';
import React, { SetStateAction } from 'react';
import { word } from '../../common/types';

type lobbyProps = {
  words: Array<word>;
  setWords: React.Dispatch<SetStateAction<never[]>>;
  userId: string;
};

const Lobby = ({ words, setWords, userId }: lobbyProps) => {
  const addWord = async (myWord: string) => {
    await postWord(myWord, userId);
    getDataFromServer(setWords);
  };

  const removeWord = async (id: string) => {
    await deleteWord(id);
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
