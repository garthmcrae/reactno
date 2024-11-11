import { ObjectContainer } from "./ObjectContainer";
import { ObjectSlice } from "./ObjectSlice";

export const Pyramid = () => {
  return (
    <ObjectContainer>
      {[-50, -40, -30, -20, -10, 0, 10, 20, 30, 40, 50].map((position) => {
        const size = `${
          position < 0 ? 50 - Math.abs(position) : 50 + position
        }%`;
        return (
          <ObjectSlice
            key={position}
            style={{
              height: size,
              transform: `translateZ(${position - 20}px)`,
              width: size,
            }}
          />
        );
      })}
    </ObjectContainer>
  );
};
