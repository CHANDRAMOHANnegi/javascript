import { PropsWithChildren, useEffect, useState } from "react";
import { RouterContext } from "./RouterContext";

export const RouteProvider = ({ children }: PropsWithChildren) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    function onPopState() {
      console.log("=====---");
      setCurrentPath(window.location.pathname);
    }

    window.addEventListener("popstate", onPopState);

    return () => {
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

  const navigate = (to: string) => {
    window.history.pushState({}, "", to);
    setCurrentPath(window.location.pathname);
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};
