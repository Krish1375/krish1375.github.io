import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, TrackballControls } from '@react-three/drei';
import * as THREE from 'three';

const skills = [
  "Python", "SQL", "LangGraph", "LangChain", "LlamaIndex", 
  "AWS", "PySpark", "Snowflake", "Docker", "RAG", 
  "TensorFlow", "PyTorch", "XGBoost", "FastAPI", "Power BI",
  "LLM Evals", "Pydantic", "Kafka", "Kubernetes"
];

function Word({ children, position }) {
  const color = new THREE.Color();
  const fontProps = { fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false };
  const ref = useRef();
  const [hovered, setHovered] = React.useState(false);
  const over = (e) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);

  useFrame(() => {
    if (ref.current && ref.current.material) {
      ref.current.material.color.lerp(color.set(hovered ? '#0071e3' : '#1d1d1f'), 0.1);
    }
  });

  return (
    <Text ref={ref} onPointerOver={over} onPointerOut={out} position={position} {...fontProps}>
      {children}
    </Text>
  );
}

function Cloud({ count = 8, radius = 20 }) {
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    let i = 0;
    for (let i1 = 1; i1 < count + 1; i1++) {
      for (let i2 = 0; i2 < count; i2++) {
        const text = skills[i % skills.length];
        temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i1, thetaSpan * i2)), text]);
        i++;
      }
    }
    return temp;
  }, [count, radius]);

  const groupRef = useRef();

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.05;
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.05) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {words.map(([pos, word], index) => (
        <Word key={index} position={pos} children={word} />
      ))}
    </group>
  );
}

export default function SkillSphere() {
  return (
    <div style={{ width: '100%', height: '400px', cursor: 'grab' }}>
      <Canvas camera={{ position: [0, 0, 35], fov: 90 }}>
        <fog attach="fog" args={['#ffffff', 0, 80]} />
        <ambientLight intensity={Math.PI} />
        <Cloud count={4} radius={20} />
        <TrackballControls noZoom noPan rotateSpeed={2} />
      </Canvas>
    </div>
  );
}
