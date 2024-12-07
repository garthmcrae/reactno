import { useState } from "react";
import { Alert } from "../components/Alert.tsx";
import { Box } from "../components/Box.tsx";
import { Button } from "../components/Button.tsx";
import Card from "../components/Card.tsx";
import { Close } from "../components/Close.tsx";
import { Code } from "../components/Code.tsx";
import { Container } from "../components/Container.tsx";
import { Expand } from "../components/Expand.tsx";
import { Heading } from "../components/Heading.tsx";
import { Icon, star } from "../components/Icon.tsx";
import { Modal } from "../components/Modal.tsx";
import { Object, field } from "../components/Object.tsx";
import { Page } from "../components/Page.tsx";
import { Banner } from "../components/Banner.tsx";
import { Paragraph } from "../components/Paragraph.tsx";
import { Image } from "../components/Image.tsx";

import { Articles } from "../layout/Articles.tsx";

import alertRaw from "../components/Alert.tsx?raw";
import atMediaMinWidthRaw from "../components/AtMediaMinWidth.tsx?raw";
import boxRaw from "../components/Box.tsx?raw";
import closeRaw from "../components/Close.tsx?raw";
import expandRaw from "../components/Expand.tsx?raw";
import focusTrapRaw from "../components/FocusTrap.tsx?raw";
import iconRaw from "../components/Icon.tsx?raw";
import imageRaw from "../components/Image.tsx?raw";
import modalRaw from "../components/Modal.tsx?raw";
import objectRaw from "../components/Object.tsx?raw";

import { thoughts, root, routing } from "../constants/articles.tsx";

