// src/components/ThreeDPlane.jsx
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, GridHelper } from '@react-three/drei'

function Plane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      {/* Flat plane (like a sheet of paper) */}
      <planeGeometry args={[4, 4]} />
      <meshStandardMaterial color="skyblue" side={2} />
    </mesh>
  )
}

const ThreeDPlane = () => {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
      <color attach="background" args={['#f9fafb']} /> {/* Background color */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} />
      <Plane />
      <OrbitControls />
      <GridHelper args={[10, 10]} />
    </Canvas>
  )
}

export default ThreeDPlane
