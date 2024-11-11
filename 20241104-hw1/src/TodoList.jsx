import { useImmer } from "use-immer";
import { produce } from "immer";
import { useState } from "react";

export function TodoList() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useImmer([]);

  const todoElements = todos.map((todoData) => (
    <TodoElement
      key={todoData.id}
      content={todoData.content}
      done={todoData.done}
      handleDone={() => handleDone(todoData.id)}
      handleDel={() => handleDel(todoData.id)}
    ></TodoElement>
  ));

  function handleDone(id) {
    setTodos(
      produce((draft) => {
        draft.forEach((x) => {
          if (x.id === id) {
            x.done = !x.done;
          }
        });
      })
    );
  }

  function handleDel(id) {
    setTodos(todos.filter((x) => x.id !== id));
  }

  return (
    <>
      <div style={{ width: "480px" }}>
        <h1>Todo List</h1>
        <TodoAdd
          todos={todos}
          setTodos={setTodos}
          count={count}
          setCount={setCount}
        ></TodoAdd>
        <div
          style={{
            width: "100%",
            height: "1px",
            margin: "16px",
            background: "white",
            opacity: "50%",
            alignSelf: "center",
          }}
        ></div>
        {todoElements}
      </div>
    </>
  );
}

function TodoAdd({ todos, setTodos, count, setCount }) {
  const [stagedTodo, setStagedTodo] = useState("");

  function handleAdd() {
    setTodos(
      produce((draft) => {
        draft.push({ id: count, content: stagedTodo, done: false });
      })
    );
    setCount(count + 1);
    setStagedTodo("");
  }

  return (
    <>
      <form style={{ display: "flex" }} onSubmit={(e) => e.preventDefault()}>
        <input
          style={{ flexGrow: 1 }}
          value={stagedTodo}
          onChange={(e) => setStagedTodo(e.target.value)}
        ></input>
        <button onClick={handleAdd}>추가</button>
      </form>
    </>
  );
}

function TodoElement({ content, done, handleDone, handleDel }) {
  return (
    <>
      <div style={{ display: "flex", opacity: done ? 0.5 : 1, margin: "4px" }}>
        <div
          style={{
            flexGrow: 1,
            textAlign: "Left",
            wordBreak: "break-word",
            textDecorationLine: done ? "line-through" : "none",
          }}
        >
          {content}
        </div>
        <button onClick={handleDone}>{done ? "미완료" : "완료"}</button>
        <button onClick={handleDel}>삭제</button>
      </div>
    </>
  );
}
