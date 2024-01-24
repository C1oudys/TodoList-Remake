import TodoItem from "./Todoitem";

const TodoList = ({ headTitle, todos, onDeleteTodoItem, onToggleTodoItem }) => {
  return (
    <section>
      <h2>{headTitle}</h2>
      <div>
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