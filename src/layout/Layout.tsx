import { CSSProperties, ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

const layout: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  maxWidth: "100%",
  minHeight: "100vh",
  overflow: "hidden",
};

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div style={layout}>
      <Header />
      <main id="content">{children}</main>
      <Footer />
    </div>
  );
};
