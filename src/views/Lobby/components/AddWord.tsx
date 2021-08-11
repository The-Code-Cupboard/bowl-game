import React, { useState } from 'react';

const AddWord = ({ onAdd, userId }: { onAdd: (myWord: string) => Promise<void>; userId: string }) => {
  const [text, setText] = useState('');

  const onSubmit = (e: any) => {
    e.preventDefault();

    if (!text) {
      alert('Enter a word in the form, eh!');
      return;
    }
    onAdd(text);

    setText('');
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Word</label>
        <input type="text" placeholder="Add Word" value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <input type="submit" value="Save Word" className="btn btn-block" />
    </form>
  );
};

export default AddWord;
