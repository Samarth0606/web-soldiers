import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/dashboard">dashboard</Link>
    </div>
  );
}

export default Home;
