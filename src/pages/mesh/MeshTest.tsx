import { CameraControls } from "@react-three/drei";
const MeshTest = () => {
  return (
    <>
      <mesh rotation={[0.25, 0.25, 0.25]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhongMaterial color="slategrey" />
      </mesh>
      <CameraControls camera={{ enablePan: false }} />
    </>
  );
};

export default MeshTest;
