import { CSSProperties, ReactNode } from "react";
import { borderWidth } from "../constants/styles";

const container: CSSProperties = {
  alignItems: "center",
  boxSizing: "border-box",
  display: "flex",
  height: 10 * 22,
  justifyContent: "center",
  margin: "auto",
  perspective: 10 * 22,
  width: 10 * 22,
};
const elements: CSSProperties = {
  animationName: "rotate",
  animationDuration: "10000ms",
  animationFillMode: "both",
  animationIterationCount: "infinite",
  animationTimingFunction: "linear",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: 100,
  transform: "rotate3d(1, 1, 1, 0deg)",
  transformStyle: "preserve-3d",
  width: 100,
};
const element: CSSProperties = {
  backfaceVisibility: "inherit",
  borderColor: "var(--color)",
  borderWidth,
  borderStyle: "solid",
  boxSizing: "border-box",
  position: "absolute",
};

const generate = (
  positions: number[],
  calculateSize: (position: number) => string | number
) => {
  return positions.map((position) => {
    const size = calculateSize(position);
    return (
      <div
        key={position}
        style={{
          ...element,
          height: size,
          transform: `translateZ(${position}px)`,
          width: size,
        }}
      />
    );
  });
};

const positions = [-50, -40, -30, -20, -10, 0, 10, 20, 30, 40, 50];

export const cube = generate(positions, () => 100);
export const field = generate([-50, 50], () => 100);
export const hyperboloid = generate(positions, (position) =>
  Math.abs((position / 50) * 100)
);
export const octohedron = generate(
  positions,
  (position) => `${100 - Math.abs((position / 50) * 100)}%`
);
export const plane = generate([0], () => 100);

export const Object = ({ children }: { children: ReactNode }) => {
  return (
    <div style={container}>
      <div style={elements}>{children}</div>
    </div>
  );
};
