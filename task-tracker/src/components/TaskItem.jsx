import useTaskStore from "../store/useTaskStore";

const TaskItem = ({ task }) => {
  const toggleTask = useTaskStore((state) => state.toggleTask);
  const removeTask = useTaskStore((state) => state.removeTask);

  return (
    <div className="flex items-center justify-between p-3 bg-gray-100 rounded shadow-sm">
      
      <div className="flex items-center gap-3 flex-1">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />

        <span
          className={`${
            task.completed
              ? "line-through text-gray-400"
              : "text-gray-800"
          }`}
        >
          {task.title}
        </span>
      </div>

      <button
        onClick={() => removeTask(task.id)}
        className="ml-3 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
