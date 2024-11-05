import { Cards } from "../cards/Cards";
import { Thoughts } from "../cards/Thoughts";
import { Root } from "../cards/Root";
import { Routing } from "../cards/Routing";

import { Alert } from "../components/Alert";
import { Box } from "../components/Box";
import { Button } from "../components/Button";
import { Code } from "../components/Code";
import { Container } from "../components/Container";
import { Expander } from "../components/Expander";
import { Heading } from "../components/Heading";
import { Label } from "../components/Label";
import { Modal } from "../components/Modal";
import { Page } from "../components/Page";
import { PageBanner } from "../components/PageBanner";
import { Paragraph } from "../components/Paragraph";
import { Image } from "../components/Image";
import { Void } from "../objects/Void";

import ControlRaw from "../components/Control.tsx?raw";
import focusTrapRaw from "../components/FocusTrap.tsx?raw";
import modalRaw from "../components/Modal.tsx?raw";
import imageRaw from "../components/Image.tsx?raw";
import hyperboloidRaw from "../objects/Hyperboloid.tsx?raw";

export function Components() {
  return (
    <Page>
      <Container>
        <PageBanner>
          <Box>
            <Void />
          </Box>
          <Box>
            <Heading scale={2}>COMPONENTS</Heading>
          </Box>
        </PageBanner>
        <Box>
          <Heading>Overreact</Heading>
        </Box>
        <Box>
          <Paragraph>
            Examples of a few components and placeholders for a few to come. All
            to date can be viewed on my Github.
          </Paragraph>
        </Box>
        <Box>
          <Label>Alert</Label>
          <Alert>
            <Box>
              <Label element="h3">Alert</Label>
              <Paragraph first last>
                This is an alert.
              </Paragraph>
            </Box>
          </Alert>
        </Box>
        <Box>
          <Label>Alert dismissable</Label>
          <Alert dismissable>
            <Box>
              <Label element="h3">Alert</Label>
              <Paragraph first last>
                This is a dismissable alert.
              </Paragraph>
            </Box>
          </Alert>
        </Box>
        <Box>
          <Label>Button</Label>
          <Button aria-label="example">Click me</Button>
        </Box>
        <Box>
          <Label>Control</Label>
          <Paragraph>
            A generic component calling `useAtMediaMinWidth` with given styles.
            This component can be used to control layout behaviour.
          </Paragraph>
          <Label element="h3">Control.tsx</Label>
          <Code>{ControlRaw}</Code>
        </Box>
        <Box>
          <Label>Drawer</Label>
          <Paragraph>...</Paragraph>
        </Box>
        <Box>
          <Label>Expander</Label>
          <Expander title="Expander">
            <Paragraph>...</Paragraph>
          </Expander>
        </Box>
        <Box>
          <Label>Images</Label>
          <Paragraph first last>
            Not in the bundle. Not blocking. Worth a thought but not more as it
            is a seperate topic — just be considerate as there is no point in
            optimising your code if you are just going to dump huge assets about
            the place.
          </Paragraph>
        </Box>
        <Box>
          <Label>Image.tsx</Label>
          <Code>{imageRaw}</Code>
        </Box>
        <Box>
          <Label>1+ MB image</Label>
          <Image
            url={
              "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=3011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </Box>
        <Box>
          <Label>Label</Label>
          <Paragraph>
            The label above this text is the Label component.
          </Paragraph>
        </Box>
        <Box>
          <Label>Menu</Label>
          <Paragraph>...</Paragraph>
        </Box>
        <Box>
          <Label>Modals</Label>
          <Modal name="the modal">
            <Box>
              <Heading>Thoughts on modals</Heading>
            </Box>
            <Box>
              <Paragraph first>
                How appropriate to document a modal in a modal.
              </Paragraph>
              <Paragraph last>
                I've always heard modals are complex and have a lot of
                consdierations to cater for accessibility. This is true and I've
                always reached for libraries. That being said it has also
                prevented me from ever interacting with React's portals and ever
                reviewing and implementing focus traps myself.
              </Paragraph>
            </Box>
            <Box>
              <Label>Modal.tsx</Label>
              <Code>{modalRaw}</Code>
            </Box>
            <Box>
              <Paragraph first>
                Maybe less complicated than I thought. To be honest the React
                documentation on portals was great and made this a pretty
                trivial task.
              </Paragraph>
              <Paragraph last>
                But what about nesting modals I hear you say? So we can
                conceptially navigate deeper rather than laterally to another
                page? With focus traps this actually works pretty well (even
                though I took more time than I would like on the scenario where
                you have a button at the bottom of a modal in a nested modal
                with a focus trap)
              </Paragraph>
            </Box>
            <Box>
              <Modal nested name="Nested modal">
                <Box>
                  <Heading>Nested modal title</Heading>
                </Box>
                <Box>
                  <Paragraph first>
                    Because we all love a nested modal.
                  </Paragraph>
                  <Paragraph last>
                    When I first saw this it icked me. Now after working with it
                    and debugging and amending a few things I'm okay with this.
                  </Paragraph>
                </Box>
                <Box>
                  <Label>FocusTrap.tsx</Label>
                  <Code>{focusTrapRaw}</Code>
                </Box>
                <Box>
                  <Alert>
                    <Box>
                      <Label element="h3">Warning</Label>
                      <Paragraph first last>
                        There is a bug with this nested modal where the fixed
                        scroll position is removed for both modals when you
                        close the nested modal.
                      </Paragraph>
                    </Box>
                  </Alert>
                </Box>
              </Modal>
            </Box>
          </Modal>
        </Box>
        <Box>
          <Label>Paragraph</Label>
          <Paragraph>This text is the Paragraph component.</Paragraph>
        </Box>
        <Box>
          <Label>Graphics</Label>
          <Paragraph first last>
            The header and card are not GIFs would you believe. All the styles
            are inline CSS properties with the exception of the keyframe
            animations. Pretty cool.
          </Paragraph>
        </Box>
        <Box>
          <Label>Hyperboloid.tsx</Label>
          <Code>{hyperboloidRaw}</Code>
        </Box>
        <Box>
          <Heading>Articles</Heading>
        </Box>
        <Box>
          <Cards>{[<Thoughts />, <Root />, <Routing />]}</Cards>
        </Box>
      </Container>
    </Page>
  );
}
