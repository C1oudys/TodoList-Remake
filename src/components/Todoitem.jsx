const TodoItem = ({ todo, onDeleteTodoItem, onToggleTodoItem }) => {
    const { id, title, content, isDone } = todo;
  
    return (
      <div className="todo-card">
        <article>
          <h3>{title}</h3>
          <p>{content}</p>
          <div>
            <button onClick={() => onDeleteTodoItem(id)}>삭제</button>
            <button onClick={() => onToggleTodoItem(id)}>
              {isDone ? "취소" : "완료"}
            </button>
          </div>
        </article>
      </div>
    );
  };
  
  export default TodoItem;