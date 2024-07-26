import React, { useReducer } from "react";

// Defining the initial state and the reducer
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "add":
      return state + 1;
    case "subtract":
      return state - 1;
    case "reset":
      return 0;
    default:
      throw new Error("Unexpected action");
  }
};

const UsereducerHook = () => {
  // Initialising useReducer hook
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <center>
        <h1>React Hook - useReducer</h1>
      </center>
      <center>
        <h3>{count}</h3>
      </center>
      <button onClick={() => dispatch("add")}>add</button>
      <button onClick={() => dispatch("subtract")}>subtract</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
};

export default UsereducerHook;
