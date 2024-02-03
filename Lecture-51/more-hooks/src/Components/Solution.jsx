import React, { useState } from "react";

function Solution() {
  let [count, setCount] = useState(0);
  function handleIncrement() {
    setCount((curr) => curr + 1);
    setCount((baba) => baba + 1);
    console.log("redering");
    // setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleIncrement}>Counnter - {count}</button>
    </div>
  );
}

export default Solution;
