import { useState } from "react";
import InputArea from "./InputArea";
import Header from "./Header";
import TodoList from "./TodoList";
import Layout from "./Layout";
import Footer from "./Footer";

const MainPage = () => {
const [todos, setTodos] = useState([]);


    return (
        <>
        <Layout>
        <Header />
        <InputArea  todos={todos}
        setTodos={setTodos} />
        <TodoList 
        todos={todos}
        setTodos={setTodos}
        />
        <Footer />
        </Layout>
        </>
    );
};

export default MainPage;