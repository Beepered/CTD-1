import { useRef, useState } from "react";
import TextInputWithLabel from "../../shared/TextInputWithLabel";
import { isValidTodoTitle } from "../../utils/todoValidation";

export default function TodoForm({ onAddTodo }) {
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
        disabled={!isValidTodoTitle(workingTodoTitle)}
      >
        Add Todo
      </button>
    </form>
  );
}
