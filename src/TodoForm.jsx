import { useRef, useState } from "react";

function TodoForm({ onAddTodo }) {
  const inputRef = useRef();
  const [workingTodoTitle, setWorkingTitle] = useState("");

  const handleAddTodo = (event) => {
    event.preventDefault();

    if (workingTodoTitle && workingTodoTitle !== "") {
      onAddTodo(workingTodoTitle);
      setWorkingTitle("");
      inputRef.current.focus();
    }
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label style={{ marginRight: 5 }} htmlFor="todoTitle">
        Todo
      </label>
      <input
        ref={inputRef}
        type="text"
        id="todoTitle"
        name="todoTitle"
        placeholder={"Todo text"}
        value={workingTodoTitle}
        onChange={(event) => {
          setWorkingTitle(event.target.value);
        }}
        required
        style={{ width: "15%", maxWidth: "20%", minWidth: "10%" }}
      />
      <button
        style={{ marginLeft: 5 }}
        type="submit"
        disabled={!workingTodoTitle.trim()}
      >
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
