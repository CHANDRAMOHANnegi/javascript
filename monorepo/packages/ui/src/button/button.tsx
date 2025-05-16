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

export const Button = ({
  children,
  ...rest
}: ComponentProps<"button"> & ButtonProps) => {
  return <button {...rest}>{children}</button>;
};
