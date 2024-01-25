import React, { useState } from "react";
import Header from "./Header";
import InputForm from "./InputForm";
import TodoList from "./TodoList";
import Layout from "./Layout";
import { v4 as uuidv4 } from 'uuid';

const todoInitial = {
    id: uuidv4(),
    title: "Example Title",
    content: "Example Content",
    isDone: false,
  };

const MainPage = () => {
    const [todos, setTodos] = useState([todoInitial]);
  
    const onSubmitTodo = (newTodo) => {
      setTodos((prevTodos) => [newTodo, ...prevTodos]);
    };
  
    const onDeleteTodoItem = (id) => {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };
  
    const onToggleTodoItem = (id) => {
      setTodos((prevTodos) =>
        prevTodos.map((todoItem) => {
          if (todoItem.id === id) {
            return {
              ...todoItem,
              isDone: !todoItem.isDone,
            };
          }
  
          return todoItem;
        })
      );
    };
    const workingTodos = todos.filter((todo) => !todo.isDone);
    const doneTodos = todos.filter((todo) => todo.isDone);
  return (
    <>
      <Layout>
        <Header />
        <InputForm onSubmitTodo={onSubmitTodo} />
        <TodoList
          headTitle="Working..."
          todos={workingTodos}
          onDeleteTodoItem={onDeleteTodoItem}
          onToggleTodoItem={onToggleTodoItem}
        />
        <TodoList
          headTitle="Done!"
          todos={doneTodos}
          onDeleteTodoItem={onDeleteTodoItem}
          onToggleTodoItem={onToggleTodoItem}
        />
      </Layout>
    </>
  );
};

export default MainPage;


