import { CSSProperties, MouseEvent, ReactNode } from "react";
import { border, fontSize, padding } from "../constants/styles";

const link: CSSProperties = {
  ...border,
  boxSizing: "border-box",
  color: "var(--color)",
  cursor: "pointer",
  display: "block",
  fontSize,
  fontWeight: 700,
  lineHeight: 1,
  ...padding,
  textDecoration: "none",
  transition:
    "background-color 200ms ease-in-out, border-color 200ms ease-in-out, color 200ms ease-in-out",
};

export const Link = ({
  children,
  href,
  onClick = () => null,
}: {
  children: ReactNode;
  href: string;
  onClick?: (event: MouseEvent) => void;
}) => {
  return (
    <a style={link} href={href} onClick={onClick}>
      {children}
    </a>
  );
};
