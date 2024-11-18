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
  transform: "rotate3d(0, 1, 0, 0deg)",
  transformStyle: "preserve-3d",
  width: 100,
};
const element: CSSProperties = {
  backfaceVisibility: "inherit",
  borderColor: "currentcolor",
  borderWidth,
  borderStyle: "solid",
  boxSizing: "border-box",
  position: "absolute",
};

const positions = [-50, -40, -30, -20, -10, 0, 10, 20, 30, 40, 50];

export const cube = positions.map((position) => {
  const size = 100;
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

export const field = [-50, 50].map((position) => {
  const size = 100;
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

export const hyperboloid = positions.map((position) => {
  const size = Math.abs((position / 50) * 100);
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

export const octohedron = positions.map((position) => {
  const size = `${100 - Math.abs((position / 50) * 100)}%`;
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

export const plane = [0].map((position) => {
  const size = 100;
  return (
    <div
      key={position}
      style={{
        ...element,
        height: size,
        width: size,
      }}
    />
  );
});

export const pyramid = positions.map((position) => {
  const size = `${position < 0 ? 50 - Math.abs(position) : 50 + position}%`;
  return (
    <div
      key={position}
      style={{
        ...element,
        height: size,
        transform: `translateZ(${position - 20}px)`,
        width: size,
      }}
    />
  );
});

export const Object = ({ children }: { children: ReactNode }) => {
  return (
    <div style={container}>
      <div style={elements}>{children}</div>
    </div>
  );
};
