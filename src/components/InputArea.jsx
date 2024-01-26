import { useState } from "react";
import { v4 as idv4 } from "uuid";

function InputArea({ todos, setTodos }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const contentChangeHandler = (e) => {
    setContent(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("입력란을 작성해주세요");
      return;
    } else {
      const newTodo = {
        id: idv4(),
        title,
        content,
        isDone: false,
      };
      setTodos([...todos, newTodo]);
      setTitle("");
      setContent("");
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>제목 : </label>
        <input
          type="text"
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={titleChangeHandler}
        />
        <label>내용 : </label>
        <input
          type="text"
          placeholder="내용을 입력해주세요"
          value={content}
          onChange={contentChangeHandler}
        />
        <button type="submit">추가하기</button>
      </form>
    </div>
  );
}

export default InputArea;