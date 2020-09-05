import React from "react";
import ToDoList from "./ToDo/ToDoList";
import Context from "./context";
import AddTodo from "./ToDo/AddTodo";

function App() {
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      completed: false,
      title: "поспать",
    },
    {
      id: 2,
      completed: false,
      title: "Пойти потанцевать",
    },
    {
      id: 3,
      completed: false,
      title: "Съездить в парк",
    },
    {
      id: 4,
      completed: false,
      title: "выучить язык",
    },
  ]);

  function changeTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1 className="title"> Список задач на Реакт </h1>
        <AddTodo onCreate={addTodo} />
        {todos.length ? (
          <ToDoList todos={todos} changeComplete={changeTodo} />
        ) : (
          <p className="todo__item">Задач на сегодня нет</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
