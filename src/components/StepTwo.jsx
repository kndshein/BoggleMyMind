import React, { useState } from "react";

export default function StepTwo({ dispatch, wordCount, words }) {
  const [form, setForm] = useState({ value: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      form.value.length > 2 &&
      wordCount <= 20 &&
      !words.includes(form.value)
    ) {
      dispatch({ type: "addWord", payload: form.value });
    }
  };

  return (
    <>
      <div>
        Add the words (up to 20) you'd like to find! You're at {wordCount}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={form.value}
          onChange={(event) => setForm({ value: event.target.value })}
        />
        <input type="submit" value="Add Word" />
      </form>
      {wordCount >= 1 && (
        <button
          onClick={() => {
            dispatch({ type: "nextStep" });
          }}
        >
          Next!
        </button>
      )}
    </>
  );
}
