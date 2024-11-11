import { ObjectContainer } from "./ObjectContainer";
import { ObjectSlice } from "./ObjectSlice";

export const Void = () => {
  return (
    <ObjectContainer>
      {[-50, 50].map((position) => (
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
