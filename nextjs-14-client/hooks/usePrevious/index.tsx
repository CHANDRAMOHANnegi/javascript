"use client"
import React, { useState } from "react";
import { usePrevious } from "./usePrevious";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const previous =usePrevious(counter)

  return <>
            Current {previous}
            <br/>
            Current {counter}
            <br/>
            <button onClick={()=>setCounter(count=>count+1)}> Counter inc</button>
            <br/>
            <button onClick={()=>setCounter(count=>count-1)}> Counter dec</button>
        </>
};

export default Counter;
