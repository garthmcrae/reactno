import { ReactNode } from "react";

import { Alert } from "../components/Alert";
import { Box } from "../components/Box";
import { Code } from "../components/Code";
import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { Label } from "../components/Label";
import { Page } from "../components/Page";
import { Banner } from "../components/Banner";
import { Paragraph } from "../components/Paragraph";

import { Object, cube } from "../components/Object";

import { Articles } from "../layout/Articles";

import { routing, styling, components } from "../constants/articles";

import packageRaw from "../../package.json?raw";
import useGithubStars from "../hooks/useGithubStars";

const Strike = ({ children }: { children: ReactNode }) => (
  <span style={{ textDecoration: "line-through" }}>{children}</span>
);

export const Root = () => {
  const { stars } = useGithubStars("garthmcrae/reactno");
  return (
    <Page>
      <Container>
        <Banner>
          <Box>
            <Object>{cube}</Object>
          </Box>
          <Box>
            <Heading element="h1" scale={3}>
              /
            </Heading>
          </Box>
        </Banner>
        <Box>
          <Heading>Hello world</Heading>
        </Box>
        <Box>
          <Paragraph first>
            React No explores building a responsive React application without
            adding any <Strike>CSS in JS</Strike> packages.
          </Paragraph>
          <Paragraph last>
            If you need to build a lightweight and performant web application or
            web site and you are familiar with React this approach may be a
            viable solution for you. React No, **** **.
          </Paragraph>
        </Box>
        <Box>
          <Alert>
            <Box>
              <Label element="h2">Warning</Label>
              <Paragraph first last>
                React No is a work in progress and open to feedback. Please
                checkout Github for the code and star if you like the idea. This
                repository currently has {stars} stars. Thanks.
              </Paragraph>
            </Box>
          </Alert>
        </Box>
        <Box>
          <Paragraph first>
            For build we are using Vite the "next generation frontend tooling".
            It consists of a development server and "a build command that
            bundles your code with Rollup, pre-configured to output highly
            optimized static assets for production".
          </Paragraph>
          <Paragraph>
            Rollup is also "the JavaScript module bundler". If I was to publish
            any of the files from this project to NPM I would use Rollup to
            bundle the module.
          </Paragraph>
          <Paragraph last>
            Something I found really neat was Vite allows you to easily import
            raw files as a string so adding code examples to this project was a
            cinch, that being said when reviewing the bundle and testing I did
            observe that the string literals for the code aren't minified (which
            makes sense) and also render slowly.
          </Paragraph>
        </Box>
        <Box>
          <Label element="h3">Raw file import example</Label>
          <Code>{`
import packageRaw from "../../package.json?raw";
          `}</Code>
        </Box>
        <Box>
          <Label element="h3">package.json</Label>
          <Code>{packageRaw}</Code>
        </Box>
        <Box>
          <Paragraph first>
            React? No — this is a Preact project not a React project. Preact is
            a "fast 3kB alternative to React with the same modern API". For an
            additional ~2kB you can include a React compatibility layer which
            means at surface level components look identical and can be copied
            and used in either React or Preact projects.
          </Paragraph>
          <Paragraph last>
            Last but not least this project also uses TypeScript.
          </Paragraph>
        </Box>
        <Box>
          <Heading>Articles</Heading>
        </Box>
        <Box>
          <Articles>{[routing, styling, components]}</Articles>
        </Box>
      </Container>
    </Page>
  );
};
