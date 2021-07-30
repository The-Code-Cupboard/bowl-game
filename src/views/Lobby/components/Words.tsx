import React from 'react';
import Word from '../../../common/Word';
import { word } from '../../../common/types';

const Words = ({ words, onDelete }: { words: Array<word>; onDelete: (wordId: string) => Promise<void> }) => {
  return (
    <>
      {words.map((word) => (
        <Word key={word.id} word={word} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Words;
