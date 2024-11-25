import { useContext, useState } from "react";
import { produce } from "immer";
import { TasksContext } from "./TasksContext";
import { TasksDispatchContext } from "./TasksContext";

export default function TaskList() {
  const tasks = useContext(TasksContext);

  const taskElements = tasks.tasks.map((task) => (
    <Task key={task.id} task={task}></Task>
  ));

  return <>{taskElements}</>;
}

function handleDone(task, dispatch) {
  dispatch({
    type: "changed",
    task: produce(task, (draftTask) => {
      draftTask.done = !draftTask.done;
    }),
  });
}

function handleEdit(task, dispatch) {
  dispatch({
    type: "changed",
    task,
  });
}

function handleDelete(id, dispatch) {
  dispatch({
    type: "deleted",
    id,
  });
}

function Task({ task }) {
  const dispatch = useContext(TasksDispatchContext);
  const [editable, setEditable] = useState(false);
  const [content, setContent] = useState(task.content);

  return (
    <>
      <div style={{ display: "flex" }}>
        <input
          type="checkbox"
          checked={task.done}
          onClick={() => handleDone(task, dispatch)}
        ></input>
        {editable ? (
          <input
            type="text"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></input>
        ) : (
          <div>{content}</div>
        )}
        <button
          onClick={() => {
            if (editable) {
              handleEdit(
                produce(task, (draftTask) => {
                  draftTask.content = content;
                }),
                dispatch
              );
            }
            setEditable(!editable);
          }}
        >
          수정
        </button>
        <button onClick={() => handleDelete(task.id, dispatch)}>삭제</button>
      </div>
    </>
  );
}