export const Examples = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <Page>
      <Container>
        <Banner>
          <Box>
            <Object>{field}</Object>
          </Box>
          <Box>
            <Heading element="h1" style={{ fontSize: 32 }}>
              /examples/
            </Heading>
          </Box>
        </Banner>
        <Box>
          <Heading>Children</Heading>
        </Box>
        <Box>
          <Paragraph style={{ marginBottom: 0, marginTop: 0 }}>
            The point of this isn't to provide an exhaustive library of
            components — the point is to provide patterns that can be followed.
          </Paragraph>
        </Box>
        <Box>
          <Heading element="h3" style={{ fontSize: 16 }}>
            Alerts
          </Heading>
        </Box>
        <Box>
          <Paragraph style={{ marginBottom: 0, marginTop: 0 }}>
            Alerts can offer information and or feedback to users. This example
            shows how the styles for a shared border style and a flex layout are
            applied to positon the icon adjacent to content. Note the styles are
            declared outside of the function — objects defined within functions
            are always evaluated as new objects when a function is called on
            render.
          </Paragraph>
        </Box>
        <Box>
          <Code>{alertRaw}</Code>
        </Box>
        <Box>
          <Code>{`
<Alert>
  <Box>
    <Heading element="h3" style={{ fontSize: 12, marginBottom: 8 }}>Alert</Heading>
    <Paragraph style={{ marginBottom: 0, marginTop: 0 }}>
      This is an alert.
    </Paragraph>
  </Box>
</Alert>
          `}</Code>
        </Box>
        <Box>
          <Alert>
            <Box>
              <Heading element="h3" style={{ fontSize: 12, marginBottom: 8 }}>
                Alert
              </Heading>
              <Paragraph style={{ marginBottom: 0, marginTop: 0 }}>
                This is an alert.
              </Paragraph>
            </Box>
          </Alert>
        </Box>
        <Box>
          <Heading element="h3" style={{ fontSize: 16 }}>
            AtMediaMinWidth
          </Heading>
        </Box>
        <Box>
          <Paragraph style={{ marginBottom: 0, marginTop: 0 }}>
            A generic component calling `useAtMediaMinWidth` with given styles.
            This component can be used to control layout behaviour on a case by
            case basis.
          </Paragraph>
        </Box>
        <Box>
          <Code>{atMediaMinWidthRaw}</Code>
        </Box>
        <Box>
          <Code>{`
<AtMediaMinWidth
  style={{
    0: { display: "flex", flexDirection: "column", gap: 16 },
    [breakpoint]: { flexDirection: "row" },
  }}
>
  ...
</AtMediaMinWidth>
          `}</Code>
        </Box>
        <Box>
          <Heading element="h3" style={{ fontSize: 16 }}>
            Box
          </Heading>
        </Box>
        <Box>
          <Paragraph style={{ marginBottom: 0, marginTop: 0 }}>
            Boxes hold content and are the building blocks of layouts. All boxes
            have padding and in this case padding is adjusted for smaller screen
            sizes.
          </Paragraph>
        </Box>
        <Box>
          <Code>{boxRaw}</Code>
        </Box>
        <Box>
          <Code>{`
<Box>
  <Paragraph style={{ marginBottom: 0, marginTop: 0 }}>
    Boxes hold content and are the building blocks of layouts. All boxes
    have padding.
  </Paragraph>
</Box>
          `}</Code>
        </Box>
        <Box>
          <Heading element="h3" style={{ fontSize: 16 }}>
            Button
          </Heading>
        </Box>
        <Box>
          <Button onClick={() => alert("Hello, World!")}>Say hello</Button>
        </Box>
        <Box>
          <Code>{`
<Button onClick={() => alert("Hello, World!")}>Say hello</Button>
          `}</Code>
        </Box>
        <Box>
          <Heading element="h3" style={{ fontSize: 16 }}>
            Card
          </Heading>
        </Box>
        <Box>
          <Code>{`
<Card href="/">
  <Box>
    <Heading element="h4" style={{ fontSize: 16 }}>
      Link to home
    </Heading>
    <Paragraph style={{ marginBottom: 0 }}>
      Cards are clickable containers for other content. Use here for
      the articles at the end of pages.
    </Paragraph>
  </Box>
</Card>
          `}</Code>
        </Box>
        <Box>
          <Card href="/">
            <Box>
              <Heading element="h4" style={{ fontSize: 16 }}>
                Link to home
              </Heading>
              <Paragraph style={{ marginBottom: 0 }}>
                Cards are clickable containers for other content. Use here for
                the articles at the end of pages.
              </Paragraph>
            </Box>
          </Card>
        </Box>
        <Box>
          <Heading element="h3" style={{ fontSize: 16 }}>
            Close
          </Heading>
        </Box>
        <Box>
          <Code>{closeRaw}</Code>
        </Box>
        <Box>
          <Code>{`
<Close aria-label="dismiss" onClick={() => alert("Close!")} />
          `}</Code>
        </Box>
        <Box>
          <Close aria-label="dismiss" onClick={() => alert("Close!")} />
        </Box>
        <Box>
          <Heading element="h3" style={{ fontSize: 16 }}>
            Expand
          </Heading>
        </Box>
        <Box>
          <Code>{expandRaw}</Code>
        </Box>
        <Box>
          <Code>{`
<Box>
  <Button aria-label="toggle" onClick={() => setExpanded(!expanded)}>
    {expanded ? "Collapse" : "Expand"}
  </Button>
</Box>
<Expand expand={expanded}>
  <Box>
    <Alert>
      <Box>
        <Heading element="h3" style={{ fontSize: 12, marginBottom: 8 }}>Attention</Heading>
        <Paragraph style={{ marginBottom: 0, marginTop: 0 }}>
          This content has been expanded.
        </Paragraph>
      </Box>
    </Alert>
  </Box>
</Expand>
        `}</Code>
        </Box>
        <Box>
          <Button aria-label="toggle" onClick={() => setExpanded(!expanded)}>
            {expanded ? "Collapse" : "Expand"}
          </Button>
        </Box>
        <Expand expand={expanded}>
          <Box>
            <Alert>
              <Box>
                <Heading element="h3" style={{ fontSize: 12, marginBottom: 8 }}>
                  Attention
                </Heading>
                <Paragraph style={{ marginBottom: 0, marginTop: 0 }}>
                  This content has been expanded.
                </Paragraph>
              </Box>
            </Alert>
          </Box>
        </Expand>
        <Box>
          <Heading element="h3" style={{ fontSize: 16 }}>
            Icon
          </Heading>
        </Box>
        <Box>
          <Code>{iconRaw}</Code>
        </Box>
        <Box>
          <Code>{`
<Icon d={star} style={{ height: 20, width: 20 }} />
          `}</Code>
        </Box>
        <Box>
          <Icon d={star} style={{ height: 20, width: 20 }} />
        </Box>
        <Box>
          <Heading element="h3" style={{ fontSize: 16 }}>
            Images
          </Heading>
        </Box>
        <Box>
          <Paragraph style={{ marginBottom: 0, marginTop: 0 }}>
            Not in the bundle. Not blocking. Worth a thought but not more as it
            is a seperate topic — just be considerate as there is no point in
            optimising your code if you are just going to dump huge assets about
            the place.
          </Paragraph>
        </Box>
        <Box>
          <Code>{imageRaw}</Code>
        </Box>
        <Box>
          <Image
            alt="space"
            aspectRatio="1 / 1"
            src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=3011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </Box>
        <Box>
          <Heading element="h3" style={{ fontSize: 16 }}>
            Modals
          </Heading>
        </Box>
        <Box>
          <Modal button="Open modal">
            <Box>
              <Heading>Thoughts on modals</Heading>
            </Box>
            <Box>
              <Paragraph style={{ marginTop: 0 }}>
                How appropriate to document a modal in a modal.
              </Paragraph>
              <Paragraph style={{ marginBottom: 0 }}>
                I've always heard modals are complex and have a lot of
                consdierations to cater for accessibility. This is true and I've
                always reached for libraries. That being said it has also
                prevented me from ever interacting with React's portals and ever
                reviewing and implementing focus traps myself.
              </Paragraph>
            </Box>
            <Box>
              <Code>{modalRaw}</Code>
            </Box>
            <Box>
              <Paragraph style={{ marginTop: 0 }}>
                Maybe less complicated than I thought. To be honest the React
                documentation on portals was great and made this a pretty
                trivial task.
              </Paragraph>
              <Paragraph style={{ marginBottom: 0 }}>
                But what about nesting modals I hear you say? So we can
                conceptially navigate deeper rather than laterally to another
                page? With focus traps this actually works pretty well (even
                though I took more time than I would like on the scenario where
                you have a button at the bottom of a modal in a nested modal
                with a focus trap)
              </Paragraph>
            </Box>
            <Box>
              <Modal button="Nested modal" nested>
                <Box>
                  <Heading>Nested modal title</Heading>
                </Box>
                <Box>
                  <Paragraph style={{ marginTop: 0 }}>
                    Because we all love a nested modal.
                  </Paragraph>
                  <Paragraph style={{ marginBottom: 0 }}>
                    When I first saw this it icked me. Now after working with it
                    and debugging and amending a few things I'm okay with this.
                  </Paragraph>
                </Box>
                <Box>
                  <Code>{focusTrapRaw}</Code>
                </Box>
              </Modal>
            </Box>
          </Modal>
        </Box>
        <Box>
          <Heading element="h3" style={{ fontSize: 16 }}>
            Objects
          </Heading>
        </Box>
        <Box>
          <Paragraph style={{ marginBottom: 0, marginTop: 0 }}>
            The header and card are not GIFs would you believe. All the styles
            are inline CSS properties with the exception of the keyframe
            animations.
          </Paragraph>
        </Box>
        <Box>
          <Code>{objectRaw}</Code>
        </Box>
        <Box>
          <Heading>Articles</Heading>
        </Box>
        <Box>
          <Articles>{[thoughts, root, routing]}</Articles>
        </Box>
      </Container>
    </Page>
  );
};
