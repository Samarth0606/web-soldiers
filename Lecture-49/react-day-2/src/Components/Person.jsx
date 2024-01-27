import React from "react";

// function Person(props) {
function Person({ name, color, partner, num }) {
  //   console.log(props);
  return (
    <div>
      {/* <h2>poora naaam: {props.name} </h2> */}
      <h2>poora naaam: {name} </h2>
      {/* <h2>pasadeeda rang: {props.color} </h2> */}
      <h2>pasadeeda rang: {color} </h2>
      {/* <h2>jeevan saathi: {props.partner}</h2> */}
      <h2>jeevan saathi: {partner}</h2>
      {/* <h2>doorbashyantra sankhya: {props.num}</h2> */}
      <h2>doorbashyantra sankhya: {num}</h2>
    </div>
  );
}

export default Person;
