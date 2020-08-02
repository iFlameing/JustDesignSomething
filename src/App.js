import React from "react";
import AppBar from "./components/navbar";
import Card from "./components/card";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  inputDiv: {
    width: "915px",
    position: "fixed",
    bottom: 0,
    background: "#fff",
    left: 220,
    [theme.breakpoints.down("sm")]: {
      left: 0,
      width: "100%",
    },
  },
  input: {
    width: "100%",
    padding: 20,
    outline: "none",
    border: "none",
    "&:focus": {
      borderBottom: "2px solid #243B53",
    },
    background: "#FOF4F8",
    color: "#102A43",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <AppBar />
      <Container maxWidth="md">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card last />
        <Paper className={classes.inputDiv}>
          <textarea
            className={classes.input}
            placeholder="Type Something"
            row={50}
            col={50}
          />
        </Paper>
      </Container>
    </div>
  );
}

export default App;
