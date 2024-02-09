import React from "react";
import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <nav>
      <h2>GREAT QUOTES APP</h2>
      <ul>
        <li>
          <Link to="/"> All Quotes </Link>
        </li>
        <li>
          <Link to="/new"> New Quote </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;
