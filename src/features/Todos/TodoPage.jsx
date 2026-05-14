import { useState } from "react";
import TodoForm from "./TodoForm.jsx";
import TodoList from "./TodoList/TodoList.jsx";

export default function TodoPage() {
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
      <TodoForm onAddTodo={addTodo}></TodoForm>
      <TodoList
        todoList={todoList}
        onCompleteTodo={completeTodo}
        onUpdateTodo={updateTodo}
      ></TodoList>
    </div>
  );
}
