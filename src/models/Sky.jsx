/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import Alien from "../assets/3d/alien.glb";

export function SkyBackGround() {
  const { nodes, materials } = useGLTF(Alien);
  const modelRef = useRef();

  useFrame(() => {
    modelRef.current.rotation.y += 0.001;
  });

  return (
    <group ref={modelRef}  scale={[70, 70, 70]} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pack1_Background_0.geometry}
        material={materials.Background}
        scale={0.01}
      />
    </group>
  );
}
