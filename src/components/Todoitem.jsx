
function Todoitem({ todos, setTodos, isDone }) {
  const handleDelete = (selectedTodo) => {
    const handleDelete = window.confirm("정말로 삭제 하시겠습니까?");
    if (handleDelete) {
      const newTodos = todos.filter((todo) => todo.id !== selectedTodo.id);
      setTodos(newTodos);
      alert("삭제 되었습니다.");
    }
  };

  const handleToggle = (selectedTodo) => {
    const toggle = selectedTodo.isDone ? "취소" : "완료";
    const handleToggle = window.confirm(`작업을 ${toggle}하시겠습니까?`);
    if (handleToggle) {
      const newTodos = todos.map((todo) =>
        todo.id === selectedTodo.id ? { ...todo, isDone: !todo.isDone } : todo
      );
      setTodos(newTodos);
    }
  };

  return (
    <div>
      <h2>{isDone ? "Done" : "Working"}</h2>
      <div>
        {todos
          .filter((todo) => todo.isDone === isDone)
          .map((todo) => (
            <div key={todo.id}>
              <h3>{todo.title}</h3>
              <p>{todo.contents}</p>
              <button onClick={() => handleDelete(todo)}>삭제하기</button>
              <button onClick={() => handleToggle(todo)}>
                {!isDone ? "완료" : "취소"}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Todoitem;