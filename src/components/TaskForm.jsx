import { useState, useContext } from "react";
import {TaskContext} from '../context/TaskContext'

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const {createTask} = useContext(TaskContext)


  const handleSubmit = (event) => {
    event.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="bg-green-200 p-10 mb-4">
          <h1 className="text-2xl font-bold text-black mb-3">Crea tu tarea</h1>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
        className="bg-sky-300 p-3 w-full mb-2 "
      />
      <textarea
        placeholder="Escribe la descripción"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="bg-sky-300 p-3 w-full mb-2"
      ></textarea>
      <button className="bg-indigo-700 px-3 py-1 text-white rounded-md hover:bg-indigo-400"
      >Save</button>
    </form>
    </div>
  );
}

export default TaskForm;
