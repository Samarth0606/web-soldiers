import React, { memo, useCallback, useState } from "react";

function Hoooks() {
  let [count, setCounter] = useState(0);

  //   let a = 1;
  // referencial inequlity

  let a = useCallback(function () {
    console.log("hello");
  }, []); //state/prop

  return (
    <div>
      {/* <Demo b={count} /> */}
      <Demo a={a} />
      <button onClick={() => setCounter(count + 1)}>Click - {count}</button>
    </div>
  );
}

let Demo = memo(function ({ a }) {
  return <h1>hello -{a()} </h1>;
});

export default Hoooks;
