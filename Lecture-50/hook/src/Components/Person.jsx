import React, { useState } from "react";

function Person(props) {
  // let username = props.name;
  //   function handleLogout() {  //wrong approach ❌
  //     console.log(username);
  //     username = "aonymous";
  //     console.log(username);
  //   }
  function handleLogout() {
    setUsername("anonymous user");
  }

  let [username, setUsername] = useState(props.name);

  return (
    <div>
      <h1>Naam: {username} </h1>
      <h1>Umar: {props.age}</h1>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
}

export default Person;
