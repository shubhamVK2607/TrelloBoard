
import { DragDropContext } from "react-beautiful-dnd";
import Lane from "./Lane";
import useTodos from "../hooks/useTodos";
import { useState } from "react";
import AddTodoModal from "./AddTodoModal";


const Board = () => {
  const { todos, setTodos } = useTodos();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDragEnd = (result) => {
    const { destination, draggableId } = result;

    if (!destination) return;

    const updatedTodos = [...todos];
    const movedTodo = updatedTodos.find((todo) => todo.id.toString() === draggableId);
    
    if (movedTodo) {
      movedTodo.status = destination.droppableId;
      setTodos([...updatedTodos]);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 ml-4 py-2 bg-green-500 text-white rounded-md"
      >
        + Add Todo
      </button>

      {isModalOpen && <AddTodoModal onClose={() => setIsModalOpen(false)} setTodos={setTodos} todos={todos} />}
      <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex gap-4 p-4 h-[90%]">
        <Lane status="Pending" todos={todos} setTodos={setTodos}/>
        <Lane status="In Progress" todos={todos} setTodos={setTodos}/>
        <Lane status="Completed" todos={todos} setTodos={setTodos}/>
      </div>
    </DragDropContext>
    </>

  );
};

export default Board;
