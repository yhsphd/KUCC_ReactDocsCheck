import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { TasksProvider } from "./TasksContext";

function App() {
  return (
    <>
      <h1>Todo List</h1>
      <TasksProvider>
        <AddTask></AddTask>
        <TaskList></TaskList>
      </TasksProvider>
    </>
  );
}

export default App;
