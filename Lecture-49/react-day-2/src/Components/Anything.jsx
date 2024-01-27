import React from "react";

function Anything() {
  let arr = [10, 20, 30, 40];
  let obj = { a: 10 };

  let arr2 = [{ a: 100 }, { a: 200 }];

  return (
    <div>
      {/* <h1> {arr} </h1> */}
      <h1> {obj.a} </h1>
      {JSON.stringify(obj)}
      {/* {arr2} */}
    </div>
  );
}

export default Anything;
