import React from "react";
import { Counter } from "./counter";
import { TextBox } from "./text";

export const CounterApp = () => {
  return (
    <div className='container'>
      <Counter />
      <Counter />
      <TextBox />
      <TextBox />
    </div>
  )
}