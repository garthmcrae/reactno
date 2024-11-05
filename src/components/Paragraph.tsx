import { CSSProperties, ReactNode } from "react";

export const Paragraph = ({
  children,
  first,
  last,
}: {
  children: ReactNode;
  first?: boolean;
  last?: boolean;
}) => {
  const paragraph: CSSProperties = {
    fontSize: 16,
    lineHeight: 20 / 16,
    marginBottom: last ? 0 : 16,
    marginTop: first ? 0 : 16,
  };
  return <p style={paragraph}>{children}</p>;
};
