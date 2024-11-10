import { CSSProperties } from "react";
import { border } from "../styles";

const code: CSSProperties = {
  backgroundColor: "rgba(255,255,255,.1)",
  ...border,
  boxSizing: "border-box",
  color: "currentColor",
  lineHeight: 1.25,
  margin: 0,
  overflowX: "auto",
  padding: 16,
};

export const Code = ({ children }: { children: string }) => {
  return (
    <pre style={code}>
      <code>{children.trim()}</code>
    </pre>
  );
};
