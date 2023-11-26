import { useEffect, useState } from "react";
import { FilterdTodos } from "./components/FilterdTodos";
import { EditTodo } from "./components/EditTodo";
import { AddTodo } from "./components/AddTodo";
import { FilterSelect } from "./components/FilterSelect";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoId, setTodoId] = useState(1);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [filter, setFilter] = useState("notStarted");
  const [isEditable, setIsEditable] = useState(false);
  const [editId, setEditId] = useState();
  const [newTitle, setNewTitle] = useState("");

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

  const handleSetNewTitle = (e) => {
    setNewTitle(e.target.value);
  };

  const handleOpenEditForm = ({ id, title }) => {
    setIsEditable(true);
    setEditId(id);
    setNewTitle(title);
  };

  const handleCloseEditForm = () => {
    setIsEditable(false);
    setEditId();
  };

  const handleEditTodo = () => {
    setTodos(
      [...todos].map((todo) =>
        todo.id === editId ? { ...todo, title: newTitle } : todo
      )
    );
    setNewTitle("");
    handleCloseEditForm();
    setEditId();
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
     <FilterSelect filter={filter} setFilter={setFilter} />

      {!isEditable ? (
        <AddTodo todoTitle={todoTitle} handleSetTodoTitle={handleSetTodoTitle} handleAddTodo={handleAddTodo} />
      ) : (
        <EditTodo newTitle={newTitle} handleEditTodo={handleEditTodo} handleSetNewTitle={handleSetNewTitle} handleCloseEditForm={handleCloseEditForm} />
      )}
      <FilterdTodos
        filteredTodos={filteredTodos}
        handleStatusChange={handleStatusChange}
        handleOpenEditForm={handleOpenEditForm}
        handleDeleteTodo={handleDeleteTodo}
      />
    </>
  );
};
