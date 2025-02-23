/* eslint-disable react/prop-types */
import { useState } from "react";
import { axiosClient } from "../utils/api/axiosInstance";


const AddTodoModal = ({ onClose,todos,setTodos }) => {
  const [todo, setTodo] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!todo) return;

    try {
      const response = await axiosClient.post("/todos/add", {
        todo,
        completed: false,
        userId: 1,
      });


      const newTodo = { ...response.data, status: "Pending" };
      setTodos([newTodo,...todos]);
      onClose();
    } catch (error) {
      console.error("Error adding todo", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-md w-96">
        <h2 className="text-xl font-bold mb-4">Add New Todo</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Todo title"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="w-full p-2 border rounded-md mb-2"
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded-md mb-2"
          />
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded-md">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTodoModal;
