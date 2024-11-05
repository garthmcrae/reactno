import { Layout } from "./components/Layout";
import { WindowInnerWidthContextProvider } from "./contexts/WindowInnerWidthContext";
import { WindowLocationPathnameContextProvider } from "./contexts/WindowLocationPathnameContext";
import { Router } from "./Router";

export function App() {
  return (
    <WindowLocationPathnameContextProvider>
      <WindowInnerWidthContextProvider>
        <Layout>
          <Router />
        </Layout>
      </WindowInnerWidthContextProvider>
    </WindowLocationPathnameContextProvider>
  );
}
