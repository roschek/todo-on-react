import React, { useLayoutEffect } from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const styles = {
  ul: {
    listStyle: "none",
    margin: "0",
    padding: "0",
  },
};

function ToDoList(props) {
  return (
    <ul style={styles.ul}>
      {props.todos.map((todo, i) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            i={i}
            onChange={props.changeComplete}
          />
        );
      })}
    </ul>
  );
}

export default ToDoList;
