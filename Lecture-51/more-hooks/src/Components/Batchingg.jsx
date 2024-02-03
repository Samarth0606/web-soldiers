import React from "react";

function Batchingg() {
  let [count, setState] = useState(0);
  let [count2, setState2] = useState(0);

  function handleClick() {
    console.log(count, "before");
    setState(count + 1);
    setState2(count2 + 1);

    console.log(count, "mid");

    setState(count + 1);
    setState2(count2 + 1);
    console.log(count, "after");
  }

  return (
    <div>
      <button onClick={handleClick}>Counter - {count}</button>
    </div>
  );
}

export default Batchingg;
