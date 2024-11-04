import { useState } from "react";

export function Dollar() {
  const currency = 1300;
  const [inputMoney, SetInputMoney] = useState();
  const [outputMoney, setOutputMoney] = useState();

  const handleInputChange = (e) => {
    SetInputMoney(e.target.value);
  };

  const calcCurrency = () => {
    setOutputMoney(inputMoney * currency);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <div>$</div>
        <input type="number" onChange={handleInputChange}></input>
      </div>
      <div>₩{outputMoney}</div>
      <button onClick={calcCurrency}>Calculate</button>
    </>
  );
}
