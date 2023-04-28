import "./index.css";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Model from "./Model";

function App() {
  return (
    <>
      <Canvas
        shadows="basic"
        style={{
          backgroundColor: "#999999",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1.25} />
          <directionalLight intensity={0.4} />
          <Model />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
