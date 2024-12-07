
export type SubMenuItem = {
    id: string;
    label: string;
    path: string;
    type: string;
    icon?: string;
    subMenu?: SubMenuItem[];
  }
  
  export type MenuItem = {
    id: string;
    label: string;
    path: string;
    type: string;
    icon?: string;
    badge?: string;
    isHighlighted?: boolean;
    subMenu?: SubMenuItem[];
  }