import React from "react";
import TodoItem from "./Todoitem";

function TodoList({ todos, setTodos }) {
  return (
    <div className="todo-list">
      <TodoItem todos={todos} setTodos={setTodos} isDone={false} />
      <TodoItem todos={todos} setTodos={setTodos} isDone={true} />
    </div>
  );
}

export default TodoList;
