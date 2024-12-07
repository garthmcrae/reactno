import { CSSProperties, ReactNode, useRef, useState } from "react";
import { Button } from "./Button";
import { Icon, lunch } from "./Icon";
import { useAtMediaMinWidth } from "../hooks/useAtMediaMinWidth";
import { useOnClickOutside } from "../hooks/useClickOutside";
import { border, padding } from "../constants/styles";
import { useOnKeydown } from "../hooks/useOnKeydown";

const width = 224;

const container: CSSProperties = {
  position: "relative",
};
const drawer: CSSProperties = {
  backgroundColor: "var(--background-color)",
  ...border,
  boxSizing: "border-box",
  ...padding,
  position: "absolute",
  right: -1 * width - 16 - 4,
  top: -4,
  transition:
    "background-color 200ms ease-in-out, border-color 200ms ease-in-out, color 200ms ease-in-out, transform 200ms ease-in-out",
  width,
  zIndex: 2,
};

export const Drawer = ({ children }: { children: ReactNode }) => {
  const breakpoint = 960 + width + 16;
  const control = useAtMediaMinWidth({
    0: {
      display: "block",
    },
    [breakpoint]: {
      display: "none",
    },
  });
  const ref = useRef(null);
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle((value) => !value);
  useOnClickOutside(ref, () => setToggle(false));
  useOnKeydown("Equal", handleToggle, () => window.innerWidth < breakpoint);
  return (
    <div style={container}>
      <div style={control}>
        <Button aria-label="Toggle navigation" onClick={handleToggle}>
          <Icon
            d={lunch}
            style={{
              height: 20,
              width: 20,
            }}
          />
        </Button>
      </div>
      <div
        onClick={() => setToggle(false)}
        ref={ref}
        style={{
          ...drawer,
          transform: `translateX(${toggle ? -1 * width - 16 : 0}px)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};
