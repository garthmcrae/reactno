import { CSSProperties } from "react";
import { animationFadeInUp } from "../constants/styles";
import { Box } from "../components/Box";
import { Container } from "../components/Container";
import { Drawer } from "../components/Drawer";
import { Heading } from "../components/Heading";
import { Link } from "../components/Link";
import { Mode } from "../components/Mode";
import { useGoToPathname } from "../hooks/useGoToPathname";

const brand: CSSProperties = {
  backgroundColor: "var(--color)",
  color: "var(--background-color)",
  display: "block",
  fontSize: 32,
  paddingBottom: 8,
  paddingLeft: 16,
  paddingRight: 16,
  paddingTop: 8,
  textAlign: "center",
  textDecoration: "none",
  transition: "background-color 100ms ease-in-out, color 100ms ease-in-out",
};
const list: CSSProperties = {
  alignItems: "stretch",
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  gap: 8,
  listStyle: "none",
  marginBottom: 0,
  marginTop: 0,
  paddingInlineStart: 0,
};
const nav: CSSProperties = {
  alignItems: "flex-start",
  display: "flex",
  gap: 16,
  padding: 16,
};
const skip: CSSProperties = {
  color: "var(--color)",
  cursor: "pointer",
  display: "block",
  fontSize: 12,
  fontWeight: 700,
  lineHeight: 1,
  marginBottom: 0,
  marginLeft: 16,
  marginRight: "auto",
  marginTop: 16,
  paddingBottom: 2,
  paddingLeft: 2,
  paddingRight: 2,
  paddingTop: 2,
  textDecoration: "none",
  width: "max-content",
};

export const Header = () => {
  const goToPathname = useGoToPathname();
  return (
    <>
      <a style={skip} href="#content">
        Skip to content
      </a>
      <header>
        <Container>
          <nav style={nav} aria-describedby="nav-heading">
            <a style={brand} href="/">
              ***** **
            </a>
            <div style={{ display: "flex", marginLeft: "auto" }}>
              <Drawer>
                <Heading
                  id="nav-heading"
                  style={{ fontSize: 12, marginBottom: 8 }}
                >
                  Site navigation
                </Heading>
                <ul style={list}>
                  {[
                    "/",
                    "/routing/",
                    "/styling/",
                    "/examples/",
                    "/thoughts/",
                  ].map((item, index) => (
                    <li
                      style={{
                        ...animationFadeInUp,
                        animationDelay: `${index * 100}ms`,
                      }}
                      key={item}
                    >
                      <Link href={item} onClick={goToPathname}>
                        {item}
                      </Link>
                    </li>
                  ))}
                  <li
                    style={{
                      ...animationFadeInUp,
                      animationDelay: `${5 * 100}ms`,
                    }}
                  >
                    <Link href="https://github.com/garthmcrae/reactno">
                      github.com
                    </Link>
                  </li>
                </ul>
              </Drawer>
            </div>
          </nav>
          <Box>
            <Mode />
          </Box>
        </Container>
      </header>
    </>
  );
};
