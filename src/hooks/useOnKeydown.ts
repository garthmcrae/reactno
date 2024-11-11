import { useEffect } from "react";

export const useOnKeydown = (
  key: string,
  handler: () => void
) => {
  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.code === key) {
        handler();
      }
      if (event.code === "Escape") {
        handler();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [handler]);
}