import React from "react";

export default function Words({ words, dispatch }) {
  return (
    <div className="words-container-container">
      Your current words:{" "}
      <div className="words-container">
        {words.map((word, index) => {
          return (
            <div
              onClick={() => {
                dispatch({ type: "removeWord", payload: word });
              }}
              className="word"
              key={index}
            >
              {word}
            </div>
          );
        })}
      </div>
    </div>
  );
}
