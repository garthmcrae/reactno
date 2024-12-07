import { Box } from "../components/Box";
import { Code } from "../components/Code";
import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { Page } from "../components/Page";
import { Banner } from "../components/Banner";
import { Paragraph } from "../components/Paragraph";

import { Articles } from "../layout/Articles";

import { Object, plane } from "../components/Object";

import buildRaw from "../build.txt?raw";

import { root, routing, styling } from "../constants/articles";

export const Thoughts = () => {
  return (
    <Page>
      <Container>
        <Banner>
          <Box>
            <Object>{plane}</Object>
          </Box>
          <Box>
            <Heading element="h1" style={{ fontSize: 32 }}>
              /thoughts/
            </Heading>
          </Box>
        </Banner>
        <Box>
          <Heading>Reactions</Heading>
        </Box>
        {/* <Box>
          <FlexContainer breakpoint={834}>
            <FlexItem>
              <Card href="https://preactjs.com" target="_blank">
                <div style={{ marginBottom: 16 }}>
                  <Pyramid />
                </div>
                <Heading element="h3" style={{ fontSize: 12, marginBottom: 8 }}>https://preactjs.com</Heading>
                <Paragraph style={{ marginBottom: 0, marginTop: 0}}>
                  Fast 3kB alternative to React with the same modern API
                </Paragraph>
              </Card>
            </FlexItem>
            <FlexItem>
              <Card href="https://vitejs.dev" target="_blank">
                <div style={{ marginBottom: 16 }}>
                  <Pyramid />
                </div>
                <Heading element="h3" style={{ fontSize: 12, marginBottom: 8 }}>https://vitejs.dev</Heading>
                <Paragraph style={{ marginBottom: 0, marginTop: 0}}>
                  Vite Next Generation Frontend Tooling
                </Paragraph>
              </Card>
            </FlexItem>
            <FlexItem>
              <Card href="https://rollupjs.org" target="_blank">
                <div style={{ marginBottom: 16 }}>
                  <Pyramid />
                </div>
                <Heading element="h3" style={{ fontSize: 12, marginBottom: 8 }}>https://rollupjs.org</Heading>
                <Paragraph style={{ marginBottom: 0, marginTop: 0}}>
                  rollup.js The JavaScript module bundler
                </Paragraph>
              </Card>
            </FlexItem>
          </FlexContainer>
        </Box> */}
        {/* <Box>
          <FlexContainer breakpoint={834}>
            <FlexItem>
              <Card
                href="https://developer.mozilla.org/docs/Web/API/HTMLElement/style"
                target="_blank"
              >
                <div style={{ marginBottom: 16 }}>
                  <Pyramid />
                </div>
                <Heading element="h3" style={{ fontSize: 12, marginBottom: 8 }}>https://developer.mozilla.org</Heading>
                <Paragraph style={{ marginBottom: 0, marginTop: 0}}>
                  HTMLElement: style property
                </Paragraph>
              </Card>
            </FlexItem>
            <FlexItem>
              <Card
                href="https://www.youtube.com/watch?v=1gZmkpsVGkk/"
                target="_blank"
              >
                <div style={{ marginBottom: 16 }}>
                  <Pyramid />
                </div>
                <Heading element="h3" style={{ fontSize: 12, marginBottom: 8 }}>Theo - t3.gg</Heading>
                <Paragraph style={{ marginBottom: 0, marginTop: 0}}>
                  CSS Is 2.4x Slower Than Inline Styles (Oh No...)
                </Paragraph>
              </Card>
            </FlexItem>
            <FlexItem>
              <Card
                href="https://medium.com/@davidyf96/how-to-use-media-queries-in-javascript-6489d46822d8"
                target="_blank"
              >
                <div style={{ marginBottom: 16 }}>
                  <Pyramid />
                </div>
                <Heading element="h3" style={{ fontSize: 12, marginBottom: 8 }}>David el Yosef</Heading>
                <Paragraph style={{ marginBottom: 0, marginTop: 0}}>
                  How to use media queries in JavaScript?
                </Paragraph>
              </Card>
            </FlexItem>
          </FlexContainer>
        </Box> */}
        <Box>
          <Paragraph style={{ marginTop: 0 }}>
            Worth noting this came together really quickly. I think it's because
            I never had to switch gears between the TS(X) and CSS you just write
            components.
          </Paragraph>
          <Paragraph style={{ marginBottom: 0 }}>
            I'm running the following to write the build output to a file so we
            can see what size the final built files are. As you can see it's
            **** all.
          </Paragraph>
        </Box>
        <Box>
          <Code>{"npm run build > src/build.txt"}</Code>
        </Box>
        <Box>
          <Code>{buildRaw}</Code>
        </Box>
        <Box>
          <Heading>Articles</Heading>
        </Box>
        <Box>
          <Articles>{[root, routing, styling]}</Articles>
        </Box>
      </Container>
    </Page>
  );
};
