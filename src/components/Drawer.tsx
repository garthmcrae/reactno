import { CSSProperties, ReactNode, useRef, useState } from "react";
import { Button } from "./Button";
import { Icon, lunch } from "./Icon";
import { useAtMediaMinWidth } from "../hooks/useAtMediaMinWidth";
import { useOnClickOutside } from "../hooks/useClickOutside";
import { border } from "../constants/styles";
import { useOnKeydown } from "../hooks/useOnKeydown";

const container: CSSProperties = {
  position: "relative",
};
const drawer: CSSProperties = {
  backgroundColor: "var(--background-color)",
  ...border,
  padding: 14,
  position: "absolute",
  right: -272,
  top: -4,
  transition: "background-color 100ms ease-in-out, transform 300ms ease-in-out",
  width: 224,
  zIndex: 2,
};

export const Drawer = ({ children }: { children: ReactNode }) => {
  const breakpoint = 1232;
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
  useOnKeydown("Equal", handleToggle);
  return (
    <div style={container}>
      <div style={control}>
        <Button aria-label="Toggle navigation" onClick={handleToggle}>
          <Icon
            d={lunch}
            style={{
              height: 24,
              width: 24,
            }}
          />
        </Button>
      </div>
      <div
        onClick={() => setToggle(false)}
        ref={ref}
        style={{ ...drawer, transform: `translateX(${toggle ? -272 : 0}px)` }}
      >
        {children}
      </div>
    </div>
  );
};
