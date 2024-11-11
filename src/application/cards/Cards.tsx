import { ReactNode } from "react";

import { AtMediaMinWidth } from "../../components/AtMediaMinWidth";

export function Cards({ children }: { children: ReactNode[] }) {
  return (
    <AtMediaMinWidth
      style={{
        0: { display: "flex", flexDirection: "column", gap: 16 },
        932: { flexDirection: "row" },
      }}
    >
      {children.map((card, index) => (
        <AtMediaMinWidth
          key={`article${index}`}
          style={{
            932: {
              flexBasis: "auto",
              flexGrow: 1,
              flexShrink: 1,
            },
          }}
        >
          {card}
        </AtMediaMinWidth>
      ))}
    </AtMediaMinWidth>
  );
}
