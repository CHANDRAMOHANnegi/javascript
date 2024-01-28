"use client";

import React from "react";
import VirtualList from "./1";

export const Page = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <VirtualList />
    </div>
  );
};

export default Page;
