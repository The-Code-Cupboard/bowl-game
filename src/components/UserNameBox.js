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

const UserNameBox = ({ onAdd, onDelete }) => {
  const classes = useStyles();
  const [user, setUser] = useState("");
  const [isUsernameSet, setIsUsernameSet] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      alert("Please enter a username");
      return;
    }

    setIsUsernameSet(true);
    onAdd(user);
  };

  const resetUser = (username) => {
    setUser("");
    onDelete(username);
    setIsUsernameSet(false);
  };

  return isUsernameSet ? (
    <div className="usernameBox">
      <h2>Welcome, {user}</h2>
      <button className="btn" onClick={resetUser}>
        Reset Name
      </button>
    </div>
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
        //value={text}
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
      <input type="submit" value="Create User" className="btn" />
    </form>
  );
};

export default UserNameBox;
