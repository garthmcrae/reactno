import { ReactNode } from "react";
import { useGoToPathname } from "../hooks/useGoToPathname";
import { useWindowLocationPathname } from "../hooks/useWindowLocationPathname";

export const Router = ({
  children,
}: {
  children: { [key: string]: ReactNode };
}) => {
  const goToPathname = useGoToPathname();
  const { locationPathname } = useWindowLocationPathname();
  if (!children[locationPathname]) {
    goToPathname("/not-found/");
  }
  return <>{children[locationPathname]}</>;
};
