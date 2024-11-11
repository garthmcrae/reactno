import { ReactNode } from "react";
import { useAtMediaMinWidth } from "../hooks/useAtMediaMinWidth";
import { breakpoint } from "../constants/styles";

export const Box = ({ children }: { children: ReactNode }) => {
  const box = useAtMediaMinWidth({
    0: {
      paddingBottom: 8,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 8,
    },
    [breakpoint]: {
      paddingBottom: 16,
      paddingTop: 16,
    },
  });
  return <div style={box}>{children}</div>;
};
