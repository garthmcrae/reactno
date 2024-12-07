import { Router } from "./components/Router";

import { Examples } from "./pages/Examples";
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
        "/examples/": <Examples />,
        "/thoughts/": <Thoughts />,
        "/routing/": <Routing />,
        "/styling/": <Styling />,
        "/not-found/": <NotFound />,
      }}
    </Router>
  );
};
