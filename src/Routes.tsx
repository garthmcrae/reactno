import { Router } from "./components/Router";

import { Components } from "./pages/Components";
import { NotFound } from "./pages/NotFound";
import { Thoughts } from "./pages/Thoughts";
import { Root } from "./pages/Root";
import { Routing } from "./pages/Routing";
import { Styling } from "./pages/Styling";

export const Routes = () => {
  return (
    <Router>
      {{
        "/": <Root />,
        "/components/": <Components />,
        "/thoughts/": <Thoughts />,
        "/routing/": <Routing />,
        "/styling/": <Styling />,
        "/not-found/": <NotFound />,
      }}
    </Router>
  );
};
