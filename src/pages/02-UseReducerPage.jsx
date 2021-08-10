// import React from "react";
// import ReactDOM from "react-dom";

import * as React from "react";
// import * as ReactDOM from "react-dom";

const reducer = (state, action) => {
  if (action.type === "add") {
    return state + 1;
  } else {
    return state;
  }
};

function Counter() {
  debugger;
  const [number, setNumber] = React.useReducer(reducer, 0);

  return <div onClick={() => setNumber({ type: "add" })}>{number}</div>;
}

export default Counter

// ReactDOM.render(<Counter />, document.getElementById("root"));
