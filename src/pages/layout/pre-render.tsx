import * as Plot from "@observablehq/plot";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Box } from "./r3fiber";
import { Layout } from "./Layout";

export const PreRender = () => {
  const [data] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 26 },
    { name: "Charlie", age: 27 },
    { name: "Diana", age: 28 },
    { name: "Eve", age: 29 },
  ]);
  return (
    <Layout>
      <Canvas>
        <Box />
      </Canvas>
      <div>
        {data.map((person) => (
          <p key={person.name}>{person.name}: {person.age}</p>
        ))}
      </div>
    </Layout>
  );
};
