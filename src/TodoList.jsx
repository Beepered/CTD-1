import TodoListItem from "./TodoListItem";

function TodoList({ todoList, onCompleteTodo }) {
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
          ></TodoListItem>
        ))
      )}
    </ul>
  );
}

export default TodoList;
