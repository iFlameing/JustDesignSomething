import React from "react";
import Card from "./components/card";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  inputDiv: {
    width: "516px",
    position: "fixed",
    bottom: 0,
    background: "#fff",
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
    borderRadius: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(7),
    minWidth: 120,
  },
}));

const intialData = [
  {
    data: `Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy text
  ever since the 1500s, when an unknown printer took a galley of
  type and scrambled it to make a type specimen book. It has
  survived not only five centuries, but also the leap into
  electronic typesetting, remaining essentially unchanged. It was
  popularised in`,
  },
  {
    data: `Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy text
  ever since the 1500s, when an unknown printer took a galley of
  type and scrambled it to make a type specimen book. It has
  survived not only five centuries, but also the leap into
  electronic typesetting, remaining essentially unchanged. It was
  popularised in`,
  },
  {
    data: `Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy text
  ever since the 1500s, when an unknown printer took a galley of
  type and scrambled it to make a type specimen book. It has
  survived not only five centuries, but also the leap into
  electronic typesetting, remaining essentially unchanged. It was
  popularised in`,
  },
  {
    data: `Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy text
  ever since the 1500s, when an unknown printer took a galley of
  type and scrambled it to make a type specimen book. It has
  survived not only five centuries, but also the leap into
  electronic typesetting, remaining essentially unchanged. It was
  popularised in`,
  },
];

function App() {
  const classes = useStyles();
  const [data, setData] = React.useState(intialData);
  const [value, setValue] = React.useState("");
  const [select, setSelect] = React.useState("");

  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  const onchangeHandler = (event) => {
    setValue(event.target.value);
  };

  React.useEffect(() => {
    window.scrollTo(
      document.documentElement.scrollTop,
      document.body.scrollHeight
    );
  }, [data]);

  const onKeyTextarea = (event) => {
    if (event.key === "Enter") {
      setData([...data, { data: value }]);
      setValue("");
    }
  };

  return (
    <div>
      <div>
        <Container maxWidth="sm" style={{ position: "relative" }}>
          <div>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                ELOGS
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={select}
                onChange={handleChange}
                label="ELOGS"
              >
                <MenuItem value={10}>ELOGS</MenuItem>
                <MenuItem value={20}>SETTINGS</MenuItem>
              </Select>
            </FormControl>
          </div>
          {data.map((val, index) => (
            <Card text={val} last={index === data.length - 1} />
          ))}
          <Paper className={classes.inputDiv}>
            <textarea
              className={classes.input}
              placeholder="Type Something"
              row={50}
              col={50}
              value={value}
              onChange={onchangeHandler}
              onKeyDown={onKeyTextarea}
            />
          </Paper>
        </Container>
      </div>
    </div>
  );
}

export default App;
