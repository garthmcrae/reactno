import { CSSProperties, ReactNode } from "react";

const label: CSSProperties = {
  fontSize: 12,
  fontWeight: 700,
  lineHeight: 1,
  marginBottom: 8,
  marginTop: 0,
};

export const Label = ({
  children,
  element = "h2",
  htmlFor,
  id,
}: {
  children: ReactNode;
  element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label" | "p";
  htmlFor?: string;
  id?: string;
}) => {
  const Element = element;
  return (
    <Element style={label} id={id} htmlFor={htmlFor}>
      {children}
    </Element>
  );
};
