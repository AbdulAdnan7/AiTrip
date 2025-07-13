import React from 'react'
import { useGLTF } from '@react-three/drei'

const GenericModel = ({ scale = 1 }) => {
  const { scene } = useGLTF('/models/Robot.glb') // 📁 correct public path
  return <primitive object={scene} scale={scale} position={[0, -0.5, 0]} />
}

export default GenericModel
