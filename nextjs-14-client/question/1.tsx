import React from "react";
import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);

  console.log("1", count);

  useEffect(() => {
    return () => {
      console.log("2");
    };
  }, [count]);

  useEffect(() => {
    setCount((c) => c + 1);
  }, []);

  return <Child count={count} />;
}

const Child = ({ count }:{count:number}) => {
  console.log("-----", count);

  useEffect(() => {
    console.log("3");
    return () => {
      console.log("4");
    };
  }, [count]);

  return null;
};
