/* eslint-disable react/prop-types */
import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Pencil, Check, Trash } from "lucide-react";
import { axiosClient } from "../utils/api/axiosInstance";

const TodoCard = ({ todo, index, setTodos, todos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.todo);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleUpdate = async () => {
    if (newTitle.trim() === todo.todo) {
      setIsEditing(false);
      return;
    }

    try {
      const response = await axiosClient.put(`/todos/${todo.id}`, {
        todo: newTitle,
      });
      const updatedTodos = todos.map((t) =>
        t.id === todo.id ? { ...t, todo: response.data.todo } : t
      );

      setTodos(updatedTodos);
    } catch (error) {
      console.error("Error updating todo title", error);
    }

    setIsEditing(false);
  };

  const handleDelete=async()=>{
    const isConfirm=window.confirm("Do you want to delete this todo")

    if(!isConfirm){
        return
    }
    try {
        const response = await axiosClient.delete(`/todos/${todo.id}`);
  

        const updatedTodos = todos.filter((t) =>
          t.id !== response.data.id
        );

  
        setTodos(updatedTodos);
      } catch (error) {
        console.error("Error updating todo title", error);
      }
  }

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="p-4 bg-gray-100 rounded-md shadow cursor-pointer flex justify-between items-center"
        >
          {isEditing ? (
            <div className="flex gap-2 items-center w-full">
              <input
                type="text"
                value={newTitle}
                onChange={handleChange}
                className="border p-1 flex-1 focus:outline-none"
                autoFocus
              />
              <button
                onClick={handleUpdate}
                className="px-2 py-1 bg-green-500 text-white rounded-md"
              >
                <Check size={16} />
              </button>
            </div>
          ) : (
            <h3 className="text-md font-bold flex-1">{todo.todo}</h3>
          )}

          {!isEditing && (
            <button
              onClick={handleEditClick}
              className="ml-2 p-2 text-gray-500 hover:text-gray-700"
            >
              <Pencil size={16} />
            </button>
          )}
           <button
              onClick={handleDelete}
              className="ml-2 p-2 text-gray-500 hover:text-gray-700"
            >
              <Trash size={16} />
            </button>
        </div>
      )}
    </Draggable>
  );
};

export default TodoCard;
