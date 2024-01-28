import React, { useState } from "react";

function Home() {
  return (
    <div>
      <Display titl="gym" desc="go to gym" />
      <Display titl="gym" desc="go to gym" />
      <BadaDisplay titl="shop" desc="go to shop" />
    </div>
  );
}

function Display(props) {
  return (
    <>
      <h1>Title: {props.titl}</h1>
      <h3>Desc: {props.desc}</h3>
    </>
  );
}

function BadaDisplay({ titl, desc }) {
  let [newtitle, setNewTitle] = useState(titl);
  //   console.log(newtitle, "sam");
  function handleClick() {
    setNewTitle(Math.floor(Math.random() * 10));
  }
  return (
    <>
      <button onClick={handleClick}>click</button>
      <Display titl={newtitle} desc={desc} />
    </>
  );
}

export default Home;
