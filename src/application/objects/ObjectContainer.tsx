import { CSSProperties, ReactNode } from "react";

export const ObjectContainer = ({
  children,
  size = 10,
}: {
  children: ReactNode;
  size?: number;
}) => {
  const container: CSSProperties = {
    alignItems: "center",
    boxSizing: "border-box",
    display: "flex",
    height: size * 22,
    justifyContent: "center",
    margin: "auto",
    perspective: size * 22,
    width: size * 22,
  };
  const element: CSSProperties = {
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

  return (
    <div style={container}>
      <div style={element}>{children}</div>
    </div>
  );
};
