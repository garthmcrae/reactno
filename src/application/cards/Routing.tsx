import { CardLayout } from "./CardLayout";
import { Card } from "../../components/Card";
import { Hyperboloid } from "../objects/Hyperboloid";
import { useGoToPathname } from "../../hooks/useGoToPathname";

export const Routing = () => {
  const goToPathname = useGoToPathname();
  return (
    <Card href="/routing/" onClick={goToPathname}>
      <CardLayout
        label="/routing/"
        object={<Hyperboloid />}
        paragraph="Page found"
      />
    </Card>
  );
};
