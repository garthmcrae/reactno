import { ReactNode, useState } from "react";
import { Expand } from "./Expand";
import { Button } from "./Button";

export const Expander = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const handleToggle = () => setToggle((prevToggle) => !prevToggle);
  return (
    <>
      <Button aria-label="toggle" onClick={handleToggle}>
        {title}
      </Button>
      <Expand expand={toggle}>
        <div>{children}</div>
      </Expand>
    </>
  );
};
