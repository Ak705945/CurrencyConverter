import React from "react";
import TextField from "@material-ui/core/TextField";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import CurrencySelector from "./CurrencySelector";
import Result from "./Res";

function InputArea() {
  const [Currencey, setCurrencey] = React.useState("");
  const [Amount, setAmount] = React.useState("");
  const [Res, setRes] = React.useState(0);
  function handleChange(currencyValue) {
    setCurrencey(currencyValue);
  }
  function updateValue(event) {
    setAmount(event.target.value);
  }
  function calculate() {
    if (Amount.length === 0 || Currencey.length === 0) {
      setRes("INFO NEEDED!");
    } else {
      const url = "https://open.exchangerate-api.com/v6/latest/INR";
      fetch(url)
        .then((res) => res.json())
        .then(
          (result) => {
            const rate = result.rates[Currencey];
            console.log(Amount * rate);
            const resut = String(Amount * rate);
            setRes(resut.slice(0, 5));
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        );
    }
  }

  return (
    <div>
      <TextField
        id="standard-number"
        type="number"
        onChange={updateValue}
        helperText="Enter INR"
        InputLabelProps={{
          shrink: true
        }}
        inputProps={{ style: { fontSize: "1.5rem" } }}
      ></TextField>
      <div>
        <ArrowDownwardIcon style={{ fontSize: 80 }} />
      </div>
      <CurrencySelector changeCurrency={handleChange} />
      <div>
        <div className="button" onClick={calculate}>
          <span className="span">Convert</span>
        </div>
      </div>

      <Result amount={Res} currency={Currencey}></Result>
    </div>
  );
}
export default InputArea;
