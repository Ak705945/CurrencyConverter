import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function CuurencySelector(props) {
  const classes = useStyles();
  const [Currencey, setCurrencey] = React.useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setCurrencey(event.target.value);
    props.changeCurrency(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Currency</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Currencey}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"USD"}>USD</MenuItem>
          <MenuItem value={"AED"}>AED</MenuItem>
          <MenuItem value={"GBP"}>GBP</MenuItem>
          <MenuItem value={"CAD"}>CAD</MenuItem>
          <MenuItem value={"SGD"}>SGD</MenuItem>
          <MenuItem value={"EUR"}>EUR</MenuItem>
          <MenuItem value={"JPY"}>JPY</MenuItem>
          <MenuItem value={"PKR"}>PKR</MenuItem>
          <MenuItem value={"ZAR"}>ZAR</MenuItem>
          <MenuItem value={"ALL"}>ALL</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
