import { ObjectContainer } from "./ObjectContainer";
import { ObjectSlice } from "./ObjectSlice";

export const Cube = () => {
  return (
    <ObjectContainer>
      {[-50, -40, -30, -20, -10, 0, 10, 20, 30, 40, 50].map((position) => (
        <ObjectSlice
          key={position}
          style={{
            height: 100,
            transform: `translateZ(${position}px)`,
            width: 100,
          }}
        />
      ))}
    </ObjectContainer>
  );
};
