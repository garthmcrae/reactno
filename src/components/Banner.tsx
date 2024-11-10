import { CSSProperties, ReactNode, useRef } from "react";
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
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div ref={ref} style={container}>
      <>{children}</>
      <Box>
        <Paragraph>Version: {version} (Alpha)</Paragraph>
      </Box>
      <Box>
        <Button
          aria-label="scroll"
          onClick={() => {
            if (ref.current) {
              window.scrollBy({
                top: ref.current.clientHeight,
                behavior: "smooth",
              });
            }
          }}
        >
          <Icon d={down} style={{ height: 24, width: 24 }} />
        </Button>
      </Box>
    </div>
  );
};
