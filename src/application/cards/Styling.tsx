import { CardLayout } from "./CardLayout";
import { Card } from "../../components/Card";
import { Octohedron } from "../objects/Octohedron";
import { useGoToPathname } from "../../hooks/useGoToPathname";

export const Styling = () => {
  const goToPathname = useGoToPathname();
  return (
    <Card href="/styling/" onClick={goToPathname}>
      <CardLayout
        label="/styling/"
        object={<Octohedron />}
        paragraph="Get inline"
      />
    </Card>
  );
};
