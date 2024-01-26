import React from "react";
import TodoItem from "./Todoitem";

function TodoList({ todos, setTodos }) {
  return (
    <div className="todo-list">
      <TodoItem todos={todos} setTodos={setTodos} checkDone={false} />
      <TodoItem todos={todos} setTodos={setTodos} checkDone={true} />
    </div>
  );
}

export default TodoList;
