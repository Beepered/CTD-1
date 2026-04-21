import TodoListItem from "./TodoListItem";

function TodoList({ todoList }) {
  return (
    <ul>
      {todoList.map((item) => (
        <TodoListItem key={item.id} todo={item}></TodoListItem>
      ))}
    </ul>
  );
}

export default TodoList;
