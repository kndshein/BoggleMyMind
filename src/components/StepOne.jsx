import React from "react";

export default function StepOne({ dispatch }) {
  return (
    <>
      <div>Would you like to make your own matrix?</div>
      <div className="buttons-container">
        <button onClick={() => dispatch({ type: "makeCustom", payload: true })}>
          Yes
        </button>
        <button
          onClick={() => dispatch({ type: "makeCustom", payload: false })}
        >
          No
        </button>
      </div>
    </>
  );
}
