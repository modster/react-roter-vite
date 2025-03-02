import { Canvas } from "@react-three/fiber";

export const App = () => (
  <div className="size-full">
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight
        position={[-10, -10, -10]}
        decay={0}
        intensity={Math.PI}
      />
      <mesh>
        <sphereGeometry />
        <meshStandardMaterial color="#333" />
      </mesh>
    </Canvas>
  </div>
);
