import { ComponentPropsWithoutRef, useState } from "react";

export type Placement = "top" | "left" | "right" | "bottom";

export type PopoverBaseProps = {
  title?: string;
  placement?: Placement;
};

export type PopoverProps = ComponentPropsWithoutRef<"div"> & PopoverBaseProps;

const PopoverTrigger = ({
  children,
  ...rest
}: ComponentPropsWithoutRef<"button">) => {
  return <button {...rest}>{children}</button>;
};

const PopoverContent = ({ title }: PopoverBaseProps) => {
  return <div className="pop-over bg-amber-500 p-1 rounded-sm">{title}</div>;
};

export const Popover = ({
  children,
  placement = "top",
  ...rest
}: PopoverProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTriggerClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const position: Record<Placement, string> = {
    bottom: "bottom-[100%]",
    left: "top-1/2 left-[100%] ",
    right: "",
    top: "",
  };

  return (
    <div className="relative">
      <PopoverTrigger onClick={handleTriggerClick}>{children}</PopoverTrigger>
      {isOpen && (
        <div className={`absolute ${position[placement]}`}>
          <PopoverContent {...rest} />
        </div>
      )}
    </div>
  );
};
