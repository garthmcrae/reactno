import { ObjectContainer } from "./ObjectContainer";
import { ObjectSlice } from "./ObjectSlice";

export const Plane = () => {
  return (
    <ObjectContainer>
      <ObjectSlice
        style={{
          height: 100,
          width: 100,
        }}
      />
    </ObjectContainer>
  );
};
