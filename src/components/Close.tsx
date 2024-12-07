import { CSSProperties } from "react";
import { Icon, cross } from "./Icon";
import { border, padding } from "../constants/styles";

const close: CSSProperties = {
  appearance: "none",
  backgroundColor: "var(--background-color)",
  ...border,
  color: "var(--color)",
  cursor: "pointer",
  display: "block",
  ...padding,
  transition: "background-color 100ms ease-in-out, color 100ms ease-in-out",
};

export const Close = ({
  "aria-label": ariaLabel,
  onClick,
}: {
  "aria-label": string;
  onClick?: () => void;
}) => {
  return (
    <button style={close} aria-label={ariaLabel} onClick={onClick}>
      <Icon
        d={cross}
        style={{
          height: 24,
          width: 24,
        }}
      />
    </button>
  );
};
