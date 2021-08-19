import React, { useReducer } from "react";
import StepOne from "./components/StepOne";
import "./App.css";

const initialState = {
  currentStep: 0,
  isCustomMatrix: false,
  words: [],
  matrix: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "addWord":
      console.log("poop");
      return state;
    case "makeCustom":
      if (action.payload) {
        return {
          ...state,
          currentStep: state.currentStep + 1,
          isCustomMatrix: true,
        };
      } else {
        return {
          ...state,
          currentStep: state.currentStep + 1,
        };
      }
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <header>Boggle Your Mind</header>
      {state.currentStep === 0 && <StepOne dispatch={dispatch} />}
    </div>
  );
}

export default App;
