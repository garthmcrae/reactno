import { Box } from "../components/Box";
import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { Page } from "../components/Page";
import { PageBanner } from "../components/PageBanner";
import { Paragraph } from "../components/Paragraph";
import { Void } from "../objects/Void";

export function NotFound() {
  return (
    <Page>
      <Container>
        <PageBanner>
          <Box>
            <Void />
          </Box>
          <Box>
            <Heading scale={2}>****</Heading>
          </Box>
        </PageBanner>
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
