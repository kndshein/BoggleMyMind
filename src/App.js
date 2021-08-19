import React, { useReducer } from "react";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";
import { generateMatrix, findWords } from "./utils/mindboggleboggle";
import "./App.css";

const initialState = {
  currentStep: 0,
  rowcol: {},
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
        rowcol: action.payload,
        matrix: generateMatrix(action.payload.row, action.payload.col),
      };
    case "addWord":
      return {
        ...state,
        words: [...state.words, action.payload],
      };
    case "regenerateMatrix":
      return {
        ...state,
        matrix: generateMatrix(state.rowcol.row, state.rowcol.col),
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
    case "back":
      return {
        ...state,
        currentStep: state.currentStep === 0 ? 0 : state.currentStep - 1,
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
      {state.currentStep >= 1 && (
        <div className="words-container-container">
          Your current words:{" "}
          <div className="words-container">
            {state.words.map((word, index) => {
              return (
                <div className="word" key={index}>
                  {word}
                </div>
              );
            })}
          </div>
        </div>
      )}
      {state.currentStep === 0 && <StepOne dispatch={dispatch} />}
      {state.currentStep === 1 && (
        <StepTwo
          dispatch={dispatch}
          wordCount={state.words.length}
          words={state.words}
        />
      )}
      {state.currentStep === 2 && (
        <StepThree dispatch={dispatch} matrix={state.matrix} />
      )}
      {state.currentStep === 2 && <StepFour foundWords={state.found} />}
    </div>
  );
}

export default App;
