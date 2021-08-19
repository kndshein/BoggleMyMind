import React, { useState } from "react";

export default function StepOne({ dispatch }) {
  const [form, setForm] = useState({ row: 0, col: 0 });
  const handleOnChange = (event) => {
    setForm({ ...form, [event.target.name]: parseInt(event.target.value) });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (form.row >= 3 && form.row <= 20 && form.col >= 3 && form.col <= 20) {
      dispatch({
        type: "setRowCol",
        payload: { row: form.row, col: form.col },
      });
    }
  };
  return (
    <>
      <div>How many rows and columns would you like? (between 3 and 20)</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="row">Row</label>
        <input
          id="row"
          type="number"
          name="row"
          value={form.row}
          onChange={handleOnChange}
          required
        />
        <label htmlFor="col">Column</label>
        <input
          id="col"
          type="number"
          name="col"
          value={form.col}
          onChange={handleOnChange}
          required
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
