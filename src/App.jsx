import "./App.css";
import TodoForm from "./featured/TodoForm.jsx";
import TodoList from "./featured/TodoList/TodoList.jsx";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);

  function addTodo(todoTitle) {
    let newToDo = { id: Date.now(), title: todoTitle, isCompleted: false };
    setTodoList((previous) => [newToDo, ...previous]);
  }

  // set todo to completed, set new array with completed todo
  function completeTodo(id) {
    const updateList = todoList.map((todo) => {
      if (todo.id == id) {
        return { ...todo, isCompleted: true };
      } else {
        return todo;
      }
    });
    setTodoList(updateList);
  }

  function updateTodo(editedTodo) {
    // go through all todos, find and update editedTodo
    const newList = todoList.map((todo) => {
      if (todo.id == editedTodo.id) {
        return { ...editedTodo };
      } else {
        return todo;
      }
    });
    setTodoList(newList);
  }

  return (
    <div>
      <h1>CTD-1</h1>
      <TodoForm onAddTodo={addTodo}></TodoForm>
      <TodoList
        todoList={todoList}
        onCompleteTodo={completeTodo}
        onUpdateTodo={updateTodo}
      ></TodoList>
    </div>
  );
}

export default App;
