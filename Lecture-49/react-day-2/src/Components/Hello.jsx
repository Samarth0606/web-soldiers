import React from "react";

function Hello() {
  let a = false;
  let b = true;
  let c = null;
  let d = undefined;

  return (
    <div>
      {/* <h1>{JSON.stringify(a)}</h1>
      <h1>{b.toString()}</h1> */}
      {/* <h1>{c.toString()}</h1> */}
      <h1>{JSON.stringify(d)}</h1>
      <h1>{d.toString()}</h1>
    </div>
  );
}

export default Hello;
