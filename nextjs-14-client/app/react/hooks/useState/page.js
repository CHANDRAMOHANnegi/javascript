"use client";
import React, { useState } from "react";

const SetState = (props) => {
  const [val, set] = useState(0);
  const [obj, setObj] = useState({ count: 0 });

  const handleClick = () => {
    console.log("click", val, obj);
    set((val) => ++val);

    obj.count = 1;
    setObj(obj);
  };

  console.log("state changes", val, obj);

  React.useEffect(() => {
    console.log("useEffect runs");

    /**
     *
     * The cleanup function is called when useEffect is called again or on unmount.
     *
     * **/

    return () => {
      console.log("return useEffect");
    };
  }, [val]);

  return <button onClick={handleClick}>click {obj.count}</button>;
};

export default SetState;
