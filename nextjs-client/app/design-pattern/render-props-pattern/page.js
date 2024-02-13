"use client";
import React from "react";
import { Input1 } from "./input1";
import { Input2 } from "./input2";

function Kelvin({ value }) {
  return <div className="temp">{parseInt(value || 0) + 273.15}K</div>;
}

function Fahrenheit({ value }) {
  return <div className="temp">{(parseInt(value || 0) * 9) / 5 + 32}°F</div>;
}

export default function RenderProps() {
  return (
    <div className="App">
      <h1>☃️ Temperature Converter 🌞</h1>
      {/* Children as a function */}

      <Input1>
        {(value) => (
          <>
            <Kelvin value={value} />
            <Fahrenheit value={value} />
          </>
        )}
      </Input1>

      <Input2
        render={(value) => (
          <>
            <Kelvin value={value} />
            <Fahrenheit value={value} />
          </>
        )}
      />
    </div>
  );
}

// export default RenderProps;
