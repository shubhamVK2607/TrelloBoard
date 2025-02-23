/* eslint-disable react/prop-types */

import { Droppable } from "react-beautiful-dnd";
import TodoCard from "./TodoCard";

const Lane = ({ status, todos,setTodos }) => {
  return (
    <Droppable droppableId={status}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="w-1/3 p-4 bg-cyan-200 rounded-md h-full overflow-auto scrollbar-thin"
        >
          <h2 className="text-lg font-bold mb-4">{status}</h2>
          <div className="flex flex-col gap-2">
            {todos
              .filter((todo) => todo.status === status)
              .map((todo, index) => (
                <TodoCard key={todo.id} todo={todo} index={index} todos={todos} setTodos={setTodos} />
              ))}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default Lane;
