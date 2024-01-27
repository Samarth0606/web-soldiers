import React from "react";
import Hello from "./Components/Hello";
import Anything from "./Components/Anything";
import Homie from "./Components/Homie";
import Mapp from "./Components/Mapp";
import Eventss from "./Components/Eventss";
import Person from "./Components/Person";

// rfce rafce

export function App() {
  // function App() {
  // statemets -> if else , for , while , func
  let a = 10;

  // expressions -> map , evalutaion , ternary oper
  return (
    <div>
      {/* <Hello /> */}
      {/* <Anything /> */}
      {/* <Homie /> */}
      {/* <Mapp /> */}
      {/* <Eventss /> */}
      <Person name="golu" color="purple" partner="yes" num="999" />
      <Person name="bhalu" color="pink" partner="no" num="100" />
    </div>
  );
}

// export default App;
// default
// named
