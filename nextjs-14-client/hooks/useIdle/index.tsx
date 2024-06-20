"use client"
import React, { useState } from "react";
import { useIdle } from "./useIdle";

export const Idle = () => {
  const isIdle =useIdle(5000)

  console.log('------=>>>',isIdle);

  return <>
            isIdle {`${isIdle}`}
        </>
};

export default Idle;
