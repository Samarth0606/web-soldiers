import React, { useEffect, useRef } from "react";
// useCase-1
function Ref() {
  let salary = 50000; //ctc

  let spanEl = useRef(); //reference to the element

  useEffect(function () {
    setTimeout(function () {
      spanEl.current.innerHTML = "33000";
    }, 5000);
  }, []);

  return (
    <div>
      {/* Salary is :<span id="sal">{salary}</span> */}
      Salary is :<span ref={spanEl}>{salary}</span>
    </div>
  );
}

export default Ref;
