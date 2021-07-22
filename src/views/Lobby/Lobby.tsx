import { Link } from "react-router-dom";
import Word from "../../common/Word";
import { useState } from "react";

import { deleteWord, postWord, getDataFromServer } from "../../services/http_services";
import { SetStateAction } from "react";
import { word } from "../../common/types";

type lobbyProps = {
  words: Array<word>;
  setWords: React.Dispatch<SetStateAction<never[]>>;
  userId: string;
};

const Lobby = ({ words, setWords, userId }: lobbyProps) => {
  const [text, setText] = useState("");

  const onSubmit = (e: any) => {
    e.preventDefault();

    if (!text) {
      alert("Enter a word in the form, eh!");
      return;
    }
    addWord(text);
    setText("");
  };

  const addWord = async (myWord: string) => {
    await postWord(myWord, userId);
    getDataFromServer(setWords);
  };

  const removeWord = async (id: string) => {
    await deleteWord(id);
    getDataFromServer(setWords);
  };

  return (
    <div className='lobby'>
      <h4>Lobby Page</h4>
      <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='wordInput'>Word</label>
          <input id='wordInput' type='text' placeholder='Add Word' value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <input type='submit' value='Save Word' className='btn btn-block' />
      </form>
      {words.map((word) => {
        return <Word word={word} onDelete={removeWord} />;
      })}
      <Link to='/'>Prev</Link>
      <Link to='/game'>Next</Link>
    </div>
  );
};

export default Lobby;
