import React from 'react'

export const FilterdTodos = ({filteredTodos, handleStatusChange, handleOpenEditForm, handleDeleteTodo}) => {
  return (
    <ul>
       {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <select value={todo.status} onChange={handleStatusChange}>
              <option value="notStarted">未着手</option>
              <option value="inProgress">作業中</option>
              <option value="done">完了</option>
            </select>
            <button onClick={() => handleOpenEditForm(todo)}>編集</button>
            <button onClick={() => handleDeleteTodo(todo)}>削除</button>
          </li>
        ))}
    </ul>
  )
}