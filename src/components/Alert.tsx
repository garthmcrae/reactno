import { CSSProperties, ReactNode } from "react";
import { Icon, warn } from "./Icon";
import { border } from "../constants/styles";

const alert: CSSProperties = {
  alignItems: "flex-start",
  ...border,
  display: "flex",
};
const content: CSSProperties = {
  flexGrow: 1,
};
const icon: CSSProperties = {
  flexGrow: 0,
  flexShrink: 0,
  padding: 14,
};

export const Alert = ({ children }: { children: ReactNode }) => (
  <div style={alert} role="alert">
    <div style={icon}>
      <Icon d={warn} style={{ height: 32, width: 32 }} />
    </div>
    <div style={content}>{children}</div>
  </div>
);
