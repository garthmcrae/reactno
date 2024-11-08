import { Cards } from "../cards/Cards";
import { Root } from "../cards/Root";
import { Routing } from "../cards/Routing";
import { Styling } from "../cards/Styling";

import { Box } from "../components/Box";
import { Code } from "../components/Code";
import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { Page } from "../components/Page";
import { Banner } from "../components/Banner";
import { Paragraph } from "../components/Paragraph";

import { Plane } from "../objects/Plane";

import buildRaw from "../build.txt?raw";

export function Thoughts() {
  return (
    <Page>
      <Container>
        <Banner>
          <Box>
            <Plane />
          </Box>
          <Box>
            <Heading element="h1" scale={3}>
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
                <Label element="h3">https://preactjs.com</Label>
                <Paragraph first last>
                  Fast 3kB alternative to React with the same modern API
                </Paragraph>
              </Card>
            </FlexItem>
            <FlexItem>
              <Card href="https://vitejs.dev" target="_blank">
                <div style={{ marginBottom: 16 }}>
                  <Pyramid />
                </div>
                <Label element="h3">https://vitejs.dev</Label>
                <Paragraph first last>
                  Vite Next Generation Frontend Tooling
                </Paragraph>
              </Card>
            </FlexItem>
            <FlexItem>
              <Card href="https://rollupjs.org" target="_blank">
                <div style={{ marginBottom: 16 }}>
                  <Pyramid />
                </div>
                <Label element="h3">https://rollupjs.org</Label>
                <Paragraph first last>
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
                <Label element="h3">https://developer.mozilla.org</Label>
                <Paragraph first last>
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
                <Label element="h3">Theo - t3.gg</Label>
                <Paragraph first last>
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
                <Label element="h3">David el Yosef</Label>
                <Paragraph first last>
                  How to use media queries in JavaScript?
                </Paragraph>
              </Card>
            </FlexItem>
          </FlexContainer>
        </Box> */}
        <Box>
          <Paragraph first>
            Worth noting this came together really quickly. I think it's because
            I never had to switch gears between the TS(X) and CSS you just write
            components.
          </Paragraph>
          <Paragraph last>
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
          <Cards>{[<Root />, <Routing />, <Styling />]}</Cards>
        </Box>
      </Container>
    </Page>
  );
}
