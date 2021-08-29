import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    '& > *': {
      margin: '5px',
      padding: '0',
      width: '20ch',
    },
  },
});

const UserNameBox = ({ onAdd }: { onAdd: (myUsername: string) => Promise<void> }) => {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [showUsernameField, setShowUsernameField] = useState(true);
  const [textInput, setTextInput] = useState('');

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (!textInput) {
      alert('Please enter a username');
      return;
    }
    setUsername(textInput);
    onAdd(textInput);
    setShowUsernameField(false);
  };

  const resetUser = () => {
    setUsername('');
    setShowUsernameField(true);
  };

  return showUsernameField ? (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={onSubmit}>
      <TextField
        label="User Name"
        variant="outlined"
        size="small"
        value={textInput}
        onChange={(e) => {
          setTextInput(e.target.value);
        }}
      />
      <Button variant="contained" color="primary" type="submit">
        Create User
      </Button>
    </form>
  ) : (
    <div className="usernameBox">
      <h2>Welcome, {username}</h2>
      <Button variant="contained" color="primary" onClick={resetUser}>
        Reset Name
      </Button>
    </div>
  );
};

export default UserNameBox;
