export interface Item {
  icon: string;
  text: string;
  description: string;
}

export type DropdownProps = {
  items: Item[],
};
