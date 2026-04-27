import "./App.css";
import TodoForm from "./TodoForm.jsx";
import TodoList from "./TodoList.jsx";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);

  function addTodo(todoTitle) {
    let newToDo = { id: Date.now(), title: todoTitle };
    setTodoList((previous) => [newToDo, ...previous]);
  }

  return (
    <div>
      <h1>CTD-1</h1>
      <TodoForm onAddTodo={addTodo}></TodoForm>
      <TodoList todoList={todoList}></TodoList>
    </div>
  );
}

export default App;
