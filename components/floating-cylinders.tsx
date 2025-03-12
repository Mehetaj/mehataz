"use client";

import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics, usePlane, useCylinder } from "@react-three/cannon";
import { Environment } from "@react-three/drei";

type CylinderProps = {
  position: [number, number, number];
  color?: string;
};

function Cylinder({ position, color = "white" }: CylinderProps) {
  const [ref] = useCylinder(() => ({
    mass: 1,
    position: position,
    rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
    args: [0.3, 0.3, 1.5, 16],
  }));

  return (
    <mesh ref={ref} castShadow receiveShadow>
      <cylinderGeometry args={[0.3, 0.3, 1.5, 16]} />
      <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} />
    </mesh>
  );
}

type PlaneProps = {
  position: [number, number, number];
  rotation?: [number, number, number];
  color: string;
};

function Plane({ color, ...props }: PlaneProps) {
  const [ref] = usePlane(() => ({ ...props }));
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color={color} transparent opacity={0} />
    </mesh>
  );
}

function Scene() {
  const mouse = useRef<[number, number]>([0, 0]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current = [
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1,
      ];
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const cylinders = [];
  const colors = ["white", "white", "white", "#a3ff00", "#a3ff00", "black", "black"];
  for (let i = 0; i < 30; i++) {
    const x = (Math.random() - 0.5) * 10;
    const y = Math.random() * 20 + 10;
    const z = (Math.random() - 0.5) * 10;
    const color = colors[Math.floor(Math.random() * colors.length)];
    cylinders.push(<Cylinder key={i} position={[x, y, z]} color={color} />);
  }

  return (
    <Physics
      gravity={[0, -9.81, 0]}
      defaultContactMaterial={{ friction: 0.1, restitution: 0.7 }}
    >
      {cylinders}

      <Plane position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]} color="white" />
      <Plane position={[-10, 0, 0]} rotation={[0, Math.PI / 2, 0]} color="white" />
      <Plane position={[10, 0, 0]} rotation={[0, -Math.PI / 2, 0]} color="white" />
      <Plane position={[0, 0, -10]} rotation={[0, 0, 0]} color="white" />
      <Plane position={[0, 0, 10]} rotation={[0, Math.PI, 0]} color="white" />
    </Physics>
  );
}

export function FloatingCylinders() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        shadows
        camera={{ position: [0, 5, 15], fov: 50 }}
        gl={{ antialias: true }}
      >
        <color attach="background" args={["#f5f5f5"]} />
        <fog attach="fog" args={["#f5f5f5", 10, 50]} />

        <ambientLight intensity={0.5} />
        <directionalLight
          castShadow
          position={[2.5, 8, 5]}
          intensity={1.5}
          shadow-mapSize={[1024, 1024]}
        >
          <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 10, 0.1, 50]} />
        </directionalLight>

        <Scene />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
