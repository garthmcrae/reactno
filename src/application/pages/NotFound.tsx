import { Box } from "../../components/Box";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { Page } from "../../components/Page";
import { Banner } from "../../components/Banner";
import { Paragraph } from "../../components/Paragraph";
import { Void } from "../objects/Void";

export function NotFound() {
  return (
    <Page>
      <Container>
        <Banner>
          <Box>
            <Void />
          </Box>
          <Box>
            <Heading scale={2}>****</Heading>
          </Box>
        </Banner>
        <Box>
          <Paragraph>
            You have either navigated here directly or been redirected here
            because you entered an invalid route.
          </Paragraph>
        </Box>
      </Container>
    </Page>
  );
}
