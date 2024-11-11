import { Layout } from "./layout/Layout";
import { WindowInnerWidthContextProvider } from "../contexts/WindowInnerWidthContext";
import { WindowLocationPathnameContextProvider } from "../contexts/WindowLocationPathnameContext";
import { Routes } from "./Routes";

export function Application() {
  return (
    <WindowLocationPathnameContextProvider>
      <WindowInnerWidthContextProvider>
        <Layout>
          <Routes />
        </Layout>
      </WindowInnerWidthContextProvider>
    </WindowLocationPathnameContextProvider>
  );
}
