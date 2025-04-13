import { PropsWithChildren } from "react";
import { useRouter } from "./useRouter";

export const Link = ({ to, children }: { to: string } & PropsWithChildren) => {
  const { navigate } = useRouter();
  return (
    <a
      href={to}
      onClick={(e) => {
        e.preventDefault();
        navigate(to);
      }}
    >
      {children}
    </a>
  );
};
