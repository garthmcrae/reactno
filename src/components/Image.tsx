import { useState, useEffect, CSSProperties } from "react";
import { HTMLImageConstructor } from "../constants/HTMLImageConstructor";

export const Image = ({ url }: { url: string }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const HTMLImage = new HTMLImageConstructor();
    HTMLImage.src = url;

    HTMLImage.onload = () => {
      setImageLoaded(true);
    };

    HTMLImage.onerror = () => {
      console.error("Error loading image");
    };

    return () => {
      HTMLImage.onload = null;
      HTMLImage.onerror = null;
    };
  }, [url]);
  const image: CSSProperties = {
    aspectRatio: "1 / 1",
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    opacity: imageLoaded ? 1 : 0,
    transition: "opacity 300ms ease-in-out",
    width: "100%",
  };
  return <div style={image} />;
};
