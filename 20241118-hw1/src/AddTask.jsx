import { useState, useContext } from "react";
import { TasksDispatchContext } from "./TasksContext";

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useContext(TasksDispatchContext);

  function handleAdd(e) {
    setText("");
    dispatch({
      type: "added",
      content: text,
    });
  }

  return (
    <>
      <input
        type="text"
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button onClick={handleAdd}>Add</button>
    </>
  );
}
