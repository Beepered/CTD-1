import TodoListItem from "./TodoListItem";

export default function TodoList({ todoList, onCompleteTodo, onUpdateTodo }) {
  const filteredTodoList = todoList.filter((todo) => todo.isCompleted == false);

  return (
    <ul>
      {filteredTodoList.length == 0 ? (
        <p style={{ color: "grey" }}>Add todo above to get started</p>
      ) : (
        filteredTodoList.map((item) => (
          <TodoListItem
            key={item.id}
            todo={item}
            onCompleteTodo={onCompleteTodo}
            onUpdateTodo={onUpdateTodo}
          ></TodoListItem>
        ))
      )}
    </ul>
  );
}
