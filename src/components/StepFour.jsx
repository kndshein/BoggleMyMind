import React from "react";

export default function StepFour({ foundWords }) {
  return (
    <div className="words-container">
      {foundWords.map((word, index) => {
        return <div key={index}>{word}</div>;
      })}
    </div>
  );
}
