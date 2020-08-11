import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    borderRadius: theme.spacing(2),
    width: "100%",
  },
  paper: {
    display: "flex",
    padding: theme.spacing(2),
    paddingBottom: 0,
    paddingTop: 0,
    width: "100%",
    background: "#FOF4F8",
    fontWeight: 500,
    fontFamily: "Montserrat",
    fontSize: 18,
    color: "#102A43",
    lineHeight: 1.5,
    marginBottom: 0,
  },
  leftdiv: {
    display: "flex",
    position: "relative",
    width: "3%",
  },
  line: {
    background: "#Bcccdc",
    position: "absolute",
    height: "500%",
    width: "5px",
    marginTop: -20,
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
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(2),
    },
    paddingRight: theme.spacing(2),
    paddingBottom: 0,
    width: "95%",
    wordWrap: "break-word",
    textAlign: "justify",
  },
  image: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginLeft: 50,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 49,
    },
  },
  last: {
    marginBottom: 80,
  },
  paragraph: {
    marginBottom: theme.spacing(0),
    hyphens: "auto",
    marginTop: theme.spacing(0),
  },
  avatar: {
    position: "relative",
    left: -theme.spacing(1),
  },
  cardContent: {
    marginBottom: 0,
    paddingBottom: 0,
  },
  date: {
    color: "#486581",
  },
}));

export default function ElogCard(props) {
  const classes = useStyles();
  let lastItem = classes.card;
  if (props.last) {
    lastItem = lastItem + " " + classes.last;
  }
  return (
    <Card className={props.last ? lastItem : classes.card}>
      <CardContent className={classes.cardContent}>
        <div className={classes.paper}>
          <div className={classes.leftdiv}>
            <div className={classes.line}></div>
            <div className={classes.circle}></div>
          </div>
          <div className={classes.rightdiv}>
            <p className={classes.paragraph}>{props.text.data}</p>
          </div>
        </div>
      </CardContent>
      <CardActions>
        <div className={classes.image}>
          <p className={classes.date}>11:47pm. May 11,2020</p>
          <Avatar className={classes.avatar} alt="Remy Sharp" />
        </div>
      </CardActions>
    </Card>
  );
}
