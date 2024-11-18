import {
  Object,
  cube,
  field,
  hyperboloid,
  octohedron,
  plane,
} from "../components/Object";

export const root = {
  href: "/",
  label: "/",
  object: <Object>{cube}</Object>,
  paragraph: "Hello world",
};
export const routing = {
  href: "/routing/",
  label: "/routing/",
  object: <Object>{hyperboloid}</Object>,
  paragraph: "Page found",
};
export const styling = {
  href: "/styling/",
  label: "/styling/",
  object: <Object>{octohedron}</Object>,
  paragraph: "Get inline",
};
export const components = {
  href: "/components/",
  label: "/components/",
  object: <Object>{field}</Object>,
  paragraph: "Children",
};
export const thoughts = {
  href: "/thoughts/",
  label: "/thoughts/",
  object: <Object>{plane}</Object>,
  paragraph: "Reactions",
};
