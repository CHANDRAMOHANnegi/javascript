import type { Meta, StoryObj } from "@storybook/react";

import { Carousel } from "../carousel";
import { Card } from "../../card";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Carousel",
  component: Carousel,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Carousel1: Story = {
  args: {
    items: [...Array(5)].map((_, i) => ({
      key: `${i}`,
      content: (
        <Card className="w-50 h-30 border p-2">
          <div className="bg-amber-500 h-full">{i}</div>
        </Card>
      ),
    })),
  },
};
