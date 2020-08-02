import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    marginTop: 10,
    margin: "auto",
    padding: theme.spacing(2),
    width: "100%",
    background: "#FOF4F8",
    fontWeight: 500,
    fontFamily: "Montserrat",
    fontSize: 18,
    color: "#102A43",
    linHeight: 1.5,
  },
  leftdiv: {
    display: "flex",
    position: "relative",
    width: "10%",
  },
  line: {
    background: "#Bcccdc",
    position: "absolute",
    height: "100%",
    width: "5px",
    marginTop: 0,
  },
  circle: {
    position: "absolute",
    background: "#Bcccdc",
    width: 25,
    height: 25,
    top: 30,
    left: -10,
    borderRadius: "50%",
  },
  rightdiv: {
    marginLeft: 10,
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      paddingLeft: 10,
    },
    marginRight: 20,
    position: "relative",
  },
  image: {
    display: "flex",
    flexFlow: "column-reverse",
    position: "relative",
  },
  avatar: {
    position: "abasolute",
    bottom: -10,
  },
  date: {
    position: "absolute",
    bottom: -25,
  },
  last: {
    marginBottom: 80,
  },
  paragraph: {
    marginBottom: 25,
  },
}));

export default function Card(props) {
  const classes = useStyles();
  let lastItem = classes.paper;
  if (props.last) {
    lastItem = lastItem + " " + classes.last;
  }
  return (
    <Paper className={lastItem}>
      <div className={classes.leftdiv}>
        <div className={classes.line}></div>
        <div className={classes.circle}></div>
      </div>
      <div className={classes.rightdiv}>
        <p className={classes.paragraph}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in
        </p>
        <p className={classes.date}>11:47pm. May 11,2020</p>
      </div>
      <div className={classes.image}>
        <Avatar className={classes.avatar} alt="Remy Sharp" />
      </div>
    </Paper>
  );
}
