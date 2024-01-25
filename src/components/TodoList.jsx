import React from "react";
import TodoItem from "./Todoitem";
import styles from "./TodoList.module.css"; // Adjust the import based on your actual file structure

const TodoList = ({ headTitle, todos, onDeleteTodoItem, onToggleTodoItem }) => {
  return (
    <section className={styles.todoContainer}>
      <div className={styles.todoHeader}>
        <h2>{headTitle}</h2>
      </div>
      <div className={styles.todoItemsContainer}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteTodoItem={onDeleteTodoItem}
            onToggleTodoItem={onToggleTodoItem}
          />
        ))}
      </div>
    </section>
  );
};

export default TodoList;
