import React from "react";

function Eventss() {
  function hadleClick(a) {
    console.log(a, "deleted");
  }

  return (
    <div>
      {/* <button onClick={hadleClick()} >Click me !</button> */}
      {/* <button onClick={hadleClick}>Click me !!</button> */}
      <button onClick={() => hadleClick(101)}>Delete</button>
    </div>
  );
}

export default Eventss;
