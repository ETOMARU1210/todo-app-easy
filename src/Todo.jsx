import { useState } from "react";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoId, setTodoId] = useState(1);

  const handleSetTodoTitle = (e) => {
    setTodoTitle(e.target.value);
  };

  const resetTodoTitle = () => {
    setTodoTitle("");
  };

  const handleAddTodo = () => {
    setTodos([
      ...todos,
      { id: todoId, title: todoTitle, status: "notStarted" },
    ]);
    setTodoId(todoId + 1);
    resetTodoTitle();
  };


  return (
    <>
      <div>
        <input
          type="text"
          label="タイトル"
          value={todoTitle}
          onChange={handleSetTodoTitle}
        />
        <button onClick={() => handleAddTodo()}>作成</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <select value={todo.status}>
              <option value="notStarted">未着手</option>
              <option value="inProgress">作業中</option>
              <option value="done">完了</option>
            </select>
            <button>編集</button>
            <button>削除</button>
          </li>
        ))}
      </ul>
    </>
  );
};
