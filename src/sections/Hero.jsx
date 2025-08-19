import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense } from "react";
import HeroText from "../components/HeroText";
import ParallexBackground from "../components/ParallexBackground";
import { Astronaut } from "../components/Astronaut";
import { Float, OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import Loader from "../components/Loader";
import { easing } from 'maath'

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section className="flex items-start justify-center sm:items-start md:justify-start mih-h-screen overflow-hidden c-space">
      <HeroText />
      <ParallexBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={ <Loader/>}>
            <Float>
              <Astronaut
                scale={isMobile && 0.23}
                position={isMobile && [0, -1.5, 0]}
              />
            </Float>

            {/* <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            /> */}
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
  return null; 
}

export default Hero;
