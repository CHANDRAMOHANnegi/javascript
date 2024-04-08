"use client";
import React, { useState, useTransition } from "react";

function App() {
  const [isPending, startTransition] = useTransition();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    startTransition(() => {
      setInputValue(event.target.value);
    });
  };

  return (
    <div className="App">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type here..."
      />
      {isPending && <p>Loading...</p>}
    </div>
  );
}

export default App;

//  the useTransition hook ensures that the slow state update does not cause any lag in the user interaction.
//  It does so by lowering the priority of the state update,
//  thereby pushing the re-render caused by this state update to the end of the task queue.
