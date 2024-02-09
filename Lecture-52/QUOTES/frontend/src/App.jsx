import React from "react";
import { Route, Routes } from "react-router-dom";
import MainNavigation from "./components/mainNavigation/MainNavigation";
import AllQuotes from "./components/pages/AllQuotes";
import NewQuote from "./components/pages/NewQuote";
import ShowQuotes from "./components/pages/ShowQuotes";

function App() {
  return (
    <React.Fragment>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllQuotes />} />
        <Route path="/new" element={<NewQuote />} />
        <Route path="/quotes/:id" element={<ShowQuotes />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
