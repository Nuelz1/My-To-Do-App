import { create } from "zustand";
import useMessageStore from "./useMessageStore";

// Helper to load tasks from localStorage
const loadTasks = () => {
  const stored = localStorage.getItem("tasks");
  return stored ? JSON.parse(stored) : [];
};

// Helper to save tasks to localStorage
const saveTasks = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const useTaskStore = create((set, get) => ({
  tasks: loadTasks(), // initialize from localStorage

  addTask: (task) => {
    try {
      if (!task || !task.title) throw new Error("Invalid task");

      set((state) => {
        const updatedTasks = [...state.tasks, task];
        saveTasks(updatedTasks); // save to localStorage
        return { tasks: updatedTasks };
      });

      useMessageStore.getState().setMessage("Task added!", "success");
    } catch (error) {
      useMessageStore.getState().setMessage("Error adding task.", "error");
      console.error("Add Task Error:", error);
    }
  },

  removeTask: (id) => {
    try {
      const existing = get().tasks.find((t) => t.id === id);
      if (!existing) throw new Error("Task not found");

      set((state) => {
        const updatedTasks = state.tasks.filter((task) => task.id !== id);
        saveTasks(updatedTasks); // save to localStorage
        return { tasks: updatedTasks };
      });

      useMessageStore.getState().setMessage("Task removed!", "success");
    } catch (error) {
      useMessageStore.getState().setMessage("Error removing task.", "error");
      console.error("Remove Task Error:", error);
    }
  },

  toggleTask: (id) => {
    try {
      const existing = get().tasks.find((t) => t.id === id);
      if (!existing) throw new Error("Task not found");

      set((state) => {
        const updatedTasks = state.tasks
          .map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          )
          .sort((a, b) => a.completed - b.completed);

        saveTasks(updatedTasks); // save to localStorage
        return { tasks: updatedTasks };
      });
    } catch (error) {
      useMessageStore.getState().setMessage("Error updating task.", "error");
      console.error("Toggle Task Error:", error);
    }
  },
}));

export default useTaskStore;
