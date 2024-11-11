import { ReactNode, useEffect } from "react";
import { animationFadeInUp } from "../constants/styles";

export const Page = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return <div style={animationFadeInUp}>{children}</div>;
};
