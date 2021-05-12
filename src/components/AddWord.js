import { useState } from "react";

const AddWord = ({ onAdd }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Enter a word in the form, eh!");
      return;
    }

    const username = "testUser"; //can we import this from UserNameBox??
    onAdd(text, username);

    setText("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Word</label>
        <input
          type="text"
          placeholder="Add Word"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <input type="submit" value="Save Word" className="btn btn-block" />
    </form>
  );
};

export default AddWord;
