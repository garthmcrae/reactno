import { CSSProperties, ReactNode } from "react";
import { Box } from "./Box";
import { Button } from "./Button";
import { Icon, down } from "./Icon";
import { Paragraph } from "./Paragraph";

import { version } from "../../package.json";

const container: CSSProperties = {
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  height: "calc(100vh - 120px)",
  justifyContent: "flex-start",
  minHeight: 408,
};

export const Banner = ({ children }: { children: ReactNode }) => {
  return (
    <div style={container}>
      <>{children}</>
      <Box>
        <Paragraph>Version: {version} (Alpha)</Paragraph>
      </Box>
      <Box>
        <Button
          aria-label="scroll"
          onClick={() => window.scrollBy({ top: 160, behavior: "smooth" })}
        >
          <Icon d={down} style={{ height: 16, width: 16 }} />
        </Button>
      </Box>
    </div>
  );
};
