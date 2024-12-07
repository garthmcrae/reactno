import { ReactNode } from "react";

import { AtMediaMinWidth } from "../components/AtMediaMinWidth";
import Card from "../components/Card";
import { Box } from "../components/Box";
import { Heading } from "../components/Heading";
import { Paragraph } from "../components/Paragraph";
import { useGoToPathname } from "../hooks/useGoToPathname";

export const Articles = ({
  children,
}: {
  children: {
    href: string;
    label: string;
    object: ReactNode;
    paragraph: string;
  }[];
}) => {
  const goToPathname = useGoToPathname();
  return (
    <AtMediaMinWidth
      style={{
        0: { display: "flex", flexDirection: "column", gap: 16 },
        932: { flexDirection: "row" },
      }}
    >
      {children.map(({ href, label, object, paragraph }, index) => (
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
          <Card href={href} onClick={goToPathname}>
            <AtMediaMinWidth
              style={{
                0: {
                  alignItems: "unset",
                  display: "flex",
                  flexDirection: "column",
                },
                560: {
                  alignItems: "flex-end",
                  flexDirection: "row-reverse",
                  justifyContent: "space-between",
                },
                932: {
                  alignItems: "unset",
                  flexDirection: "column",
                },
              }}
            >
              <Box>{object}</Box>
              <Box>
                <Heading element="h3" style={{ fontSize: 12, marginBottom: 8 }}>
                  {label}
                </Heading>
                <Paragraph style={{ marginBottom: 0, marginTop: 0 }}>
                  {paragraph}
                </Paragraph>
              </Box>
            </AtMediaMinWidth>
          </Card>
        </AtMediaMinWidth>
      ))}
    </AtMediaMinWidth>
  );
};
