import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Snackbar from "./components/Snackbar";

const App = () => {
  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">
          Zustand Todo App
        </h1>

        <TaskForm />
        <TaskList />
      </div>

      <Snackbar />
    </div>
  );
};

export default App;
