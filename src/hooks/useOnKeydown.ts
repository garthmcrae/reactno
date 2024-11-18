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
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [handler]);
}