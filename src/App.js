import React, { useReducer } from "react";
import "./App.css";

const types = {
  addWord: "addWord",
};

const initialState = {
  words: [],
  matrix: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.addWord:
      console.log("poop");
      return state;
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <div className="App">Hello</div>;
}

export default App;
