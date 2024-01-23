"use client";
import React from "react";
import { Dropdown } from "../../libs/dropdown";

const items = [{ text: "Apple" }, { text: "Orange" }, { text: "Banana" }];

export default function index() {
  return (
    <div>
      <Dropdown items={items} />
    </div>
  );
}
