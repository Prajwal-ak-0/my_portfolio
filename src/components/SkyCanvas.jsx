/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { SkyBackGround } from "../models/Sky";
import { OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "./Loader";
const SkyCanvas = () => {
    return (
        <section className="w-full absolute -z-10 h-screen ">
            <Canvas >
                <Suspense fallback={<CanvasLoader/>}>
                    <spotLight
                        position={[10, 10, 10]}
                        angle={0.15}
                        penumbra={1}
                        intensity={1}
                        castShadow
                    />
                    <hemisphereLight
                        skyColor={"#ffffff"}
                        groundColor={"#ffffff"}
                        intensity={0.5}
                        position={[0, 50, 0]}
                    />
                    <OrbitControls
                        enableZoom={false}
                        maxPolarAngle={Math.PI / 2 - 0.1}
                        minPolarAngle={Math.PI / 2 - 0.1}
                    />
                    <SkyBackGround />
                </Suspense>
                <Preload all />
            </Canvas>
        </section>
    )
}

export default SkyCanvas