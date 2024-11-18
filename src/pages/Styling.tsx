import { Box } from "../components/Box";
import { Code } from "../components/Code";
import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { Label } from "../components/Label";
import { Page } from "../components/Page";
import { Banner } from "../components/Banner";
import { Paragraph } from "../components/Paragraph";

import { Articles } from "../layout/Articles";

import { Object, octohedron } from "../components/Object";

import atMediaMinWidthRaw from "../logic/atMediaMinWidth.ts?raw";
import headingRaw from "../components/Heading.tsx?raw";
import windowInnerWidthContextRaw from "../contexts/WindowInnerWidthContext.tsx?raw";
import useAtMediaMinWidthRaw from "../hooks/useAtMediaMinWidth.ts?raw";
import useWindowInnerWidthRaw from "../hooks/useWindowInnerWidth.ts?raw";

import { components, thoughts, root } from "../constants/articles";

export const Styling = () => {
  return (
    <Page>
      <Container>
        <Banner>
          <Box>
            <Object>{octohedron}</Object>
          </Box>
          <Box>
            <Heading element="h1" scale={3}>
              /styling/
            </Heading>
          </Box>
        </Banner>
        <Box>
          <Heading>Get inline</Heading>
        </Box>
        <Box>
          <Paragraph first>
            The style property has limitations, including media queries and
            targeting pseudo or descendant elements. However, in (J/T)SX, we can
            apply styles to any elements directly, making the selection of
            descendant elements less of an issue. Our main focus remains on
            achieving responsive behavior.
          </Paragraph>
          <Paragraph>
            Also worth noting that the objective isn't to completely remove the
            need for styling. Some global styles and keyframe animations are
            included in this project in a style tag in the index HTML.
          </Paragraph>
          <Paragraph last>
            To handle returning styles at different window widths a context is
            used to provide the window's inner width.
          </Paragraph>
        </Box>
        <Box>
          <Label>WindowInnerWidthContext.tsx</Label>
          <Code>{windowInnerWidthContextRaw}</Code>
        </Box>
        <Box>
          <Paragraph first last>
            Wrapping this in a hook to reduce number of imports required where
            consumed.
          </Paragraph>
        </Box>
        <Box>
          <Label>useWindowInnerWidth.ts</Label>
          <Code>{useWindowInnerWidthRaw}</Code>
        </Box>
        <Box>
          <Paragraph first last>
            At media return an object of styles based on a defined minimum
            value.
          </Paragraph>
        </Box>
        <Box>
          <Label>atMediaMinWidth.ts</Label>
          <Code>{atMediaMinWidthRaw}</Code>
        </Box>
        <Box>
          <Paragraph first last>
            Styles are filtered and reduced, allowing properties to be defined
            using a mobile-first approach without duplicate declarations.
          </Paragraph>
        </Box>
        <Box>
          <Label>useAtMediaMinWidth.ts</Label>
          <Code>{useAtMediaMinWidthRaw}</Code>
        </Box>
        <Box>
          <Paragraph first last>
            Wrapping both these in a hook to reduce the number of imports
            required when consumed.
          </Paragraph>
        </Box>
        <Box>
          <Label>Heading.tsx</Label>
          <Code>{headingRaw}</Code>
        </Box>
        <Box>
          <Paragraph first>
            Breakpoints can also be exposed as a property so you can pass in the
            minimum width you want a component to respond on a case by case
            basis.
          </Paragraph>
          <Paragraph last>
            When authoring styles, avoid nesting properties within a single
            object. While it might seem convenient to name object properties
            freely, keep in mind that the resulting bundle will only minify the
            name of the object itself, not any of its nested properties. This
            can lead to a larger build output.
          </Paragraph>
        </Box>
        <Box>
          <Label>Example</Label>
          <Code>{`
// DO THIS
const elementStyles: CSSProperties = {
  padding: 16,
};

// NOT THIS
const styles: CSSProperties = {
  elementStyles: {
    padding: 16,
  },
};
            `}</Code>
        </Box>
        <Box>
          <Paragraph first last>
            Consistent sort orders make it easier for built files to be
            compressed. Editors have formatting to sort selections in ascending
            order which makes this low effort.
          </Paragraph>
        </Box>
        <Box>
          <Heading>Articles</Heading>
        </Box>
        <Box>
          <Articles>{[components, thoughts, root]}</Articles>
        </Box>
      </Container>
    </Page>
  );
};
