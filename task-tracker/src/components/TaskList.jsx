import useTaskStore from "../store/useTaskStore";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const tasks = useTaskStore((state) => state.tasks);

  console.log("Tasks array:", tasks);

  if (tasks.length === 0) {
    return (
      <p className="text-gray-500 text-center mt-4">
        No tasks yet. Add one above.
      </p>
    );
  }

  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};



export default TaskList;
