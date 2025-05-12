import { ComponentProps } from "react";

/***
 *
 *  ComponentProps<'button'>
 *
 * **/

export type ButtonProps = {
  backgroundColor?: string;
  label?: string;
  primary?: boolean;
  size?: "large" | "small";
};

export const Button = (props: ComponentProps<"button"> & ButtonProps) => {
  return <button {...props}>Hello</button>;
};
