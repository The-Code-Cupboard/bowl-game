import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const UserNameBox = () => {
  const classes = useStyles();

  // Gavyn to add label for username-input
  return (
    <form className={classes.root} noValidate autoComplete="off">
        <TextField id="username-input" label="User Name" variant="outlined" />
    </form>
  );
}

export default UserNameBox
