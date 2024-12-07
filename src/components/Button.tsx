import {
  CSSProperties,
  forwardRef,
  MouseEvent,
  ReactNode,
  Ref,
  TouchEvent,
} from "react";
import { border, fontSize, padding } from "../constants/styles";

const button: CSSProperties = {
  appearance: "none",
  backgroundColor: "var(--background-color)",
  ...border,
  boxSizing: "border-box",
  color: "var(--color)",
  cursor: "pointer",
  display: "block",
  fontFamily: "inherit",
  fontSize,
  fontWeight: 700,
  lineHeight: 1,
  ...padding,
  textAlign: "center",
  transition:
    "background-color 200ms ease-in-out, border-color 200ms ease-in-out, color 200ms ease-in-out",
};

export const Button = forwardRef(
  (
    {
      "aria-label": ariaLabel,
      children,
      onClick,
      type = "button",
    }: {
      "aria-label"?: string;
      children: ReactNode;
      onClick?: (event: MouseEvent | TouchEvent) => void;
      type?: "button" | "submit";
    },
    ref
  ) => {
    return (
      <button
        style={button}
        aria-label={ariaLabel}
        onClick={onClick}
        ref={ref as Ref<HTMLButtonElement>}
        type={type}
      >
        {children}
      </button>
    );
  }
);
