import React from "react";

export default function StepThree({ dispatch, matrix }) {
  return (
    <div className="matrix-container">
      {matrix.map((row, index) => {
        return (
          <div
            key={index}
            className="row"
            style={{ gridTemplateColumns: `repeat(${matrix[0].length}, 20px)` }}
          >
            {row.map((letter, index2) => {
              return (
                <div key={index2} className="col">
                  {letter}
                </div>
              );
            })}
          </div>
        );
      })}
      <div className="buttons-container">
        <button
          onClick={() => {
            dispatch({ type: "back" });
          }}
        >
          Back
        </button>
        <button
          onClick={() => {
            dispatch({ type: "regenerateMatrix" });
          }}
        >
          Regenerate the Matrix
        </button>
        <button
          onClick={() => {
            dispatch({ type: "findWords" });
          }}
        >
          Find my words!
        </button>
      </div>
    </div>
  );
}
