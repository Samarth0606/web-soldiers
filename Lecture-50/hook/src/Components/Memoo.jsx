import React, { memo, useState } from "react";

function Memoo() {
  let [task, setTask] = useState("read");
  function handleClick() {
    setTask(Math.floor(Math.random() * 10));
  }

  return (
    <React.Fragment>
      <Tod titl={task} />
      <button onClick={handleClick}>Click</button>

      <Tod titl="play" />
      <Tod titl="watch" />
    </React.Fragment>
  );
}
const Tod = memo(function ({ titl }) {
  return (
    <>
      <h1>Title:{titl} </h1>
    </>
  );
});
// -------------------------
// function Tod(props) {
//   return (
//     <>
//       <h1>Title:{props.titl} </h1>
//       <h1>Desc: {props.desc}</h1>
//     </>
//   );
// }

export default Memoo;
