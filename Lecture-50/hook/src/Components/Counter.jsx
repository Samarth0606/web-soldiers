import React, { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  //   reconcilation -> faster
  return (
    <React.Fragment>
      <button onClick={handleIncrement}>Increase - {count}</button>
    </React.Fragment>
  );
}

export default Counter;
