import { useRef, useState } from "react";
import TextInputWithLabel from "../shared/TextInputWithLabel";

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
      <TextInputWithLabel
        ref={inputRef}
        value={workingTodoTitle}
        onChange={(event) => {
          setWorkingTitle(event.target.value);
        }}
        elementId={"todoTitle"}
        labelText={"Todo"}
      ></TextInputWithLabel>
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
