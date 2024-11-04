import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Form } from "./Form";
import "./App.css";
import { Dollar } from "./Dollar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Form></Form>
      <Dollar></Dollar>
    </>
  );
}

export default App;
