import { ReactNode } from "react";

export type CardProps = {
  className?: string;
  children?: ReactNode;
};
export const Card = ({ children, className }: CardProps) => {
  return <div className={className}>{children}</div>;
};
