import "./App.css";
import TodoForm from "./TodoForm.jsx";
import TodoList from "./TodoList.jsx";
import { useState } from "react";

const todos = [
  { id: 1, title: "review resources" },
  { id: 2, title: "take notes" },
  { id: 3, title: "code out app" },
  { id: 4, title: "juice the almonds" },
  { id: 5, title: "feed the bread" },
];

function App() {
  const [todoList, setTodoList] = useState(todos);

  return (
    <div>
      <h1>CTD-1</h1>
      <TodoForm></TodoForm>
      <TodoList todoList={todoList}></TodoList>
    </div>
  );
}

export default App;
