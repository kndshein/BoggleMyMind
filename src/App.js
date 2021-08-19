import React, { useReducer } from "react";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import { generateMatrix, findWords } from "./utils/mindboggleboggle";
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
      return {
        ...state,
        found: findWords(state.matrix, state.words),
      };
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
      <h1>Boggle Your Mind</h1>
      {state.currentStep === 0 && <StepOne dispatch={dispatch} />}
      {state.currentStep === 1 && (
        <StepTwo
          dispatch={dispatch}
          wordCount={state.words.length}
          words={state.words}
        />
      )}
      {state.currentStep >= 2 && (
        <StepThree dispatch={dispatch} matrix={state.matrix} />
      )}
      {/* {state.currentStep >= 3 && <StepFour/>} */}
    </div>
  );
}

export default App;
