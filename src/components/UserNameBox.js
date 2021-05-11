import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const UserNameBox = ({ onAdd }) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [nameSub, setNameSub] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Enter a username");
      return;
    }

    setNameSub(true);
    onAdd(text);
  };

  // Gavyn to add label for username-input
  return nameSub ? (
    <h2>Welcome, {text}</h2>
  ) : (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <TextField
        id="username-input"
        label="User Name"
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input type="submit" value="Create User" className="btn" />
    </form>
  );
};

export default UserNameBox;
