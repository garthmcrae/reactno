import { CSSProperties, ReactNode } from "react";
import { Button } from "../components/Button";
import { Icon, down } from "../components/Icon";

const container: CSSProperties = {
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  height: "calc(100vh - 120px)",
  justifyContent: "center",
  minHeight: 408,
};
const indicator: CSSProperties = {
  marginLeft: "auto",
  marginRight: 16,
};

export const PageBanner = ({ children }: { children: ReactNode }) => {
  return (
    <div style={container}>
      <div>{children}</div>
      <div style={indicator}>
        <Button
          aria-label="scroll"
          onClick={() => window.scrollBy({ top: 160, behavior: "smooth" })}
        >
          <Icon d={down} style={{ height: 24, width: 24 }} />
        </Button>
      </div>
    </div>
  );
};
