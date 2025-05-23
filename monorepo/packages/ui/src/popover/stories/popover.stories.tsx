import type { Meta, StoryObj } from "@storybook/react";

import { Popover } from "../popover";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Popover",
  component: Popover,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PopoverTop: Story = {
  args: {
    children: "Click me",
    title: "hello",
    placement: "top",
  },
};

export const PopoverLeft: Story = {
  args: {
    children: "Click me",
    title: "hello",
    placement: "left",
  },
};

export const PopoverRight: Story = {
  args: {
    children: "Click me",
    title: "hello",
    placement: "right",
  },
};

export const PopoverBottom: Story = {
  args: {
    children: "Click me",
    title: "hello",
    placement: "bottom",
  },
};
