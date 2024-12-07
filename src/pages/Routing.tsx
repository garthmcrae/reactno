import { Box } from "../components/Box.tsx";
import { Code } from "../components/Code.tsx";
import { Container } from "../components/Container.tsx";
import { Heading } from "../components/Heading.tsx";
import { Page } from "../components/Page.tsx";
import { Banner } from "../components/Banner.tsx";
import { Paragraph } from "../components/Paragraph.tsx";

import { Articles } from "../layout/Articles.tsx";

import { Object, hyperboloid } from "../components/Object.tsx";

import routerRaw from "../components/Router.tsx?raw";
import routesRaw from "../Routes.tsx?raw";
import useGoToPathnameRaw from "../hooks/useGoToPathname.ts?raw";
import useWindowLocationPathnameRaw from "../hooks/useWindowLocationPathname.ts?raw";
import windowLocationPathnameContextRaw from "../contexts/WindowLocationPathnameContext.tsx?raw";

import { styling, examples, thoughts } from "../constants/articles.tsx";

export const Routing = () => {
  return (
    <Page>
      <Container>
        <Banner>
          <Box>
            <Object>{hyperboloid}</Object>
          </Box>
          <Box>
            <Heading element="h1" style={{ fontSize: 32 }}>
              /routing/
            </Heading>
          </Box>
        </Banner>
        <Box>
          <Heading>Page found</Heading>
        </Box>
        <Box>
          <Paragraph style={{ marginTop: 0 }}>
            Routing allows users to link to pages and navigate to and from pages
            within an application.
          </Paragraph>
          <Paragraph style={{ marginBottom: 0 }}>
            To do this a context provides the window's location pathname and
            also listens to the popstate event to update the pathname when a
            user navigates back and forth using the browser controls.
          </Paragraph>
        </Box>
        <Box>
          <Heading style={{ fontSize: 12, marginBottom: 8 }}>
            WindowLocationPathnameContext.tsx
          </Heading>
          <Code>{windowLocationPathnameContextRaw}</Code>
        </Box>
        <Box>
          <Paragraph style={{ marginBottom: 0, marginTop: 0 }}>
            Wrapping this in a hook to reduce number of imports required where
            consumed.
          </Paragraph>
        </Box>
        <Box>
          <Heading style={{ fontSize: 12, marginBottom: 8 }}>
            useWindowLocationPathname.ts
          </Heading>
          <Code>{useWindowLocationPathnameRaw}</Code>
        </Box>
        <Box>
          <Paragraph style={{ marginBottom: 0, marginTop: 0 }}>
            The routes component returns a child based on the current pathname.
            If no pathname exists it will route users to a 'not found' pathname.
          </Paragraph>
        </Box>
        <Box>
          <Heading style={{ fontSize: 12, marginBottom: 8 }}>
            Routes.tsx
          </Heading>
          <Code>{routesRaw}</Code>
        </Box>
        <Box>
          <Paragraph style={{ marginBottom: 0, marginTop: 0 }}>
            Usage as follows.
          </Paragraph>
        </Box>
        <Box>
          <Heading style={{ fontSize: 12, marginBottom: 8 }}>
            Router.tsx
          </Heading>
          <Code>{routerRaw}</Code>
        </Box>
        <Box>
          <Paragraph style={{ marginTop: 0 }}>
            Note the trailing slashes — by default browsers add the trailing
            slash to pathnames on refresh. Defining paths with trailing slashes
            prevents the need to have additional logic to handle trailing
            slashes.
          </Paragraph>
          <Paragraph style={{ marginBottom: 0 }}>
            The following can be used in conjunction with an anchor or called
            with a string for example on click or form submission to send a user
            to a different route.
          </Paragraph>
        </Box>
        <Box>
          <Heading style={{ fontSize: 12, marginBottom: 8 }}>
            useGoToPathname.ts
          </Heading>
          <Code>{useGoToPathnameRaw}</Code>
        </Box>
        <Box>
          <Heading>Articles</Heading>
        </Box>
        <Box>
          <Articles>{[styling, examples, thoughts]}</Articles>
        </Box>
      </Container>
    </Page>
  );
};
