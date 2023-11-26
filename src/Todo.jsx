import { useState } from "react";

export const Todo = () => {
  const [ todos, setTodos ] = useState(
    [
     {
       title : "test",
       status: "未着手" 
     },
     {
       title : "test2",
       status: "着手" 
     },
     {
       title : "test3",
       status: "完了" 
     },
   ]
 )
  return (
    <>
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
      ;
    </>
  );
};
