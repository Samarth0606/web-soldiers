import React, { useState } from "react";

function Todos() {
  let [titl, setTitl] = useState("study");

  function handleClick() {
    setTitl(Math.floor(Math.random() * 10));
  }
  return (
    <>
      <DisplayTodo title={titl} desc="study react aache se" />

      <button onClick={handleClick}>click</button>

      <DisplayTodo title="play" desc="play badminton aache se" />
      <DisplayTodo title="gym" desc="do gym aache se" />
    </>
  );
}

function DisplayTodo(props) {
  //   console.log(props);
  return (
    <React.Fragment>
      <h1>TITLE: {props.title} </h1>
      <h3>DESC: {props.desc} </h3>
    </React.Fragment>
  );
}

export default Todos;
