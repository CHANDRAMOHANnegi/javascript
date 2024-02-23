"use client"
import React from "react";
const DragList = dynamic(() => import('./1.js/draglist.tsx'), { ssr: false })

export const Page = () => {
  return (
    <>
      <DragList />
    </>
  );
};

export default Page;
