import { useEffect, useState } from "react";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoId, setTodoId] = useState(1);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [filter, setFilter] = useState("notStarted");


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

  const handleDeleteTodo = (targetTodo) => {
    setTodos(todos.filter((todo) => todo.id !== targetTodo.id));
  };

  const handleStatusChange = ({ id }, e) => {
    const newTodos = todos.map((todo) => ({ ...todo }));

    setTodos(
      newTodos.map((todo) =>
        todo.id === id ? { ...todo, status: e.target.value } : todo
      )
    );
  };

  useEffect(() => {
    const filteringTodos = () => {
      switch (filter) {
        case "notStarted":
          setFilteredTodos(
            todos.filter((todo) => todo.status === "notStarted")
          );
          break;
        case "inProgress":
          setFilteredTodos(
            todos.filter((todo) => todo.status === "inProgress")
          );
          break;
        case "done":
          setFilteredTodos(todos.filter((todo) => todo.status === "done"));
          break;
        default:
          setFilteredTodos(todos);
      }
    };
    filteringTodos();
  }, [filter, todos]);


  return (
    <>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">すべて</option>
        <option value="notStarted">未着手</option>
        <option value="inProgress">作業中</option>
        <option value="done">完了</option>
      </select>

      <input
          type="text"
          label="タイトル"
          value={todoTitle}
          onChange={handleSetTodoTitle}
        />
      <button onClick={() => handleAddTodo()}>作成</button>
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <select value={todo.status}>
              <option value="notStarted">未着手</option>
              <option value="inProgress">作業中</option>
              <option value="done">完了</option>
            </select>
            <button>編集</button>
            <button onClick={() => handleDeleteTodo(todo)}>削除</button>
          </li>
        ))}
      </ul>
    </>
  );
};
