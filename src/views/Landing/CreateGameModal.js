import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { TextField, Button, TableRow } from "@material-ui/core/";

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    display: "flex",
    flexDirection: "column",
    "& > *": {
      margin: theme.spacing(0.5),
      width: "100%",
    },
  },
  flexJSB: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: theme.spacing(0.5),
  },
  flexJCC: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: theme.spacing(0.5),
  },
}));

export default function CreateGameModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">New Game Settings</h2>
      <p id="simple-modal-description">Test Modal Text</p>
      <form className={classes.root} noValidate autoComplete="off">
        <h3>Choose Team Names:</h3>
        <div className={classes.flexJSB}>
          <TextField label="Team A Name" variant="outlined" />
          <TextField label="Team B Name" variant="outlined" />
        </div>
        <h3>Other Settings:</h3>
        <TextField
          label="Turn Length (seconds)"
          defaultValue="60"
          variant="outlined"
          type="number"
        />
        <TextField
          label="# of Words Per User"
          defaultValue="10"
          variant="outlined"
          type="number"
        />
      </form>
      <div className={classes.flexJSB}>
        <Button variant="outlined" color="primary" onClick={handleClose}>
          Cancel
        </Button>

        <Link to="/lobby">
          <Button variant="outlined" color="primary">
            Continue To Lobby
          </Button>
        </Link>
      </div>
    </div>
  );

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleOpen}>
        Create Game
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
