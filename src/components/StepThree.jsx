import React from "react";

export default function StepOne({ dispatch, matrix }) {
  return (
    <div className="matrix-container">
      {matrix.map((row, index) => {
        return (
          <div
            className="row"
            style={{ gridTemplateColumns: `repeat(${matrix[0].length}, 20px)` }}
          >
            {row.map((letter, index2) => {
              return <div className="col">{letter}</div>;
            })}
          </div>
        );
      })}
      <button
        className="find-button"
        onClick={() => {
          dispatch({ type: "findWords" });
        }}
      >
        Find my words!
      </button>
    </div>
  );
}
