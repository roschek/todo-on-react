import React, { useState } from "react";

export default function AddTodo({ onCreate }) {
  const [value, setValue] = useState(" ");

  function submitHandler(event) {
    event.preventDefault();
    if (value.trim != 0) {
      onCreate(value);
      setValue("");
    }
  }
  return (
    <form className="form" onSubmit={submitHandler}>
      <input
        type="text"
        className="form__input"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button type="submit" className="form__input form__bttn">
        Добавить задачу
      </button>
    </form>
  );
}
