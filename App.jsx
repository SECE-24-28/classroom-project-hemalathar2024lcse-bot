import { useState } from "react";
import "./App.css";
import Section from "./Section";

function App() {
  let [num, setNum] = useState(0);
  let frnds = ["Smith", "Victor", "Nelson", "Rohit"];

  function inc() {
    setNum(num + 1);
  }

  function dec() {
    setNum(num - 1);
  }

  return (
    <>
      <div>
        <h1>Counter app</h1>
        <p>{num}</p>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>

        {}
        <Section friends={frnds} />
      </div>
    </>
  );
}

export default App;