import React, { useContext } from "react";
import Context from "../context";

export default function TodoItem({ todo, i, onChange }) {
  const classes = [];
  if (todo.completed) {
    classes.push("done");
  }
  const { removeTodo } = useContext(Context);

  return (
    <li className="todo__item">
      <span className={classes.join(" ")}>
        <input
          checked={todo.completed}
          className="todo__input"
          type="checkbox"
          onChange={() => onChange(todo.id)}
        />

        <strong>{i + 1}</strong>
        {todo.title}
      </span>
      <button
        className="todo__bttn"
        onClick={() => {
          removeTodo(todo.id);
        }}
      >
        &times;
      </button>
    </li>
  );
}
