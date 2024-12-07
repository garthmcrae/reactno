import { CSSProperties, ReactNode } from "react";

export const Paragraph = ({
  children,
  style = {
    marginBottom: 24,
    marginTop: 24,
  },
}: {
  children: ReactNode;
  style?: CSSProperties;
}) => {
  const paragraph: CSSProperties = {
    fontSize: 16,
    lineHeight: 24 / 16,
    ...style,
  };
  return <p style={paragraph}>{children}</p>;
};
