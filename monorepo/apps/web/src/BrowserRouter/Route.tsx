import { PropsWithChildren } from "react";
import { useRouter } from "./useRouter";

const Route = ({ path, children }: { path: string } & PropsWithChildren) => {
  const { currentPath } = useRouter();
  // console.log(path, currentPath);

  return path === currentPath ? children : null;
};

export default Route;
