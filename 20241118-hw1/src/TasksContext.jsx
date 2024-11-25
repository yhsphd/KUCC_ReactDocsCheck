import { createContext, useReducer } from "react";
import { produce } from "immer";

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

const initialTasks = {
  count: 5,
  tasks: [
    { id: 0, content: "dspifdshfs", done: false },
    { id: 1, content: "fdgdfgdfhdfh", done: false },
    { id: 2, content: "dfgdfgdfg", done: true },
    { id: 3, content: "werwtegdffdgds", done: false },
    { id: 4, content: "segeryhfghjdsfdd", done: false },
  ],
};

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return produce(tasks, (draftTasks) => {
        draftTasks.count++;
        draftTasks.tasks.push({
          id: draftTasks.count,
          content: action.content,
          done: false,
        });
      });
    }
    case "changed": {
      return produce(tasks, (draftTasks) => {
        draftTasks.tasks = draftTasks.tasks.map((t) => {
          if (t.id === action.task.id) {
            return action.task;
          } else {
            return t;
          }
        });
      });
    }
    case "deleted": {
      return produce(tasks, (draftTasks) => {
        draftTasks.tasks = draftTasks.tasks.filter((t) => t.id !== action.id);
      });
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
