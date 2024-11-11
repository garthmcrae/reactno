import { CardLayout } from "./CardLayout";
import { Card } from "../../components/Card";
import { Plane } from "../objects/Plane";
import { useGoToPathname } from "../../hooks/useGoToPathname";

export const Thoughts = () => {
  const goToPathname = useGoToPathname();
  return (
    <Card href="/thoughts/" onClick={goToPathname}>
      <CardLayout label="/thoughts/" object={<Plane />} paragraph="Reactions" />
    </Card>
  );
};
