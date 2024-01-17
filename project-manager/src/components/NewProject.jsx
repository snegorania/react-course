import React from "react";
import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

const NewProject = ({ onAdd, onCancel }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  const handleSave = () => {
    const titleValue = title.current.value;
    const descriptionValue = description.current.value;
    const dueDateValue = dueDate.current.value;
    if (
      titleValue.trim().length > 0 &&
      descriptionValue.trim().length > 0 &&
      dueDateValue.trim().length > 0
    ) {
      onAdd({
        title: titleValue,
        description: descriptionValue,
        dueDate: dueDateValue,
      });
      title.current.value = "";
      description.current.value = "";
      dueDate.current.value = "";
    } else {
      modal.current.open();
    }
  };
  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid input</h2>
        <p className="text-stone-400">Oops ... looks loke you forgot to enter a value.</p>
        <p className="text-stone-400 mb-4">Please make sure you provide a valid value for every input field</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-900"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input label="Title" type="text" ref={title} />
          <Input label="Description" textarea ref={description} />
          <Input label="Due Date" type="date" ref={dueDate} />
        </div>
      </div>
    </>
  );
};

export default NewProject;
