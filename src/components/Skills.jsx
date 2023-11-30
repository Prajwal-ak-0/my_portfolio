/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
// /* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
// /* eslint-disable react/no-unknown-property */
// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { Sphere } from "@react-three/drei";
// import { useTexture } from "@react-three/drei";
// import { OrbitControls, Preload } from "@react-three/drei";
// import CanvasLoader from "./Loader";

// // Replace this with your actual technology icons
// import { technologies } from "../assets/tech";

// // Star component
// const Star = ({ position, icon }) => {
//     const { texture } = useTexture('../assets/tech/figma.png');

//     console.log('Texture:', texture);

//     return (
//         <Sphere args={[0.1, 32, 32]} position={position} castShadow>
//             <meshBasicMaterial attach="material" map={texture} />
//         </Sphere>
//     );
// };

// // StarConstellation component
// const StarConstellation = () => {
//     // Generate random star positions based on the number of technologies
//     const starsPositions = generateStarsPositions(technologies.length);

//     return (
//         <div className="h-[300px] mx-12">
//             <Canvas frameloop="demand" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
//                 <Suspense fallback={<CanvasLoader />}>
//                     <OrbitControls enableZoom={false} />

//                     {technologies.map((tech, index) => (
//                         <Star key={index} position={starsPositions[index]} icon={tech.icon} />
//                     ))}
//                 </Suspense>

//                 <Preload all />
//             </Canvas>
//         </div>
//     );
// };

// // Helper function to generate random star positions
// const generateStarsPositions = (count) => {
//     const positions = [];

//     for (let i = 0; i < count; i++) {
//         const x = (Math.random() - 0.5) * 10; // Increased the range to spread stars
//         const y = (Math.random() - 0.5) * 10;
//         const z = (Math.random() - 0.5) * 10;

//         positions.push([x, y, z]);
//     }

//     return positions;
// };

// export default StarConstellation;



import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "./Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
