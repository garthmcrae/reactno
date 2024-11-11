import { CardLayout } from "./CardLayout";
import { Card } from "../../components/Card";
import { Cube } from "../objects/Cube";
import { useGoToPathname } from "../../hooks/useGoToPathname";

export const Root = () => {
  const goToPathname = useGoToPathname();
  return (
    <Card href="/" onClick={goToPathname}>
      <CardLayout label="/" object={<Cube />} paragraph="Hello world" />
    </Card>
  );
};
