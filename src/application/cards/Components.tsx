import { CardLayout } from "./CardLayout";
import { Card } from "../../components/Card";
import { Void } from "../objects/Void";
import { useGoToPathname } from "../../hooks/useGoToPathname";

export const Components = () => {
  const goToPathname = useGoToPathname();
  return (
    <Card href="/components/" onClick={goToPathname}>
      <CardLayout label="/components/" object={<Void />} paragraph="Children" />
    </Card>
  );
};
