import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Profile from "./Profile";
import ShoppingList from "./ShoppingList";

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1); // 다음 렌더링에 1 증가 예약
    alert("You clicked me!");
  }

  return (
    <button onClick={handleClick}>
      I'm a button<br></br>Clicked {count} times
    </button>
  );
}

function MyButton2({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Welcome to my app</h1>
      <MyButton></MyButton>
      <MyButton></MyButton>
      <br></br>
      <MyButton2 count={count} onClick={handleClick}></MyButton2>
      <MyButton2 count={count} onClick={handleClick}></MyButton2>
      <Profile></Profile>
      <ShoppingList></ShoppingList>
    </>
  );
}

export default App;
