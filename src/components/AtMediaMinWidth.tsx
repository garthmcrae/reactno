import { CSSProperties, JSX, ReactNode } from "react";
import { useAtMediaMinWidth } from "../hooks/useAtMediaMinWidth";

export const AtMediaMinWidth = ({
  children,
  element = "div",
  style = {},
}: {
  style: { [key: number]: CSSProperties };
  children: ReactNode;
  element?: keyof JSX.IntrinsicElements;
}) => {
  const Element = element;
  return <Element style={useAtMediaMinWidth(style)}>{children}</Element>;
};
