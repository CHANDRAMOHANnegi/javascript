"use client";
import React, { useState, useMemo } from "react";
import "./module.style.scss";
import Autocomplete from "./auto-complete";

const Page = ({ suggestions }) => {
  return (
    <div className="autocomplete-container">
      <Autocomplete />
    </div>
  );
};

export default Page;
