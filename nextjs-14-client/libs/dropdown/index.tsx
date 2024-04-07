"use client";
import React from "react";
import { useState } from "react";
import { Trigger } from "./trigger";
import { DropdownMenu } from "./dropdown-menu";

interface Item {
  icon: string;
  text: string;
  description: string;
}

type DropdownProps = {
  items: Item[];
};

export const Dropdown = ({ items }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (
      e.key
      // ... case blocks ...
      // ... handling Enter, Space, ArrowDown and ArrowUp ...
    ) {
    }
  };

  return (
    <div className="dropdown" onKeyDown={handleKeyDown}>
      <Trigger
        label={selectedItem ? selectedItem.text : "Select an item..."}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && <DropdownMenu items={items} onItemClick={setSelectedItem} />}
    </div>
  );
};
