import { Router } from "../components/Router";

import { Components } from "./pages/Components";
import { NotFound } from "./pages/NotFound";
import { Thoughts } from "./pages/Thoughts";
import { Root } from "./pages/Root";
import { Routing } from "./pages/Routing";
import { Styling } from "./pages/Styling";

export function Routes() {
  return (
    <Router>
      {{
        "/": <Root />,
        "/components/": <Components />,
        "/not-found/": <NotFound />,
        "/thoughts/": <Thoughts />,
        "/routing/": <Routing />,
        "/styling/": <Styling />,
      }}
    </Router>
  );
}
