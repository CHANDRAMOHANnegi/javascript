import React from "react";
import { RouterType } from "./types";

export const RouterContext = React.createContext<RouterType>({
  currentPath: "",
  navigate: () => {},
});