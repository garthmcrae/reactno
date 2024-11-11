import { CSSProperties, ReactNode } from "react";
import { border } from "../constants/styles";

const link: CSSProperties = {
  ...border,
  boxSizing: "border-box",
  color: "inherit",
  cursor: "pointer",
  display: "block",
  fontSize: 32,
  height: "100%",
  lineHeight: 1,
  paddingBottom: 14,
  paddingLeft: 14,
  paddingRight: 14,
  paddingTop: 14,
  position: "relative",
  textDecoration: "none",
};
const content: CSSProperties = {
  pointerEvents: "none",
};

export const Card = ({
  children,
  href,
  onClick = () => null,
  target,
}: {
  children: ReactNode;
  href: string;
  onClick?: (event: MouseEvent | TouchEvent) => void;
  target?: string;
}) => {
  return (
    <a style={link} href={href} onClick={onClick} target={target}>
      <div style={content}>{children}</div>
    </a>
  );
};

export default Card;
