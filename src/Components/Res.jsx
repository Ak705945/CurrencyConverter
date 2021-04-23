import React from "react";
function Res(props) {
  return (
    <div>
      <h1>{props.amount + " " + props.currency}</h1>
    </div>
  );
}
export default Res;
