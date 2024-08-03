
"use client"
import React, { useCallback, useState } from "react";
import Child from "./Child";

export const DidUpdate = (props: any) => {
    const [counter, setCounter] = useState(0);

    const fn = useCallback(()=>{},[])

    return <>
        {counter}
        <br />
        <button onClick={() => setCounter(count => count + 1)}> Counter inc</button>
        <br />
        <button onClick={() => setCounter(count => count - 1)}> Counter dec</button>
        <Child fn={fn} />
    </>
};

export default DidUpdate;
