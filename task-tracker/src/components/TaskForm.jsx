import { useState } from "react";
import useTaskStore from "../store/useTaskStore";
import useMessageStore from "../store/useMessageStore";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const addTask = useTaskStore((state) => state.addTask);
  const setMessage = useMessageStore((state) => state.setMessage);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Raw title:", title);
    console.log("Trimmed title:", title.trim());

    if (!title.trim()) {
      setMessage("Please enter a task title.", "error");
      return;
    }

    try {
      addTask({
        id: Date.now(),
        title: title.trim(),
        completed: false, 
      });

      setTitle("");
    }

    catch (error) {
      console.error("Error adding task:", error);
      setMessage("An error occurred while adding the task.", "error");
    }
  
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a new task..."
        className="flex-1 p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Add
      </button>
    </form>
  );
};

export default TaskForm;
