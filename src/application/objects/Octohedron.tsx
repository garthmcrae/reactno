import { ObjectContainer } from "./ObjectContainer";
import { ObjectSlice } from "./ObjectSlice";

export const Octohedron = () => {
  return (
    <ObjectContainer>
      {[-50, -40, -30, -20, -10, 0, 10, 20, 30, 40, 50].map((position) => {
        const size = `${100 - Math.abs((position / 50) * 100)}%`;
        return (
          <ObjectSlice
            key={position}
            style={{
              height: size,
              transform: `translateZ(${position}px)`,
              width: size,
            }}
          />
        );
      })}
    </ObjectContainer>
  );
};
