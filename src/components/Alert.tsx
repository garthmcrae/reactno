import { CSSProperties, ReactNode, useState } from "react";
import { Close } from "./Close";
import { Expand } from "./Expand";
import { Icon, warn } from "./Icon";
import { border } from "../styles";

const alert: CSSProperties = {
  alignItems: "flex-start",
  ...border,
  display: "flex",
};
const close: CSSProperties = {
  flexGrow: 0,
  flexShrink: 0,
  padding: 14,
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

export const AlertDismissable = ({ children }: { children: ReactNode }) => {
  const [toggle, setToggle] = useState<boolean>(true);
  const handleToggle = () => setToggle((prevToggle) => !prevToggle);
  return (
    <Expand expand={toggle}>
      <div style={alert} role="alert">
        <div style={icon}>
          <Icon d={warn} style={{ height: 32, width: 32 }} />
        </div>
        <div style={content}>{children}</div>
        <div style={close}>
          <Close aria-label="dismiss" onClick={handleToggle} />
        </div>
      </div>
    </Expand>
  );
};
