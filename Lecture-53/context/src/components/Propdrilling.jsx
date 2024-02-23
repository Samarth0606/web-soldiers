import React, { useContext, useState } from "react";
import { CountContext } from "./Context";

function Propdrilling() {
  let [count, setCount] = useState(0);
  return (
    <div>
      <CountContext.Provider value={count}>
        <Counting setCount={setCount} />
      </CountContext.Provider>
    </div>
  );
}

function Counting({ setCount }) {
  return (
    <div>
      <CountComponent />
      <Buttons setCount={setCount} />
    </div>
  );
}
function CountComponent() {
  let count = useContext(CountContext);
  return <h1>Count - {count}</h1>;
}

function Buttons({ setCount }) {
  let count = useContext(CountContext);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>inc</button>
      <button onClick={() => setCount(count - 1)}>desc</button>
    </>
  );
}

export default Propdrilling;
