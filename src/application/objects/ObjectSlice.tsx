import { CSSProperties } from "react";
import { borderWidth } from "../../constants/styles";

const slice: CSSProperties = {
  backfaceVisibility: "inherit",
  borderColor: "currentcolor",
  borderWidth,
  borderStyle: "solid",
  boxSizing: "border-box",
  position: "absolute",
};

export const ObjectSlice = ({ style }: { style: CSSProperties }) => {
  return (
    <div
      style={{
        ...slice,
        ...style,
      }}
    />
  );
};
