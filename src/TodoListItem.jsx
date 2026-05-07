import { useState } from "react";
import { isValidTodoTitle } from "./utils/todoValidation";
import TextInputWithLabel from "./shared/TextInputWithLabel";

function TodoListItem({ todo, onCompleteTodo, onUpdateTodo }) {
  const [isEditing, setEditing] = useState(false);
  const [workingTitle, setTitle] = useState(todo.title);

  function handleEdit(event) {
    setTitle(event.target.value);
  }

  function handleUpdate(event) {
    if (!isEditing) return;

    event.preventDefault();
    const tempTodo = todo;
    tempTodo.title = workingTitle;
    onUpdateTodo(tempTodo);
    setEditing(false);
  }

  function handleCancel() {
    setTitle(todo.title);
    setEditing(false);
  }

  return (
    <li>
      <form onSubmit={handleUpdate}>
        {isEditing ? (
          <>
            <TextInputWithLabel value={workingTitle} onChange={handleEdit} />
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
            <button
              type="button"
              onClick={() => {
                if (isValidTodoTitle(workingTitle)) handleUpdate();
              }}
            >
              Update
            </button>
          </>
        ) : (
          <>
            <label>
              <input
                type="checkbox"
                id={`checkbox${todo.id}`}
                checked={todo.isCompleted}
                onChange={() => onCompleteTodo(todo.id)}
              />
            </label>
            <span onClick={() => setEditing(true)}>{todo.title}</span>
          </>
        )}
      </form>
    </li>
  );
}

export default TodoListItem;
