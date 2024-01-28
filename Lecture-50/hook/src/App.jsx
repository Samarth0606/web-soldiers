import React, { Fragment } from "react";
import Person from "./Components/Person";
import Counter from "./Components/Counter";
import Todos from "./Components/Todos";
import Home from "./Components/Home";
import Memoo from "./Components/Memoo";

function App() {
  return (
    <Fragment>
      {/* <Person name="sam" age="28" /> */}
      {/* <Counter /> */}
      {/* <Todos /> */}
      {/* <Home /> */}
      <Memoo />
    </Fragment>
  );
}

export default App;
