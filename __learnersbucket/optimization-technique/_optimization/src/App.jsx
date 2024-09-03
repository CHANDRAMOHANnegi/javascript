import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("./components/home"));
const About = React.lazy(() => import("./components/about"));
const Faq = React.lazy(() => import("./components/faq"));

// import Home from "./components/home"
// import About from "./components/about"
// import Faq from "./components/faq"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <React.Suspense fallback={"loading..."}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="about"
          element={
            <React.Suspense fallback={"loading..."}>
              <About />
            </React.Suspense>
          }
        />
        <Route
          path="faq"
          element={
            <React.Suspense fallback={"loading..."}>
              <Faq />
            </React.Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
