import { CSSProperties, useEffect, useState } from "react";
import { Button } from "./Button";
import { Label } from "./Label";
import { border, breakpoint } from "../constants/styles";
import { useAtMediaMinWidth } from "../hooks/useAtMediaMinWidth";

const container: CSSProperties = {
  backgroundColor: "var(--background-color)",
  ...border,
  padding: 16,
  transition: "background-color 100ms ease-in-out",
  width: "max-content",
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

export const Mode = () => {
  const [mode, setMode] = useState("low");
  const control = useAtMediaMinWidth({
    0: {
      paddingBottom: 8,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 8,
    },
    [breakpoint + 124]: {
      bottom: 0,
      left: breakpoint + 124,
      paddingBottom: 16,
      paddingTop: 16,
      position: "fixed",
      transform: "rotate(-90deg)",
      transformOrigin: "bottom left",
    },
  });
  useEffect(() => {
    if (mode === "dark") {
      setMode("dark");
      document.documentElement.style.setProperty("--color", "#d7d4d4");
      document.documentElement.style.setProperty(
        "--background-color",
        "#191921"
      );
    }
    if (mode === "light") {
      setMode("light");
      document.documentElement.style.setProperty("--color", "#191921");
      document.documentElement.style.setProperty(
        "--background-color",
        "#d7d4d4"
      );
    }
  }, [mode]);
  return (
    <div style={control}>
      <div style={container}>
        <Label>Modes</Label>
        <ul style={list}>
          <li>
            <Button aria-label="toggle" onClick={() => setMode("dark")}>
              dark
            </Button>
          </li>
          <li>
            <Button aria-label="toggle" onClick={() => setMode("light")}>
              light
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};
