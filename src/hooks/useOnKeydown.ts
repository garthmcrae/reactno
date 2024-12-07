import { useEffect } from "react";

export const useOnKeydown = (
  key: string,
  handler: () => void,
  condition: () => boolean = () => true,
) => {
  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.code === key && condition()) {
        handler();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [handler]);
}