import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./componnents/Home";

const Home = React.lazy(() => import("./componnents/Home"));
const Dashboard = React.lazy(() => import("./componnents/Dashboard"));

// import Dashboard from "./componnents/Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback="loading...1...">
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Suspense fallback="loading...2...">
                <Dashboard />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
