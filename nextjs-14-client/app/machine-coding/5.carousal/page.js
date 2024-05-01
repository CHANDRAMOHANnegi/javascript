"use client";
import "./1/style.css";
import people from "./data";
// import Carousal from "./1/carousal";
import Carousal from "./1/carousal";

export default function App() {
  return (
    <div className="App">
      <h1>Carousal</h1>
      <Carousal data={people} />
    </div>
  );
}
