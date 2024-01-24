import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const InputForm = ({ onSubmitTodo }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) {
      return;
    }

    onSubmitTodo({
      id: uuidv4(),
      title,
      content,
      isDone: false,
    });

    // 입력 후 초기화
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="제목을 입력해주세요"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="내용을 입력해주세요"
        name="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default InputForm;
