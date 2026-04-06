function TodoForm() {
  return (
    <form>
      <label htmlFor="todoTitle" style={{ marginRight: 5 }}>
        Todo
      </label>
      <input type="text" id="todoTitle" />
      <button type="submit" disabled style={{ marginLeft: 5 }}>
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
