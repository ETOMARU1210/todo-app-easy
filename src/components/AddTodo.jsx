import React from "react";

export const AddTodo = ({todoTitle, handleSetTodoTitle, handleAddTodo}) => {
  return (
    <>
      <input
        type="text"
        label="タイトル"
        value={todoTitle}
        onChange={handleSetTodoTitle}
      />
      <button onClick={() => handleAddTodo()}>作成</button>
    </>
  );
};
