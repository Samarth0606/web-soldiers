import React from "react";
import Hoooks from "./components/Hoooks";
import Ref from "./components/Ref";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Routing from "./components/Routing";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Routing />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/products" /> */}
        </Routes>
      </Router>
      {/* <Routing /> */}
      {/* <Hoooks /> */}
      {/* <Ref /> */}
    </div>
  );
}

export default App;
