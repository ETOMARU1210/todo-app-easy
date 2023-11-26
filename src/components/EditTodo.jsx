import React from 'react'

export const EditTodo = ({newTitle, handleEditTodo, handleSetNewTitle, handleCloseEditForm}) => {
  return (
    <>
    <input
      type="text"
      label="新しいタイトル"
      value={newTitle}
      onChange={handleSetNewTitle}
    />
    <button onClick={handleEditTodo}>編集を保存</button>
    <button onClick={handleCloseEditForm}>キャンセル</button>
  </>
  )
}
