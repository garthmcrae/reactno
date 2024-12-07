import { ReactNode } from "react";

import { Alert } from "../components/Alert";
import { Box } from "../components/Box";
import { Code } from "../components/Code";
import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { Page } from "../components/Page";
import { Banner } from "../components/Banner";
import { Paragraph } from "../components/Paragraph";

import { Object, cube } from "../components/Object";

import { Articles } from "../layout/Articles";

import { routing, styling, examples } from "../constants/articles";

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
            <Heading element="h1" style={{ fontSize: 32 }}>
              /
            </Heading>
          </Box>
        </Banner>
        <Box>
          <Heading>Hello world</Heading>
        </Box>
        <Box>
          <Paragraph style={{ marginTop: 0 }}>
            React No explores building a responsive React application without
            adding any <Strike>CSS in JS</Strike> packages.
          </Paragraph>
          <Paragraph style={{ marginBottom: 0 }}>
            If you need to build a lightweight and performant web application or
            web site and you are familiar with React this approach may be a
            viable solution for you.
          </Paragraph>
        </Box>
        <Box>
          <Alert>
            <Box>
              <Heading element="h1" style={{ fontSize: 12, marginBottom: 8 }}>
                Warning
              </Heading>
              <Paragraph style={{ marginBottom: 0, marginTop: 0 }}>
                React No is a work in progress and open to feedback. Please
                checkout Github for the code and star if you like the idea. This
                repository currently has {stars} stars. Thanks.
              </Paragraph>
            </Box>
          </Alert>
        </Box>
        <Box>
          <Paragraph style={{ marginTop: 0 }}>
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
          <Paragraph style={{ marginBottom: 0 }}>
            Something I found really neat was Vite allows you to easily import
            raw files as a string so adding code examples to this project was a
            cinch, that being said when reviewing the bundle and testing I did
            observe that the string literals for the code aren't minified (which
            makes sense) and also render slowly.
          </Paragraph>
        </Box>
        <Box>
          <Heading element="h3" style={{ fontSize: 12, marginBottom: 8 }}>
            Raw file import example
          </Heading>
          <Code>{`
import packageRaw from "../../package.json?raw";
          `}</Code>
        </Box>
        <Box>
          <Heading element="h3" style={{ fontSize: 12, marginBottom: 8 }}>
            package.json
          </Heading>
          <Code>{packageRaw}</Code>
        </Box>
        <Box>
          <Paragraph style={{ marginTop: 0 }}>
            React? No — this is a Preact project not a React project. Preact is
            a "fast 3kB alternative to React with the same modern API". For an
            additional ~2kB you can include a React compatibility layer which
            means at surface level components look identical and can be copied
            and used in either React or Preact projects.
          </Paragraph>
          <Paragraph style={{ marginBottom: 0 }}>
            Last but not least this project also uses TypeScript.
          </Paragraph>
        </Box>
        <Box>
          <Heading>Articles</Heading>
        </Box>
        <Box>
          <Articles>{[routing, styling, examples]}</Articles>
        </Box>
      </Container>
    </Page>
  );
};
