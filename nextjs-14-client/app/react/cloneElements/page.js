"use client";
import React from "react";
import Modify from "./modify";
import AddProps from "./add-props";
import Extends from "./extends";

export default function App() {
  return (
    <div>
      <Modify />
      <AddProps/>
      <Extends/>
    </div>
  );
}
// https://www.scaler.com/topics/react/react-cloneelement/
// https://blog.logrocket.com/using-react-cloneelement-function/