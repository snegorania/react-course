import React, { useState } from "react";

const NewTask = ({ onAddTask }) => {
  const [enteredTask, setEnderedTask] = useState('');

  const handleChange = (e) => {
    setEnderedTask(e.target.value);
  };

  const handleAddTask = () => {
    onAddTask(enteredTask);
    setEnderedTask('');
  };

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        value={enteredTask}
        onChange={handleChange}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
