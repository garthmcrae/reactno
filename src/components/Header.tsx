import { CSSProperties } from "react";
import { Container } from "../components/Container";
import { Drawer } from "../components/Drawer";
import { Label } from "../components/Label";
import { Link } from "../components/Link";
import { useGoToPathname } from "../hooks/useGoToPathname";
import { border, fadeInUp } from "../styles";

const brand: CSSProperties = {
  backgroundColor: "var(--color)",
  ...border,
  color: "var(--background-color)",
  display: "block",
  fontSize: 32,
  paddingBottom: 8,
  paddingLeft: 16,
  paddingRight: 16,
  paddingTop: 8,
  textAlign: "center",
  textDecoration: "none",
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
  color: "inherit",
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
              **** **
            </a>
            <div style={{ marginLeft: "auto" }}>
              <Drawer>
                <Label id="nav-heading">Site navigation</Label>
                <ul style={list}>
                  {[
                    "/",
                    "/routing/",
                    "/styling/",
                    "/components/",
                    "/thoughts/",
                  ].map((item, index) => (
                    <li
                      style={{
                        ...fadeInUp,
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
                      ...fadeInUp,
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
        </Container>
      </header>
    </>
  );
};
