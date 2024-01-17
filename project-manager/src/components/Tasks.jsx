import React from "react";
import NewTask from "./NewTask";

const Tasks = ({ tasks, onAddTask, onClearTask }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={onAddTask} />
      {tasks.length === 0 ? (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      ) : (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((el) => (
            <li key={el.id} className="flex justify-between my-4">
              <p>{el.title}</p>
              <button className="text-stone-700 hover:text-red-500" onClick={() => onClearTask(el.id)}>Clear</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Tasks;
