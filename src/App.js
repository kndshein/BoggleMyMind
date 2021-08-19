import React, { useReducer } from "react";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import { generateMatrix } from "./utils/generateMatrix";
import "./App.css";

const initialState = {
  currentStep: 0,
  words: [],
  matrix: [],
  found: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setRowCol":
      return {
        ...state,
        currentStep: state.currentStep + 1,
        matrix: generateMatrix(action.payload.row, action.payload.col),
      };
    case "addWord":
      return {
        ...state,
        words: [...state.words, action.payload],
      };
    case "findWords":
      return state;
    case "nextStep":
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };
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
      {state.currentStep === 1 && (
        <StepTwo dispatch={dispatch} wordCount={state.words.length} />
      )}
      {state.currentStep >= 2 && (
        <StepThree dispatch={dispatch} matrix={state.matrix} />
      )}
    </div>
  );
}

export default App;
