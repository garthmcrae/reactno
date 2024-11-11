import { ReactElement } from "react";
import { AtMediaMinWidth } from "../../components/AtMediaMinWidth";
import { Box } from "../../components/Box";
import { Label } from "../../components/Label";
import { Paragraph } from "../../components/Paragraph";

export const CardLayout = ({
  label,
  object,
  paragraph,
}: {
  label: string;
  object: ReactElement;
  paragraph: string;
}) => {
  return (
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
        <Label element="h3">{label}</Label>
        <Paragraph first last>
          {paragraph}
        </Paragraph>
      </Box>
    </AtMediaMinWidth>
  );
};
