import { CSSProperties, ReactNode } from "react";
import { useAtMediaMinWidth } from "../hooks/useAtMediaMinWidth";

export const AtMediaMinWidth = ({
  children,
  element: Element = "div",
  style = {},
}: {
  children: ReactNode;
  element?: "div" | "span";
  style?: { [key: number]: CSSProperties };
}) => {
  return <Element style={useAtMediaMinWidth(style)}>{children}</Element>;
};
