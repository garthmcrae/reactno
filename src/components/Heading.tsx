import { ReactNode } from "react";
import { useAtMediaMinWidth } from "../hooks/useAtMediaMinWidth";
import { breakpoint, fontSize } from "../constants/styles";

export const Heading = ({
  children,
  element = "h2",
  scale = 1.25,
}: {
  children: ReactNode;
  element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  scale?: number;
}) => {
  const Element = element;
  const heading = useAtMediaMinWidth({
    0: {
      fontSize: fontSize * scale,
      lineHeight: 1,
      margin: 0,
    },
    [breakpoint]: {
      fontSize: fontSize * scale * 2,
    },
  });
  return <Element style={heading}>{children}</Element>;
};
