import { CSSProperties, ReactNode } from "react";

export const Heading = ({
  children,
  element = "h2",
  id,
  style,
}: {
  children: ReactNode;
  element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  id?: string;
  style?: CSSProperties;
}) => {
  const Element = element;
  const heading = {
    display: "block",
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 1,
    margin: 0,
    ...style,
  };
  return (
    <Element id={id} style={heading}>
      {children}
    </Element>
  );
};
