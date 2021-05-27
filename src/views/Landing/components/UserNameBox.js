import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useState } from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    "& > *": {
      margin: "5px",
      padding: "0",
      width: "20ch",
    },
  },
});

const UserNameBox = ({ onAdd }) => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [showUsernameField, setShowUsernameField] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!username) {
      alert("Please enter a username");
      return;
    }
    onAdd(username);
    setShowUsernameField(false);
  };

  const resetUser = () => {
    setUsername("");
    setShowUsernameField(true);
  };

  return !showUsernameField ? (
    <div className="usernameBox">
      <h2>Welcome, {username}</h2>
      <Button
        label="Reset Name"
        variant="contained"
        color="primary"
        onClick={resetUser}
      >
        Reset Name
      </Button>
    </div>
  ) : (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        label="User Name"
        variant="outlined"
        size="small"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <Button variant="contained" color="primary" onClick={onSubmit}>
        Create User
      </Button>
    </form>
  );
};

export default UserNameBox;
