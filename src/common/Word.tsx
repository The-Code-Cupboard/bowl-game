import { FaTimes } from 'react-icons/fa';
import { fetchUsername } from '../services/http_services';
import React, { useState } from 'react';
import { word } from '../common/types';

const Word = ({ word, onDelete }: { word: word; onDelete: (wordId: string) => Promise<void> }) => {
  const [username, setUsername] = useState('default');
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
