import { CSSProperties } from "react";
import { border, fontSize, padding } from "../constants/styles";
import { Heading } from "./Heading";

const button: CSSProperties = {
  appearance: "none",
  backgroundColor: "var(--background-color)",
  borderStyle: "none",
  boxSizing: "border-box",
  color: "var(--color)",
  cursor: "pointer",
  display: "block",
  fontFamily: "inherit",
  fontSize,
  fontWeight: 700,
  lineHeight: 1,
  padding: 8,
  textAlign: "center",
};
const container: CSSProperties = {
  backgroundColor: "var(--background-color)",
  ...border,
  ...padding,
  transition:
    "background-color 200ms ease-in-out, border-color 200ms ease-in-out, color 200ms ease-in-out",
  // width: "max-content",
};
const list: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: 16,
  listStyle: "none",
  marginBottom: 0,
  marginTop: 0,
  paddingInlineStart: 0,
};

const modes = [
  { backgroundColor: "#191921", color: "#d7d4d4" },
  { backgroundColor: "#d7d4d4", color: "#191921" },
  { backgroundColor: "#000000", color: "#ffffff" },
  { backgroundColor: "#28271a", color: "#72fa3e" },
];

export const Mode = ({ disabled }: { disabled?: boolean }) => {
  const handleClick = (backgroundColor: string, color: string) => {
    document.documentElement.style.setProperty(
      "--background-color",
      backgroundColor
    );
    document.documentElement.style.setProperty("--color", color);
  };
  return (
    <div style={container}>
      <Heading style={{ fontSize: 12, marginBottom: 8 }}>Modes</Heading>
      <ul style={list}>
        {modes.map(({ backgroundColor, color }) => {
          const key = `${backgroundColor}/${color}`;
          return (
            <li key={key}>
              <button
                disabled={disabled}
                onClick={() => handleClick(backgroundColor, color)}
                style={{ ...button, backgroundColor, color }}
              >
                {key}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
